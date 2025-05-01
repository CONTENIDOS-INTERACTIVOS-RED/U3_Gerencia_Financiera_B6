<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Esta unidad tiene como propósito proporcionar herramientas para identificar, evaluar y mitigar riesgos financieros, así como para diseñar estrategias que favorezcan la sostenibilidad económica, social y ambiental. La planificación financiera, la formulación de presupuestos y la administración del riesgo son elementos fundamentales en la toma de decisiones empresariales, lo cual posibilita a las organizaciones equilibrar la rentabilidad con la sostenibilidad.
        p(data-aos="fade-left") A lo largo del desarrollo de esta unidad, se abordarán tres temas clave:
        .bg-color-4.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Identificación y mitigación de riesgos financieros:</b> se analizarán los diferentes tipos de riesgo financiero y las estrategias para minimizar su impacto en la empresa.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Estrategias para la optimización de costos y rentabilidad:</b> se explorarán herramientas para reducir costos sin comprometer la calidad ni la competitividad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Impacto del diagnóstico financiero en la sostenibilidad empresarial:</b> se evaluará la relación entre la sostenibilidad y la gestión financiera, considerando la responsabilidad social y ambiental como factores estratégicos.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El estudio de esta unidad permitirá desarrollar <b>habilidades analíticas y estratégicas</b>, facilitando la formulación de presupuestos, la interpretación de indicadores financieros y la implementación de planes de mitigación de riesgos. Se prevé que el estudiante comprenda la relevancia de integrar criterios de sostenibilidad en la toma de decisiones empresariales y adquiera la habilidad para estructurar estrategias financieras que fomenten el equilibrio entre rentabilidad y sostenibilidad.

</template>
