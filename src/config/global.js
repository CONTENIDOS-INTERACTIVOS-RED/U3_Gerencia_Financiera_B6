export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Estrategia financiera y toma de decisiones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación financiera y presupuestación empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Importancia de la planeación financiera en la sostenibilidad empresarial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Elaboración y control de presupuestos para la optimización de costos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis financiero y toma de decisiones estratégicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Uso de indicadores financieros para evaluar la rentabilidad empresarial',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Modelos de evaluación de costos y rentabilidad para la competitividad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión del riesgo y sostenibilidad empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Identificación y mitigación de riesgos financieros en la empresa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Estrategias de sostenibilidad y gestión de crisis en entornos empresariales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'González, M. Guzmán Vásquez, A. & Trujillo Dávila, M. A. (2020). Gerencia financiera basada en valor: hacia un proceso sistemático para la toma de decisiones financieras: (1 ed.). Colegio de Estudios Superiores de Administración - CESA. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222487 ',
    },
    {
      referencia:
        'Encalada Encarnación, V. R. (2023). La gerencia y la empresa: desafíos y oportunidades: con enfoque de las Normas Internacionales de Información Financiera: (1 ed.). Editorial Universidad del Rosario. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/248674',
    },
    {
      referencia:
        'Muñoz Cabanes, E. & Ruíz Pelayo, P. (2020). Gestión financiera: (1 ed.). Macmillan Iberia, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267817 ',
    },
    {
      referencia:
        'Tapia Iturriaga, C. K. & Jiménez Sierra, J. A. (2020). Cómo construir tu libertad financiera: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130925 ',
    },
    {
      referencia:
        'Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271541 ',
    },
    {
      referencia:
        'Redalyc. (2010.). La importancia de la planeación financiera en la elaboración de planes de negocio para la creación de empresas sostenibles.  ',
      link: 'https://www.redalyc.org/pdf/909/90920479010.pdf',
    },
    {
      referencia:
        'Rubio-Álvarez, A. (2024). Gestión financiera estratégica: desafíos y oportunidades en la toma de decisiones.  ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/10007409.pdf',
    },
    {
      referencia:
        'Osorio, J. (2018). Diseño e implementación de un modelo estándar de costos para las PyMEs del sector de la televisión en Colombia. Universidad de Antioquia.  ',
      link:
        'https://bibliotecadigital.udea.edu.co/bitstream/10495/39599/1/OsorioJair_2018_ModeloEstandarCostos.pdf',
    },
    {
      referencia:
        'Redalyc. (2024). Hacia la responsabilidad social como estrategia de sostenibilidad en la gestión empresarial.  ',
      link: 'https://www.redalyc.org/journal/280/28066593008/28066593008.pdf',
    },
    {
      referencia:
        'Universidad Europea. (2025). Sostenibilidad empresarial: estrategias y ejemplos.  ',
      link: 'https://universidadeuropea.com/blog/sostenibilidad-empresas/',
    },
  ],
  glosario: [
    {
      termino: 'Activos',
      significado:
        'conjunto de bienes y derechos que posee una empresa y que tienen un valor económico.',
    },
    {
      termino: 'Análisis financiero',
      significado:
        'evaluación de la situación económica y desempeño de una empresa mediante el estudio de sus estados financieros.',
    },
    {
      termino: 'Balance general',
      significado:
        'informe contable que refleja la situación financiera de una empresa en un momento determinado, mostrando activos, pasivos y patrimonio.',
    },
    {
      termino: 'Capital',
      significado:
        'recursos financieros o bienes utilizados por una empresa para operar y generar ingresos.',
    },
    {
      termino: 'Costos fijos',
      significado:
        'gastos que no varían con el nivel de producción o ventas, como alquiler o salarios administrativos.',
    },
    {
      termino: 'Costos variables',
      significado:
        'gastos que cambian en función del volumen de producción o ventas, como materia prima o comisiones.',
    },
    {
      termino: 'Diversificación',
      significado:
        'estrategia empresarial que consiste en ampliar la oferta de productos, mercados o inversiones para reducir riesgos.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'documentos contables que presentan la situación económica y el rendimiento financiero de una empresa en un período determinado.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'registro de los ingresos y egresos de efectivo en una empresa durante un período de tiempo.',
    },
    {
      termino: 'Gestión de crisis',
      significado:
        'conjunto de estrategias y acciones implementadas para responder a situaciones adversas y minimizar su impacto en la empresa.',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'herramientas de análisis que permiten evaluar la rentabilidad, liquidez, solvencia y eficiencia operativa de una empresa.',
    },
    {
      termino: 'Liquidez',
      significado:
        'capacidad de una empresa para cumplir con sus obligaciones financieras a corto plazo.',
    },
    {
      termino: 'Margen de utilidad',
      significado:
        'relación entre la utilidad neta y las ventas, que indica la rentabilidad de la empresa.',
    },
    {
      termino: 'Pasivos',
      significado:
        'obligaciones y deudas que tiene una empresa con terceros, como proveedores o entidades financieras.',
    },
    {
      termino: 'Patrimonio neto',
      significado:
        'diferencia entre los activos y pasivos de una empresa, representando el valor neto de la misma.',
    },
    {
      termino: 'Planeación financiera',
      significado:
        'proceso de establecimiento de objetivos económicos y estrategias para optimizar los recursos financieros de una empresa.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'capacidad de una empresa para generar beneficios a partir de sus inversiones y operaciones.',
    },
    {
      termino: 'Riesgo financiero',
      significado:
        'probabilidad de que una empresa enfrente pérdidas debido a fluctuaciones económicas, de mercado o incumplimientos de pago.',
    },
    {
      termino: 'Sostenibilidad empresarial',
      significado:
        'estrategias y prácticas que garantizan el equilibrio entre rentabilidad, impacto ambiental y responsabilidad social en la empresa.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso de selección de la mejor alternativa para alcanzar objetivos empresariales y optimizar recursos.',
    },
  ],
}
