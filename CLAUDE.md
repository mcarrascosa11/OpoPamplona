# OpoPamplona

App de estudio para la oposición de Arquitecto del Ayuntamiento de Pamplona. Cómo arrancarla y las
comprobaciones antes de publicar están en `README.md`.

## Publicar sin llenar Vercel

La cuenta de Vercel es Hobby: 10 GB de Deployment Storage para todos los proyectos de Marcos juntos, y cada
push crea un despliegue que ocupa espacio. En octubre de 2026 se llenaron los 10 GB (este repo llegó a 21
pushes en un solo día).

- Agrupa los cambios y haz un solo push al terminar, no uno por commit ni por archivo.
- Trabaja en `main` o en una sola rama por cambio. Al fusionarla, borra la rama: mientras exista, Vercel
  conserva su última preview.
- No crees ramas de prueba, temporales o variantes (`-v2`, `-final`, `-fix`…). Si hace falta conservar algo,
  usa una etiqueta (`git tag archivo/<nombre>`), que no genera despliegues.
