-- ================================================================
-- Tabla TEMAS — ejecutar en Supabase SQL Editor
-- ================================================================

create table if not exists temas (
  id           bigint generated always as identity primary key,
  codigo       text unique not null,          -- 'G1'…'G13', 'E1'…'E59'
  serie        text not null check (serie in ('G', 'E')),
  numero       int  not null,
  titulo       text not null,
  contenido    text not null,
  content_hash text not null,
  updated_at   timestamptz default now()
);

-- Índice para búsquedas por serie+número
create unique index if not exists temas_serie_numero on temas (serie, numero);

-- RLS: solo lectura pública (la escritura la hace el script con service_role key)
alter table temas enable row level security;

create policy "lectura publica temas"
  on temas for select using (true);

-- (Opcional) índice de texto completo para búsquedas futuras
create index if not exists temas_contenido_fts
  on temas using gin(to_tsvector('spanish', contenido));
