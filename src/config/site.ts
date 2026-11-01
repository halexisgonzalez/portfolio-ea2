/**
 * Site-wide configuration that is not academic data.
 * Edit these values to point at your own repository and branding.
 */
export const siteConfig = {
  name: 'Portfolio EA2',
  title: 'Portfolio Académico de Electrónica Aplicada II',
  description:
    'Trabajos Finales Integradores de Electrónica Aplicada II desarrollados por estudiantes a través de distintas cohortes académicas.',
  /** Link shown in the header. Point it at this repository. */
  repositoryUrl: 'https://github.com/halexisgonzalez/portfolio-ea2',
};

/** Host institution, shown on the home page. */
export const institution = {
  name: 'Universidad Tecnológica Nacional · Facultad Regional Córdoba',
  logo: 'images/university-logo.png',
  logoAlt: 'Universidad Tecnológica Nacional (UTN)',
};

/** Course details, shown on the home page. */
export const courseInfo = {
  program: 'Ingeniería Electrónica',
  subject: 'Electrónica Aplicada II',
  professor: 'Ing. González, Hernando Alexis',
  contactEmail: 'hagonzalez@iua.edu.ar',
};

/**
 * Stages of the Trabajo Final Integrador (TFI), as defined by the course
 * regulations. Shown on the home page.
 */
export const tfiSteps = [
  {
    title: 'Preproyecto',
    description:
      'Cada estudiante propone un dispositivo. La cátedra examina el preproyecto y define si es motivo de un TFI.',
  },
  {
    title: 'Diseño y desarrollo',
    description:
      'Análisis, diseño, simulación, medición e implementación, integrando los contenidos de la materia.',
  },
  {
    title: 'Informe técnico',
    description:
      'El informe final se entrega al Profesor de Trabajos Prácticos una semana antes de la evaluación.',
  },
  {
    title: 'Coloquio',
    description:
      'Se aprueba en el Laboratorio Central de Electrónica con el informe, el dispositivo funcionando y un coloquio.',
  },
];
