// supabase/functions/github-webhook/index.ts
// Valida la firma de GitHub y reenvía a Make solo los avisos auténticos.
// Secretos, nunca en el repo (o en el panel «Edge Function Secrets»):
//   supabase secrets set GITHUB_WEBHOOK_SECRET=tu_secreto
//   supabase secrets set MAKE_WEBHOOK_URL=tu_url_de_make
// GitHub no envía un JWT de Supabase: por eso verify_jwt = false en supabase/config.toml

const enc = new TextEncoder();

async function firmaEsperada(secreto: string, cuerpo: string): Promise<string> {
  const clave = await crypto.subtle.importKey(
    "raw", enc.encode(secreto), { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", clave, enc.encode(cuerpo));
  const hex = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return "sha256=" + hex;
}

// Comparación en tiempo constante: GitHub pide no usar == para la firma
function iguales(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let dif = 0;
  for (let i = 0; i < a.length; i++) dif |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return dif === 0;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Solo POST", { status: 405 });

  const secreto = Deno.env.get("GITHUB_WEBHOOK_SECRET") ?? "";
  const destino = Deno.env.get("MAKE_WEBHOOK_URL") ?? "";
  const cuerpo = await req.text();
  const firma = req.headers.get("x-hub-signature-256") ?? "";

  if (!secreto || !destino || !iguales(firma, await firmaEsperada(secreto, cuerpo))) {
    return new Response("Firma no válida", { status: 401 });
  }

  const evento = req.headers.get("x-github-event") ?? "desconocido";
  if (evento === "ping") return new Response("pong", { status: 200 });

  const r = await fetch(destino, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-GitHub-Event": evento },
    body: cuerpo,
  });
  return new Response(r.ok ? "ok" : "Make no respondió bien", { status: r.ok ? 200 : 502 });
});
