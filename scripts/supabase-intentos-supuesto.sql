-- ================================================================
-- Tabla INTENTOS_SUPUESTO — ejecutar en Supabase SQL Editor
-- ================================================================
-- Guarda los intentos de la segunda prueba cuando la sincronización está
-- activada. La app conserva además una copia local si esta inserción falla.

create table if not exists intentos_supuesto (
  id                    bigint generated always as identity primary key,
  codigo                text not null,
  supuesto_id           text not null,
  fecha                 timestamptz not null default now(),
  minutos_empleados     integer not null check (minutos_empleados >= 0),
  autonota              integer check (autonota between 0 and 70),
  notas_autocorreccion  text,
  rubrica               jsonb,
  created_at            timestamptz not null default now()
);

create index if not exists intentos_supuesto_codigo_fecha
  on intentos_supuesto (codigo, created_at desc);

-- Compatible con el modelo de sincronización actual por código. No protege
-- datos frente a quien conozca la anon key; antes de almacenar datos sensibles
-- hay que migrar a autenticación real y políticas RLS por usuario.
alter table intentos_supuesto enable row level security;

create policy "intentos supuesto acceso por codigo de la app"
  on intentos_supuesto for all
  using (true)
  with check (true);
