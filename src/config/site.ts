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

/** Department of Electronic Engineering, shown in the header and footer. */
export const department = {
  name: 'Departamento de Ingeniería Electrónica',
  logo: 'images/ie-logo.png',
  logoAlt: 'Ingeniería Electrónica UTN FRC',
  url: 'https://dptoelectronica.frc.utn.edu.ar/electronica/',
};

/**
 * Course details, taken from the department's page for the subject:
 * https://dptoelectronica.frc.utn.edu.ar/electronica/materia/27-electronica-aplicada-ii/
 */
export const courseInfo = {
  program: 'Ingeniería Electrónica',
  subject: 'Electrónica Aplicada II',
  level: '4.º año',
  regime: 'Anual',
  weeklyHours: 5,
  pageUrl: 'https://dptoelectronica.frc.utn.edu.ar/electronica/materia/27-electronica-aplicada-ii/',
  syllabusUrl:
    'https://dptoelectronica.frc.utn.edu.ar/electronica/wp-content/uploads/2026/03/27_Electronica-Aplicada-II-_V_3.2024_rev_5.pdf',
  summary:
    'Desarrolla habilidades para analizar y diseñar amplificadores discretos realimentados, con énfasis en estabilidad y respuesta en frecuencia; circuitos con amplificadores operacionales, con foco en el diseño microelectrónico; y fuentes de alimentación lineales discretas e integradas.',
  contents: [
    'Amplificadores realimentados',
    'Amplificadores operacionales. Aplicaciones lineales y no lineales',
    'Respuesta en frecuencia de amplificadores no realimentados',
    'Respuesta en frecuencia de amplificadores realimentados',
    'Estabilidad, compensación, osciladores de baja frecuencia y slew rate',
    'Amplificadores de potencia de baja frecuencia',
    'Fuentes de alimentación reguladas lineales',
    'Introducción al diseño de circuitos integrados analógicos',
  ],
  objectives: [
    'Analizar topologías de circuitos, formular modelos matemáticos y obtener expresiones útiles para el diseño.',
    'Aplicar un flujo de diseño descendente, desde modelos abstractos hasta prototipos.',
    'Desarrollar configuraciones experimentales y estrategias de medición para validar diseños.',
    'Formular procedimientos de implementación técnicamente factibles y de costo razonable.',
    'Exponer y defender diseños y resultados, en forma oral y escrita.',
    'Integrarse a grupos de trabajo aportando soluciones y críticas técnicamente fundadas.',
  ],
};

export interface Teacher {
  name: string;
  /** Academic title, e.g. "Ing." or "Mg. Ing.". */
  title: string;
  /** Position in the course, e.g. "Profesor Adjunto". */
  role: string;
  /** Path relative to `public/`. */
  photo: string;
}

/** Teaching staff, by position and then alphabetically by surname. */
export const teachers: Teacher[] = [
  {
    name: 'Carlos Enrique Olmos',
    title: 'Mg. Ing.',
    role: 'Profesor Adjunto',
    photo: 'images/docentes/carlos-enrique-olmos.jpg',
  },
  {
    name: 'Hernando Alexis González',
    title: 'Ing.',
    role: 'Jefe de Trabajos Prácticos',
    photo: 'images/docentes/hernando-alexis-gonzalez.jpg',
  },
  {
    name: 'Pablo Gabriel Miklosa',
    title: 'Ing.',
    role: 'Jefe de Trabajos Prácticos',
    photo: 'images/docentes/pablo-gabriel-miklosa.jpg',
  },
];

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
