-- ================================================================
-- Tabla SUBRAYADOS — ejecutar en Supabase SQL Editor
-- ================================================================
-- RLS permisiva (igual que progreso): el filtrado por "codigo" lo
-- hace el código de la app con .eq("codigo", getCodigo()).

create table if not exists subrayados (
  id         bigint generated always as identity primary key,
  codigo     text not null,            -- codigo de sincronizacion del usuario
  tema_codigo text not null,           -- 'G1'..'G13', 'E1'..'E59'
  inicio     int  not null,            -- offset de caracter (inicio, inclusivo)
  fin        int  not null,            -- offset de caracter (fin, exclusivo)
  color      text not null default 'amarillo',  -- 'amarillo' | 'verde' | 'rosa'
  nota       text,
  created_at timestamptz default now(),
  constraint subrayados_rango check (fin > inicio)
);

create index if not exists subrayados_codigo_tema
  on subrayados (codigo, tema_codigo);

alter table subrayados enable row level security;

-- Política permisiva: la app filtra por codigo en las queries
create policy "subrayados acceso total"
  on subrayados for all
  using (true)
  with check (true);
