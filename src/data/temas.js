/* Índice oficial del temario (bases BON, convocatoria mayo 2026).
   13 temas generales (solo test) + 59 específicos (test + supuestos). */

export const TEMAS_GENERAL = [
  "La Constitución Española de 1978",
  "LORAFNA — Amejoramiento del Régimen Foral",
  "Organización del Ayuntamiento de Pamplona (L 7/1985 + Decreto org.)",
  "LF 6/1990 de Administración Local de Navarra",
  "Ley 40/2015 — Régimen Jurídico del Sector Público",
  "Ley 39/2015 — Procedimiento Administrativo (I)",
  "Ley 39/2015 — Procedimiento Administrativo (II) + impugnación local",
  "DFL 251/1993 — Estatuto del Personal de las AAPP de Navarra",
  "LF 5/2018 — Transparencia y acceso a la información",
  "Protección de datos (RGPD + LO 3/2018)",
  "Igualdad (LO 3/2007 + LF 17/2019)",
  "Estrategia Transición Energética y Cambio Climático 2030 Pamplona",
  "Bienes de las entidades locales (LF 6/1990 + DF 280/1990)",
];

export const TEMAS_ESP = [
  "LOE — Ley 38/1999 de Ordenación de la Edificación",
  "CTE — RD 314/2006 y Parte I",
  "CTE DB-SI — Seguridad en caso de incendio",
  "RD 513/2017 — RIPCI",
  "RD 164/2025 — Incendios establecimientos industriales",
  "CTE DB-SUA — Seguridad de utilización y accesibilidad",
  "DA DB-SUA/2 — Accesibilidad en edificios existentes",
  "CTE DB-HE — Ahorro de energía",
  "CTE DB-HE2 + RITE (RD 1027/2007)",
  "CTE DB-HS — Salubridad",
  "CTE DB-SE-AE — Acciones en la edificación",
  "CTE DB-SE-C — Cimientos",
  "LF 10/2010 — Derecho a la vivienda (I)",
  "LF 10/2010 — Derecho a la vivienda (II)",
  "DF 61/2013 — Actuaciones protegibles (I)",
  "DF 61/2013 — Rehabilitación (II) + Ordenanza Pamplona",
  "DF 61/2013 — Integración social (III)",
  "DF 142/2004 — Habitabilidad (I)",
  "DF 142/2004 — Habitabilidad (II)",
  "LF 17/2020 — Actividades con incidencia ambiental",
  "DF 26/2022 — Reglamento actividades ambientales",
  "LF 7/2003 — Turismo de Navarra",
  "LF 2/1989 — Espectáculos públicos",
  "DF 202/2002 — Catálogo de espectáculos",
  "RD 1627/1997 — Seguridad y salud en obras",
  "DF 108/2014 IEE + DF 322/2000 Libro del Edificio",
  "DF 23/2011 — Residuos de construcción y demolición",
  "RDL 7/2015 — Ley de Suelo y Rehabilitación Urbana",
  "DFL 1/2017 — Territorio y Urbanismo (Tít. prelim, I, II)",
  "DFL 1/2017 — Título III: régimen del suelo",
  "DFL 1/2017 — Título IV: ejecución del planeamiento",
  "DFL 1/2017 — Título V: disciplina + Título VII",
  "DFL 1/2017 — Título VI: mercado del suelo",
  "DF 253/2019 — Registro de Planeamiento",
  "Licencias urbanísticas",
  "Declaraciones responsables y comunicaciones previas",
  "LF 14/2005 — Patrimonio Cultural de Navarra",
  "Orden ECO/805/2003 — Valoración de inmuebles",
  "RD 1492/2011 — Reglamento de valoraciones",
  "RD 849/1986 — Dominio Público Hidráulico",
  "RD 1367/2007 ruido + DF 135/1989",
  "LF 29/2018 — Memoria Histórica",
  "LF 17/2001 — Comercio en Navarra",
  "Ley 21/2013 — Evaluación ambiental",
  "Orden TMA/851/2021 — Accesibilidad espacios públicos",
  "LF 4/2022 — Cambio Climático y Transición Energética",
  "LF 2/2018 — Contratos Públicos (I)",
  "LF 2/2018 — Contratos Públicos (II)",
  "LF 2/2018 — Contratos Públicos (III)",
  "LF 2/2018 — Contratos Públicos (IV)",
  "DF 45/2011 — POT 3 Área Central",
  "Historia de la evolución urbanística de Pamplona",
  "Plan Municipal de Pamplona",
  "Catálogo del Plan Municipal de Pamplona",
  "PEPRI del Casco Antiguo de Pamplona",
  "Ordenanza General de Edificación de Pamplona",
  "Ordenanzas de higiene de Pamplona",
  "Movilidad en la planificación urbana de Pamplona",
  "Ciclo del agua en la planificación urbana de Pamplona",
];

export const temaTitulo = (k) => {
  const n = parseInt(k.slice(1), 10);
  return k[0] === "G" ? TEMAS_GENERAL[n - 1] : TEMAS_ESP[n - 1];
};
export const esGeneral = (k) => k[0] === "G";
export const temaNum = (k) => parseInt(k.slice(1), 10);
export const totalGeneral = TEMAS_GENERAL.length;
export const totalEsp = TEMAS_ESP.length;
