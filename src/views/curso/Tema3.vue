<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Gestión del riesgo y sostenibilidad empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 Se invita a escuchar este podcast, en el que se analiza la relación entre la gestión del riesgo y la sostenibilidad empresarial. A través de ejemplos y reflexiones, se examina cómo la integración de criterios ambientales, sociales y de gobernanza (ESG) fortalece la resiliencia organizacional y abre nuevas oportunidades.

    .bg-full-width.bg-color-11.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Gestión del riesgo y sostenibilidad: claves para el futuro empresarial"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Identificación y mitigación de riesgos financieros en la empresa  
    
    p La <b>gestión del riesgo financiero</b> es un proceso esencial para garantizar la estabilidad y el crecimiento de una empresa. Identificar y mitigar los riesgos permite minimizar pérdidas económicas y asegurar la viabilidad de las operaciones. Entre los principales riesgos financieros se encuentran el <b>riesgo de mercado, riesgo de crédito, riesgo de liquidez y riesgo operacional.</b>
    p.mb-5 Tipos de riesgos financieros y métodos de identificación: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Riesgo de mercado
              p Se origina por fluctuaciones en variables económicas como tasas de interés, tipos de cambio o precios de materias primas. Un análisis detallado de las tendencias del mercado y el uso de modelos predictivos ayudan a mitigar este riesgo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Riesgo de crédito
              p Se presenta cuando los clientes o socios comerciales no cumplen con sus compromisos financieros. Para reducirlo, se recomienda llevar a cabo evaluaciones de solvencia y establecer políticas de crédito claras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Riesgo de liquidez
              p Se refiere a la dificultad de la empresa para cumplir con sus obligaciones de pago a corto plazo. La gestión eficiente del flujo de caja y el mantenimiento de reservas estratégicas de efectivo son medidas clave para su mitigación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Riesgo operacional
              p Proviene de fallas en procesos internos, errores humanos o incidentes externos. La automatización de procesos, el uso de auditorías internas y la implementación de controles son estrategias recomendadas para reducirlo.
    
    p.mb-4 Estrategias para la mitigación de riesgos: 

    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5.text-center Diversificación de inversiones
              p.mb-0.text-center Distribuir los recursos en diferentes activos y mercados para minimizar la exposición a un solo factor de riesgo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5.text-center Coberturas financieras
              p.mb-0.text-center Utilizar instrumentos financieros como futuros y opciones para protegerse ante variaciones adversas en el mercado.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5.text-center Monitoreo del flujo de caja
              p.mb-0.text-center Implementar software de gestión financiera para optimizar la administración del capital de trabajo.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5.text-center Evaluación de clientes y proveedores
              p.mb-0.text-center Aplicar análisis de riesgo crediticio antes de establecer relaciones comerciales.
        
        h2(data-aos="fade-left") Ejemplo práctico: empresa de exportaciones y el riesgo cambiario
    
    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
          .col-lg-6
            h5 Caso
            p Una empresa exportadora de productos agrícolas realiza ventas en dólares, pero incurre en costos en moneda local. Si el tipo de cambio varía desfavorablemente, las ganancias podrían reducirse significativamente.
    .bg-full-width.bg-color-3.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            h5 Solución
            p Para mitigar este riesgo, el gerente financiero decide utilizar contratos de futuros para fijar el tipo de cambio en sus operaciones a tres meses, asegurando una tasa estable y evitando pérdidas derivadas de la volatilidad del mercado.

    p.mb-5 El <b>riesgo financiero</b> es un factor inherente a cualquier actividad empresarial. Sin embargo, su impacto puede ser controlado mediante estrategias adecuadas de identificación, evaluación y mitigación. Un enfoque integral de gestión de riesgos permite a las organizaciones no solo protegerse de amenazas, sino también identificar oportunidades de crecimiento y mejorar su competitividad.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estrategias de sostenibilidad y gestión de crisis en entornos empresariales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La sostenibilidad empresarial y la gestión de crisis son pilares fundamentales en la administración moderna. Integrar estrategias sostenibles no solo promueve la responsabilidad social, sino que también fortalece la resiliencia organizacional ante situaciones adversas.
        h2(data-aos="fade-left") Estrategias de sostenibilidad empresarial
        p.mb-5 Implementar prácticas sostenibles implica adoptar medidas que minimicen el impacto ambiental, fomenten el bienestar social y aseguren la viabilidad económica. Algunas estrategias clave incluyen:
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="52.3%" y="13%" numero="+")
                h5 Eficiencia energética
                p Optimizar el consumo energético mediante tecnologías renovables y procesos más eficientes. Por ejemplo, la empresa Social Energy® ha integrado soluciones de energía renovable en su modelo de negocio, destacando en sostenibilidad corporativa.
    
              .bg-color-white.box-shadow.p-3(x="68.4%" y="50.5%" numero="+")
                h5 Gestión responsable de residuos
                p Implementar políticas de reducción, reutilización y reciclaje de materiales. Un ejemplo es la iniciativa de FAL Calzados de Seguridad y Calzados Fal-Chiruca, que ha reforestado 23 hectáreas con más de 25.000 árboles para mitigar su impacto ambiental.
    
              .bg-color-white.box-shadow.p-3(x="51%" y="90%" numero="+")
                h5 Diseño de productos sostenibles
                p Desarrollar bienes y servicios que consideren el ciclo de vida completo, desde la obtención de materias primas hasta su disposición final. La empresa Sepiia produce ropa resistente a manchas y bacterias, contribuyendo a la sostenibilidad en la industria textil.
    
    h2(data-aos="fade-left") Gestión de crisis en entornos empresariales
    p.mb-5 Las crisis pueden surgir de factores internos o externos y afectar significativamente la operatividad de una empresa. Una gestión efectiva de crisis comprende:
        
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Planificación preventiva" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Planificación preventiva
            p Desarrollar planes de contingencia que identifiquen posibles riesgos y establezcan protocolos de respuesta. Según <em>PowerPlan</em>, establecer un plan claro y formar un equipo de respuesta son pasos esenciales en la gestión de crisis.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/11.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación transparente" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Comunicación transparente
            p Mantener informados a todos los interesados, incluyendo empleados, clientes y proveedores, para preservar la confianza y minimizar rumores.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Adaptabilidad y aprendizaje" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Adaptabilidad y aprendizaje
            p Evaluar las respuestas implementadas durante la crisis para mejorar futuros planes y fortalecer la resiliencia organizacional.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='', style="width: 100%;")
    
    h2.mb-4(data-aos="fade-left") Ejemplo práctico

    .bg-full-width.bg-h85-2
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p Una empresa del sector turístico enfrenta una crisis debido a una pandemia que limita los viajes. Para mitigar el impacto, implementa estrategias de sostenibilidad como:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Diversificación de servicios:</b> ofrecer experiencias virtuales o locales que reduzcan la dependencia del turismo internacional.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Alianzas comunitarias:</b> colaborar con negocios locales para promover el turismo interno y apoyar la economía regional.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Protocolos sanitarios:</b> implementar medidas de bioseguridad que garanticen la salud de clientes y empleados, reforzando la confianza en la marca.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema3/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-12
      .px-4.px-md-5.py-4
        p.mb-0 La integración de estrategias de sostenibilidad y una gestión efectiva de crisis son esenciales para la competitividad y supervivencia empresarial en entornos dinámicos. Estas prácticas no solo contribuyen al bienestar social y ambiental, sino que también fortalecen la capacidad de las organizaciones para enfrentar desafíos inesperados.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://kpmg.com/es/es/servicios/esg-transformacion-sostenible/gestion-riesgos.html" target="_blank" rel="noopener noreferrer") KPMG. (2025). ESG y Gestión de Riesgos.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.pwc.es/es/auditoria/riesgos-sostenibilidad.html" target="_blank" rel="noopener noreferrer") PwC. (2025). Gestión de riesgos y sostenibilidad. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://lefebvre.es/esg/environmental/gestion-de-riesgos-y-sostenibilidad" target="_blank" rel="noopener noreferrer") Lefebvre. (2023). Gestión de riesgos y sostenibilidad: Integrando ESG. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://aplanet.org/es/recursos/gestion-de-riesgos-y-sostenibilidad/" target="_blank" rel="noopener noreferrer") APLANET. (2021). Gestión de riesgos y sostenibilidad.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://fastercapital.com/es/contenido/Sostenibilidad-de-riesgos-empresariales--como-gestionar-los-riesgos-de-una-manera-que-respalde-sus-objetivos-ambientales-y-sociales.html" target="_blank" rel="noopener noreferrer") FasterCapital. (2024). Sostenibilidad de riesgos empresariales: cómo gestionar los riesgos de una manera que respalde sus objetivos ambientales y sociales. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://gsgestion.com/blog/riesgos-financieros/" target="_blank" rel="noopener noreferrer") GS Gestión. (2023). Riesgos financieros: qué son, tipos y cómo evaluarlos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://xepelin.com/blog/pymes/mejores-practicas-gestion-riesgos-financieros" target="_blank" rel="noopener noreferrer") Xepelin. (2024). 12 mejores prácticas en la gestión de riesgos financieros. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cadenaser.com/cmadrid/2025/03/05/social-energy-refuerza-su-liderazgo-en-sostenibilidad-corporativa-en-el-iii-foro-compliance-ebisum-radio-madrid/" target="_blank" rel="noopener noreferrer") Cadena SER. (2025). Social Energy® refuerza su liderazgo en sostenibilidad corporativa en el III Foro Compliance Ebísum. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://powerplan.es/gestion-efectiva-de-crisis-en-el-entorno-empresarial/" target="_blank" rel="noopener noreferrer") PowerPlan. (2024). Estrategias de Gestión Efectiva de Crisis en Empresas.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xwcta-Welb4   " target="_blank" rel="noopener noreferrer") Valora Analitik (2022, 30 de noviembre). El impacto del cambio climático en el riesgo financiero. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes es un objetivo principal de la planeación financiera en una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir la producción de bienes y servicios',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Optimizar el uso de recursos financieros para maximizar la rentabilidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumentar los costos operativos sin evaluar el impacto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evitar la toma de decisiones estratégicas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué mide el indicador financiero de liquidez?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La cantidad de empleados en una organización',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La capacidad de la empresa para cumplir con sus obligaciones de corto plazo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El total de ingresos anuales de la empresa',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La cantidad de activos fijos de la organización',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes no es un tipo de riesgo financiero?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Riesgo de crédito',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Riesgo climático',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Riesgo de mercado',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Riesgo de liquidez',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En la gestión de crisis, ¿cuál es una estrategia clave para minimizar el impacto en la empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Tener un plan de contingencia y protocolos establecidos',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Evitar la comunicación con clientes y proveedores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'No tomar medidas hasta que la crisis termine',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir la producción sin analizar el mercado',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes documentos es parte de los estados financieros de una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Balance general',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Plan de marketing',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Estrategia de comunicación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Informe de recursos humanos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
