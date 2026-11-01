# Portfolio EA2

Portfolio académico histórico de los Trabajos Finales Integradores (TFI) de **Electrónica Aplicada II** — Ingeniería Electrónica, Universidad Tecnológica Nacional, Facultad Regional Córdoba — desarrollados por estudiantes a lo largo de distintas cohortes (2026, 2027...).

Sitio 100% estático: sin backend, sin base de datos, sin autenticación. Todo el contenido académico vive en archivos JSON versionados en este repositorio y se despliega gratuitamente en GitHub Pages.

## Objetivo

Mostrar, año a año, quiénes cursaron la materia, qué Trabajos Finales Integradores construyeron, con qué tecnologías y componentes, y dónde consultar el repositorio, los esquemáticos y las demos. El sitio está pensado para crecer indefinidamente: agregar una nueva cohorte es una tarea de **carga de datos**, no de programación — no hace falta tocar componentes, páginas ni rutas.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (modo `strict`)
- [Vite 8](https://vite.dev/) como build tool
- [React Router](https://reactrouter.com/) para el ruteo
- CSS Modules + variables CSS nativas (sin frameworks de UI ni CSS-in-JS)
- [oxlint](https://oxc.rs/) para linting
- GitHub Actions + GitHub Pages para el deploy

Sin dependencias de UI adicionales: la interfaz completa (cards, badges, filtros, tema claro/oscuro, nav responsive) está implementada con CSS plano para mantener el proyecto simple y liviano.

## Estructura

```text
src/
├── components/     # Piezas de UI reutilizables (Header, ProjectCard, StudentCard, ...)
├── pages/          # Una carpeta por ruta (Home, Projects, StudentProfile, Year, ...)
├── data/           # Datos académicos (un JSON por año) + capa de agregación (index.ts)
├── types/          # Modelo de datos tipado (Student, Project, AcademicYearData...)
├── utils/          # Búsqueda, filtros, formateo de texto, colores de categoría
├── config/         # Sitio, institución, materia, docentes y etapas del TFI (site.ts)
└── styles/         # Tokens de diseño (tema claro/oscuro) y estilos globales

public/             # Favicon, logos (UTN, Ingeniería Electrónica), fotos de docentes, 404.html (fallback de rutas para GitHub Pages)
.github/workflows/  # Deploy automático a GitHub Pages
```

La separación es estricta: los componentes y páginas **solo renderizan** lo que reciben desde `src/data`. Ningún nombre de alumno, proyecto o tecnología está escrito dentro de un componente.

## Desarrollo local

Requiere Node.js 20+.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build

```bash
npm run build
```

Genera el sitio estático en `dist/`. También corre la verificación de tipos de TypeScript (`tsc -b`) antes de compilar.

```bash
npm run preview   # sirve dist/ localmente, tal como quedaría en producción
npm run lint      # oxlint
```

## Deploy

El deploy es automático vía GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` instala dependencias, corre `npm run build` y publica `dist/` en GitHub Pages.

Para activarlo la primera vez:

1. En el repositorio de GitHub: **Settings → Pages → Source → GitHub Actions**.
2. Hacer push a `main`. El workflow se encarga del resto.
3. El sitio queda disponible en `https://halexisgonzalez.github.io/portfolio-ea2/`.

Si el repositorio se llama distinto a `portfolio-ea2`, actualizar el `base` en [`vite.config.ts`](vite.config.ts) para que coincida.

> El proyecto no usa un dominio personalizado por defecto. Si más adelante configurás uno, el `base` de Vite puede volver a `/`.

## Información de la materia y docentes

Todo lo que no es dato de una cohorte vive en [`src/config/site.ts`](src/config/site.ts):

- `courseInfo`: nivel, régimen, carga horaria, resumen, contenidos mínimos, objetivos y links al programa (PDF) y a la página de la materia en el [Departamento de Ingeniería Electrónica](https://dptoelectronica.frc.utn.edu.ar/electronica/materia/27-electronica-aplicada-ii/).
- `teachers`: equipo docente. Cada docente tiene `name`, `title` (por ejemplo `Ing.` o `Mg. Ing.`) y `photo`.
- `tfiSteps`: etapas del Trabajo Final Integrador, según el reglamento de la cátedra.

Se muestran en la página `/materia` y en la home.

### Agregar o cambiar un docente

1. Guardar la foto en `public/images/docentes/<nombre-apellido>.jpg`, recortada en formato vertical 4:5 (por ejemplo 640×800 px) y comprimida (menos de ~150 KB).
2. Agregar la entrada en `teachers`:

```ts
{
  name: 'Nombre Apellido',
  title: 'Ing.',
  photo: 'images/docentes/nombre-apellido.jpg',
}
```

## Agregar una nueva cohorte

Crear `src/data/2027.json` (mismo formato que [`src/data/2026.json`](src/data/2026.json)):

```json
{
  "year": 2027,
  "students": [],
  "projects": []
}
```

No hace falta crear páginas, rutas ni componentes nuevos: `src/data/index.ts` detecta automáticamente cualquier archivo `src/data/<año>.json` (vía `import.meta.glob`) y el resto del sitio (estadísticas, home, `/years`, filtros) se actualiza solo.

### Vincular el material académico de la cohorte

Si existe un repositorio de contenido versionado por tags (`v2026`, `v2027`, ...), se puede enlazar agregando `materialUrl` al archivo del año:

```json
{
  "year": 2027,
  "materialUrl": "https://github.com/tu-org/contenido-ea2/releases/tag/v2027",
  "students": [],
  "projects": []
}
```

Cuando está presente, aparece un botón "Ver material" en la home y en la página de la cohorte.

## Agregar un estudiante

Dentro del `students` del año correspondiente:

```json
{
  "id": "ana-garcia",
  "name": "Ana García",
  "github": "https://github.com/ana-garcia",
  "linkedin": "https://www.linkedin.com/in/ana-garcia",
  "website": "https://anagarcia.dev",
  "bio": "Breve descripción del estudiante.",
  "projectIds": ["amplificador-audio-clase-ab"]
}
```

Todos los campos salvo `id`, `name` y `projectIds` son opcionales. El `id` debe ser único en todo el sitio (se usa como slug en `/students/:id`) y en minúsculas, sin espacios ni acentos.

## Agregar un proyecto

Dentro del `projects` del año correspondiente:

```json
{
  "id": "amplificador-audio-clase-ab",
  "name": "Amplificador de audio clase AB de 50 W",
  "description": "Amplificador de potencia realimentado con etapa de salida complementaria y fuente partida regulada.",
  "studentIds": ["ana-garcia"],
  "categories": ["Amplificadores de potencia", "Audio"],
  "technologies": ["LTspice", "KiCad", "TIP142/TIP147"],
  "repository": "https://github.com/ana-garcia/amplificador-audio-clase-ab",
  "demo": "https://www.youtube.com/watch?v=...",
  "image": null,
  "featured": false
}
```

- No hace falta indicar `year` en el proyecto: se toma automáticamente del año del archivo (`2027.json` → todos sus proyectos son de 2027).
- `studentIds` puede tener más de un id (proyectos grupales).
- `categories` es una lista con una o más de: `Amplificadores realimentados`, `Amplificadores operacionales`, `Amplificadores de potencia`, `Osciladores`, `Filtros activos`, `Fuentes de alimentación`, `Circuitos integrados analógicos`, `Audio`, `Instrumentación`, `Otros`. La lista vive en [`src/types/portfolio.ts`](src/types/portfolio.ts) y el color de cada una en [`src/utils/categoryColors.ts`](src/utils/categoryColors.ts).
- `repository`, `demo` e `image` son opcionales: si no existen (o son `null`), la interfaz simplemente no muestra ese botón/imagen — no hace falta dejarlos vacíos.
- `featured: true` hace que el proyecto aparezca en la sección "Proyectos destacados" de la home.

## Datos actuales

`src/data/2026.json` es la primera cohorte (todavía vacía). Los años siguientes se agregan de la misma forma (ver "Agregar una nueva cohorte" más arriba).
