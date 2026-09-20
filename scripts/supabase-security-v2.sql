-- Hardening de Supabase para OpoPamplona.
-- Ejecutar UNA VEZ en Supabase > SQL Editor antes de dar por terminada la migración.
-- Es idempotente y conserva los datos existentes.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.progreso (
  codigo text primary key,
  data jsonb,
  updated_at timestamptz default now()
);

create table if not exists public.temas (
  id bigint generated always as identity primary key,
  codigo text unique not null,
  serie text not null check (serie in ('G', 'E')),
  numero int not null,
  titulo text not null,
  contenido text not null,
  content_hash text not null,
  updated_at timestamptz default now()
);

create table if not exists public.subrayados (
  id bigint generated always as identity primary key,
  codigo text not null,
  tema_codigo text not null,
  inicio int not null,
  fin int not null,
  color text not null default 'amarillo',
  nota text,
  created_at timestamptz default now(),
  constraint subrayados_rango check (fin > inicio)
);

create table if not exists public.intentos_supuesto (
  id bigint generated always as identity primary key,
  codigo text not null,
  supuesto_id text not null,
  fecha timestamptz not null default now(),
  minutos_empleados integer not null check (minutos_empleados >= 0),
  autonota integer check (autonota between 0 and 70),
  notas_autocorreccion text,
  rubrica jsonb,
  created_at timestamptz not null default now()
);

create unique index if not exists temas_serie_numero on public.temas (serie, numero);
create index if not exists subrayados_codigo_tema on public.subrayados (codigo, tema_codigo);
create index if not exists intentos_supuesto_codigo_fecha on public.intentos_supuesto (codigo, created_at desc);

alter table public.temas enable row level security;
alter table public.progreso enable row level security;
alter table public.subrayados enable row level security;
alter table public.intentos_supuesto enable row level security;

-- Borra cualquier política anterior en estas cuatro tablas para evitar que una
-- política permisiva sobreviva y anule el endurecimiento (las políticas RLS
-- permisivas se combinan con OR).
do $$
declare p record;
begin
  for p in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in ('temas', 'progreso', 'subrayados', 'intentos_supuesto')
  loop
    execute format('drop policy %I on %I.%I', p.policyname, p.schemaname, p.tablename);
  end loop;
end $$;

-- Mínimo privilegio: el cliente anónimo solo lee temas y solo puede operar
-- sobre sus datos sincronizados si demuestra conocer el código.
revoke all privileges on table public.temas from anon, authenticated;
revoke all privileges on table public.progreso from anon, authenticated;
revoke all privileges on table public.subrayados from anon, authenticated;
revoke all privileges on table public.intentos_supuesto from anon, authenticated;

grant select on table public.temas to anon;
grant select, insert, update, delete on table public.progreso to anon;
grant select, insert, update, delete on table public.subrayados to anon;
grant select, insert, update, delete on table public.intentos_supuesto to anon;

do $$
declare seq_name text;
begin
  seq_name := pg_get_serial_sequence('public.subrayados', 'id');
  if seq_name is not null then
    execute format('grant usage, select on sequence %s to anon', seq_name);
  end if;

  seq_name := pg_get_serial_sequence('public.intentos_supuesto', 'id');
  if seq_name is not null then
    execute format('grant usage, select on sequence %s to anon', seq_name);
  end if;
end $$;

create policy "temas_read_only"
  on public.temas
  for select
  to anon
  using (true);

-- El navegador envía SHA-256(código) en x-sync-code-hash.
-- La base de datos calcula el mismo hash sobre cada fila y RLS impide ver,
-- modificar o borrar filas de otros códigos.
create policy "progreso_sync_code"
  on public.progreso
  for all
  to anon
  using (
    coalesce(
      encode(extensions.digest(btrim(codigo), 'sha256'), 'hex') =
      (current_setting('request.headers', true)::jsonb ->> 'x-sync-code-hash'),
      false
    )
  )
  with check (
    coalesce(
      encode(extensions.digest(btrim(codigo), 'sha256'), 'hex') =
      (current_setting('request.headers', true)::jsonb ->> 'x-sync-code-hash'),
      false
    )
  );

create policy "subrayados_sync_code"
  on public.subrayados
  for all
  to anon
  using (
    coalesce(
      encode(extensions.digest(btrim(codigo), 'sha256'), 'hex') =
      (current_setting('request.headers', true)::jsonb ->> 'x-sync-code-hash'),
      false
    )
  )
  with check (
    coalesce(
      encode(extensions.digest(btrim(codigo), 'sha256'), 'hex') =
      (current_setting('request.headers', true)::jsonb ->> 'x-sync-code-hash'),
      false
    )
  );

create policy "intentos_sync_code"
  on public.intentos_supuesto
  for all
  to anon
  using (
    coalesce(
      encode(extensions.digest(btrim(codigo), 'sha256'), 'hex') =
      (current_setting('request.headers', true)::jsonb ->> 'x-sync-code-hash'),
      false
    )
  )
  with check (
    coalesce(
      encode(extensions.digest(btrim(codigo), 'sha256'), 'hex') =
      (current_setting('request.headers', true)::jsonb ->> 'x-sync-code-hash'),
      false
    )
  );

-- Comprobación rápida: estas consultas deben devolver exactamente las políticas
-- anteriores y no debe quedar ninguna política "using (true)" en tablas privadas.
select schemaname, tablename, policyname, roles, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('temas', 'progreso', 'subrayados', 'intentos_supuesto')
order by tablename, policyname;
