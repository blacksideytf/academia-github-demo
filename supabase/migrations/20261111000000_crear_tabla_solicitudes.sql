-- Tabla ficticia de solicitudes de cita (demo para estudiar GitHub)
create table if not exists public.solicitudes (
  id bigint generated always as identity primary key,
  creada_en timestamptz not null default now(),
  nombre text not null,
  email text not null,
  telefono text,
  motivo text,
  origen text,
  puntuacion smallint check (puntuacion between 1 and 5)
);

-- Seguridad a nivel de fila activada: sin políticas, nadie lee desde el cliente
alter table public.solicitudes enable row level security;
