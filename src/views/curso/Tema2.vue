<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Análisis financiero y toma de decisiones estratégicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El <b>análisis financiero</b> es una herramienta fundamental en la gestión empresarial, ya que permite evaluar la salud económica de una organización y sustenta la <b>toma de decisiones estratégicas</b>. Durante este proceso, se analizan los estados financieros, ratios y tendencias que posibilitan la identificación de oportunidades y riesgos, orientando la planificación e implementación de estrategias corporativas.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La integración del análisis financiero en la toma de decisiones estratégicas es esencial para el éxito empresarial. Esta práctica permite a las organizaciones evaluar su desempeño, identificar áreas de mejora y capitalizar oportunidades de crecimiento, asegurando una gestión eficiente y sostenible.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Uso de indicadores financieros para evaluar la rentabilidad empresarial
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/3.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los <b>indicadores financieros</b> son herramientas esenciales que permiten evaluar la <b>rentabilidad empresarial</b>, proporcionando una visión clara sobre la eficiencia y eficacia con la que una empresa utiliza sus recursos para generar beneficios. Estos indicadores facilitan la toma de decisiones estratégicas y la identificación de áreas de mejora dentro de la organización.
    
    p.mb-4 Principales indicadores de rentabilidad: 

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Margen de utilidad bruta")
            p Este indicador refleja la eficiencia de la empresa en la producción y venta de sus productos o servicios antes de considerar los gastos operativos. Se calcula mediante la fórmula:
            img.mb-3(src="@/assets/curso/tema2/4-1.svg", style="max-width: 372px").mx-auto
            P <b>Por ejemplo</b>, si una empresa tiene ventas netas de $500,000 y un costo de ventas de $300,000, el margen de utilidad bruta sería:
            img.mb-3(src="@/assets/curso/tema2/4-2.svg", style="max-width: 372px").mx-auto
            p Esto indica que, por cada peso vendido, la empresa obtiene $0.40 antes de cubrir los gastos operativos.
          .div(titulo="Margen de utilidad neta")
            p Mide la rentabilidad total de la empresa después de deducir todos los gastos, incluidos los impuestos y gastos operativos. La fórmula es: 
            img.mb-3(src="@/assets/curso/tema2/4-3.svg", style="max-width: 431px").mx-auto
            P Si la utilidad neta es de $50,000 y las ventas netas son $500,000, el margen de utilidad neta sería:
            img.mb-3(src="@/assets/curso/tema2/4-4.svg", style="max-width: 219px").mx-auto
            p Esto significa que, por cada peso vendido, la empresa obtiene $0.10 de ganancia neta.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Retorno sobre activos (ROA)")
            p Evalúa la capacidad de la empresa para generar ganancias a partir de sus activos totales. Se calcula de la siguiente manera:
            img.mb-3(src="@/assets/curso/tema2/4-5.svg", style="max-width: 287px").mx-auto
            P Por ejemplo, si la utilidad neta es de $50,000 y los activos totales son $1,000,000, el ROA sería:
            img.mb-3(src="@/assets/curso/tema2/4-6.svg", style="max-width: 287px").mx-auto
            p Esto indica que la empresa genera una ganancia de $0.05 por cada peso invertido en activos.
          .div(titulo="Retorno sobre el patrimonio (ROE)")
            p Mide la rentabilidad obtenida sobre los fondos propios invertidos por los accionistas. La fórmula es: 
            img.mb-3(src="@/assets/curso/tema2/4-7.svg", style="max-width: 287px").mx-auto
            P Si la utilidad neta es de $50,000 y el patrimonio neto es $250,000, el ROE sería:
            img.mb-3(src="@/assets/curso/tema2/4-8.svg", style="max-width: 287px").mx-auto
            p Esto significa que, por cada peso invertido por los accionistas, la empresa genera $0.20 de ganancia.
    
    h2(data-aos="fade-left") Importancia de los indicadores de rentabilidad
    p.mb-5 El uso adecuado de estos indicadores permite a la empresa:

    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Evaluar la eficiencia operativa
              p.mb-0.text-center Identificar cómo se están utilizando los recursos para generar ingresos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Tomar decisiones informadas
              p.mb-0.text-center Basar estrategias en datos concretos sobre el desempeño financiero.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
              h5.text-center Identificar áreas de mejora
              p.mb-0.text-center Detectar procesos o departamentos que requieren optimización.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Atraer inversores
              p.mb-0.text-center Demostrar la rentabilidad y solidez financiera de la empresa.
        
        p.mb-4 Los indicadores financieros son herramientas esenciales para evaluar la rentabilidad empresarial. Su correcta aplicación y análisis facilitan la toma de decisiones estratégicas, contribuyen a la eficiencia operativa y fortalecen la posición competitiva de la empresa en el mercado.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Caso práctico: evaluación de rentabilidad en una empresa de manufactura
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>"Caso práctico: evaluación de rentabilidad en una empresa de manufactura"</b>, donde se analiza la rentabilidad de Innovatech S.A. a partir de indicadores clave como el margen de utilidad neta, el retorno sobre activos (ROA) y el retorno sobre el patrimonio (ROE). A través de este caso, se identifican desafíos financieros y se presentan estrategias para mejorar la eficiencia operativa y la competitividad de la empresa. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Caso práctico: evaluación de rentabilidad en una empresa de manufactura.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Modelos de evaluación de costos y rentabilidad para la competitividad
    
    p.mb-4 La evaluación precisa de costos y rentabilidad es fundamental para que las empresas mantengan y mejoren su competitividad en el mercado. Implementar modelos adecuados brinda la oportunidad de detectar áreas de mejora, optimizar recursos y establecer estrategias eficaces. A continuación, se presentan algunos de los modelos más utilizados:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Modelo de Costeo Basado en Actividades (ABC)
              p Este modelo asigna costos indirectos a productos o servicios en función de las actividades que requieren recursos, proporcionando una comprensión detallada de cómo se generan los costos.
              p <b>Ejemplo práctico:</b> una empresa manufacturera utiliza el ABC para determinar que el proceso de ensamblaje consume más recursos de lo inicialmente estimado. Con esta información, decide automatizar parte del proceso, reduciendo costos y mejorando la eficiencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Análisis Costo-Beneficio (ACB)
              p El ACB compara los costos y beneficios de una inversión o proyecto para evaluar su viabilidad y rentabilidad, comparando los costos y beneficios de una inversión o proyecto. Este análisis ayuda a priorizar proyectos que aporten mayor valor a la empresa.
              p <b>Ejemplo práctico:</b> una empresa de servicios evalúa la implementación de un nuevo software de gestión. Al realizar el ACB, determina que los beneficios en eficiencia y reducción de errores superan significativamente los costos de adquisición e implementación, justificando la inversión.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7
              h5 Análisis de punto de equilibrio
              p Este análisis establece el nivel de ventas necesario para cubrir todos los costos, tanto fijos como variables, identificando el límite a partir del cual la organización comienza a generar beneficios.
              p <b>Ejemplo práctico:</b> una tienda minorista calcula que necesita vender 500 unidades mensuales de un producto para cubrir sus costos. Al superar esta cifra, cada venta adicional contribuye directamente a la rentabilidad de la empresa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7
              h5 Modelo de costos estándar
              p Este modelo establece costos predeterminados para productos o servicios, facilitando la comparación con los costos reales y permitiendo identificar desviaciones y áreas de mejora.
              p <b>Ejemplo práctico:</b> una empresa textil fija un costo estándar para la producción de camisetas. Al finalizar el período, comparar este costo con el real y detecta que el aumento en el precio de las materias primas elevó los costos, lo que lleva a renegociar con proveedores o buscar alternativas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7
              h5 Análisis de la cadena de valor
              p Este análisis examina cada etapa del proceso productivo para identificar actividades que aportan valor y aquellas que pueden optimizarse o eliminarse, mejorando la eficiencia y reduciendo costos.
              p <b>Ejemplo práctico:</b> una empresa alimentaria analiza su cadena de valor y descubre que la logística de distribución es ineficiente. Al optimizar rutas y métodos de entrega, reduce costos y mejora el servicio al cliente
    
    h2(data-aos="fade-left") Importancia de la evaluación de costos y rentabilidad
    p.mb-5 La implementación de estos modelos permite a las empresas:

    .bg-full-width.bg-color-6
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              h5.text-center Mejorar la toma de decisiones
              p.mb-0.text-center Contar con información precisa sobre costos y rentabilidad permite diseñar estrategias más adecuadas. 
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/17.svg" alt="" style="width: 90px")
              h5.text-center Optimizar recursos
              p.mb-0.text-center Identificar áreas ineficientes facilita la redistribución de recursos hacia actividades más productivas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/18.svg" alt="" style="width: 90px")
              h5.text-center Incrementar la competitividad
              p.mb-0.text-center Empresas con estructuras de costos eficientes pueden ofrecer precios más atractivos o mejorar su margen de beneficio, fortaleciendo su posición en el mercado.
         
         
    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Caso práctico: contexto empresarial
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Caso práctico: contexto empresarial, donde se aborda la situación financiera de la empresa EcoTech S.A", especializada en productos tecnológicos ecológicos. Este material ofrece un análisis de datos financieros, identificación de problemas de rentabilidad y propuestas estratégicas, con el fin de optimizar recursos y mejorar la competitividad. Ideal para estudiantes, profesionales o directivos interesados en la gestión financiera y toma de decisiones estratégicas empresariales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Caso práctico: contexto empresarial.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')
         

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://avdeportes.com/el-papel-de-las-finanzas-en-la-toma-de-decisiones-estrategicas/actualidad/" target="_blank" rel="noopener noreferrer") Gorriño Castellar, L. C. (2024). El papel de las finanzas en la toma de decisiones estratégicas.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=7291234" target="_blank" rel="noopener noreferrer") Buitrago Mejía, A., Rodríguez Barrero, M. S., & Serna Gómez, H. (2019). Modelo de evaluación de la gestión y competitividad empresarial. Revista Pódium, 4(2), 97-118. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://phcsoftware.com/es/artigo/indicadores-sostenibilidad-empresa/" target="_blank" rel="noopener noreferrer") PHC Software. (2024). ¿Qué indicadores miden la sostenibilidad de tu empresa? 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=I-I-bJkINiA" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021, 17 de junio). Contabilidad gerencial para la toma de decisiones. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
