import React from 'react'
import styles from './Recursos.module.css'

export default function Recursos() {


  return (
    <>
      <section className={styles.recursos_Section}>
        <h1>¿Dónde comenzar?</h1>
        <p>Incorporar la accesibilidad es un tema importante que se debe considerar desde el inicio de un proyecto web. En esta sección se mencionan 4 puntos básicos, fáciles y rápidos de incorporar para lograr una web más accesible. Al final de estos puntos encontrará diferentes enlaces a sitios oficiales que desarrollan más el tema.</p><br />

        <p className={styles.nota}><strong>NOTA:</strong> Los puntos mencionados en esta página son solo el inicio. Su proyecto web debería implementar de forma mucho más amplia la accesibilidad. No se limite a agregar solo estos 4 puntos, investigue más en los enlaces compartidos. Este proyecto web es solo un "Starter Kit"</p>

        <h2>Contraste de Color</h2>
        <p> Utilice un buen contraste que facilite la lectura del contenido para usuarios con discapacidad visual o con dificultades de visión, así como para aquellos que están en entornos con iluminación deficiente.<br />
          La WCAG establece un contraste <strong>mínimo</strong> de 4.5:1, a excepción de textos de gran tamaño, componentes meramente derocativos o logotipos.</p>

        <div className={styles.example_Contrast}>
          <p className={styles.example_Contrast_Bad}>Este es un ejemplo de un texto con fondo que <strong>NO</strong> cumple con el contraste mínimo, tiene un contraste de 3.72:1</p>
        </div>

        <div className={styles.example_Contrast}>
          <p className={styles.example_Contrast_Minumum}>Este es un ejemplo de un texto con fondo que apenas cumple con el contraste <strong>mínimo</strong>, tiene un contraste de 4.56:1</p>
        </div>

        <div className={styles.example_Contrast}>
          <p className={styles.example_Contrast_Good}>Este es un ejemplo de un texto con fondo que cumple de sobra contraste mínimo, tiene un contraste de 8.89:1.</p>
        </div>

        <h2>Texto Alternativo para Imágenes</h2>
        <p>Proporcione texto alternativo descriptivo para todas las imágenes utilizando el atributo <strong>alt</strong> en las etiquetas {'<img>'}. Esto ayuda a los usuarios con discapacidad visual a comprender el contenido de las imágenes. El atributo <strong>alt</strong> puede proporcionar descripciones concisas y descriptivas del contenido de las imágenes.
          Nunca es buena práctica dejar el atributo <strong>alt</strong> en blanco o usar texto genérico como "imagen" o "foto".</p>

        <div className={styles.example_code}>
          <p className={styles.comment}>//Este elemento Img no sigue las normas WCAG por falta de atributo <strong>alt</strong></p>
          <p>{'<Img src ="directory/beach.jpg" />'}</p>
        </div>

        <div className={styles.example_code}>
          <p className={styles.comment}>//Este elemento Img no sigue las normas WCAG por dejar el espacio en blanco <strong>alt</strong></p>
          <p>{'<Img src ="directory/beach.jpg" alt="" />'}</p>
        </div>

        <div className={styles.example_code}>
          <p className={styles.comment}>//Este es un elemento Img que sigue las normas WCAG por dar una buena descripción con <strong>alt</strong></p>
          <p>{'<Img src ="directory/beach.jpg" alt=“A photo of family enjoying in the beach”>'}</p>
        </div>

        <h2>Estructura Semántica</h2>
        <p>Use una estructura semántica clara, haciendo uso de etiquetas HTML específicas para marcar y organizar el contenido de una página de manera significativa y lógica. Estas etiquetas proporcionan información adicional sobre la estructura y el propósito del contenido, tanto para los navegadores web como para los motores de búsqueda, facilitando la comprensión y navegación del sitio para todas las personas usuarias, además de que permite a los lectores de pantalla interpretar correctamente el contenido y proporciona una experiencia más fluida.</p>

        <pre className={styles.example_code}>
          {'<div className=`header`>'} <br />
          ...{'<h1>Encabezado</h1>'} <br />
          {'</div>'} <br /> <br />

          {'<div className=`navBar`>'} <br />
          ...{'<li className=`navBar`>Inicio</li>'} <br />
          ...{'<li className=`navBar`>Cursos</li>'} <br />
          ...{'<li className=`navBar`>Tareas</li>'} <br />
          ...{'<li className=`navBar`>Gatitos</li>'} <br />
          ...{'<li className=`navBar`>Otros</li>'} <br />
          {'</div>'} <br /><br />

          {'<div className=`articulos-sección`>'}<br />
          ...{'<div className=`artículo1`>'}<br />
          ......{'<p>Artículo Felino</p>'}<br />
          ......{'<p>Texto Felino</p>'}<br />
          ...{' </div>'}<br />

          ...{'<div className=`artículo2`>'}<br />
          ......{'<p>Artículo Gatuno</p>'}<br />
          ......{'<p>Texto Gatuno</p>'}<br />
          ...{' </div>'}<br />


          ...{'<div className=`artículo3`>'}<br />
          ......{'<p>Artículo Michi</p>'}<br />
          ......{'<p>Texto Michi</p>'}<br />
          ...{' </div>'}<br />
          {' </div>'}
        </pre >

        <p>El ejemplo anterior incumple con una correcta estructura semántica al usar la etiqueta div para defininar secciones de una página web que tienen etiquetas definidas y claras para cada parte, de igual modo no utiliza la etiqueta h2 para encabezados de segundo nivel. El código de abajo <strong>Si cumple</strong> con una correcta estructura semántica al usar las etiquetas correspondientes, como lo son: header,nav, ul (con sus respectivos li anidados), section, h2 y article</p>

        <pre className={styles.example_code}>
          {'<header>'} <br />
          ...{'<h1>Encabezado</h1>'} <br />
          {'</ header>'} <br /> <br />
          {'<nav>'}<br />
          ...{'<ul>'} <br />
          ......{'<li className=`inicio`>Inicio</ li>'} <br />
          ......{'<li className=`cursos`>Cursos</ li>'} <br />
          ......{'<li className=`tareas`>Tareas</ li>'} <br />
          ......{'<li className=`gatitos`>Gatitos</ li>'} <br />
          ......{'<li className=`otrs`>Otros</ li>'} <br />
          ...{'</ ul>'} <br />
          {'</ nav>'} <br /><br />

          {'<section className=`articles-section`>'}<br />

          ...{'<article className=`felino`>'}<br />
          ......{'<h2>Artículo Felino</h2>'}<br />
          ......{'<p>Texto Felino</p>'}<br />
          ...{' </article>'}<br />

          ...{'<article className=`gatuno`>'}<br />
          ......{'<h2>Artículo Gatuno</h2>'}<br />
          ......{'<p>Texto Gatuno</p>'}<br />
          ...{' </article>'}<br />


          ...{'<article className=`michi`>'}<br />
          ......{'<h2>Artículo Michi</h2>'}<br />
          ......{'<p>Texto Michi</p>'}<br />
          ...{' </article>'}<br />

          {'</ section>'}
        </pre>

        <h2>Etiqueta {'<'}label{'>'}</h2>
        <p>Al usar la etiqueta {'<'}label{'>'} en HTML se logra asociar un texto descriptivo con un elemento de formulario, como un campo de entrada {'<'}input{'>'}, un área de texto {'<'}textarea{'>'}, o un elemento de selección {'<'}select{'>'}. Esto ayuda a las personas usuarias, especialmente a aquellas que utilizan lectores de pantalla, a comprender rápidamente qué tipo de información se espera en cada campo; además al hacer clic en el texto de la etiqueta {'<'}label{'>'}, se enfoca automáticamente el campo de formulario asociado, lo que facilita la interacción para usuarios con discapacidades motoras que pueden tener dificultades para hacer clic en áreas pequeñas o precisas.<br />
          El siguiente formulario utiliza correctamente la etiqueta {'<'}label{'>'}:</p><br />
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Formulario de ejemplo'); }}>
          <section className='nombre'>
            <label for="nombre">Nombre:</label><br />
            <input type="text" id="nombre" name="nombre" />
          </section>
          <section className='email'>
            <label for="email">Correo electrónico:</label><br />
            <input type="email" id="email" name="email" />
          </section>
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
          <label for="submit-btn">Enviar formulario:</label>
          <button type="submit" id="submit-btn">Enviar</button>
        </form>

        <h3>Recursos Externos</h3>
        <p>La siguiente lista de enlaces es una pequeña colección de páginas web que le ayudarán a aprender más sobre el tema de accesbilidad, cómo implementarla y demás información valiosa.</p>
        <ul>
          <li><a href='https://www.w3.org/WAI/WCAG21/Understanding/' target='_blanck'>WCAG 2.1 Understanding Docs</a></li>
          <li><a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility' target='_blanck'>MDN: Accessibility</a></li>
          <li><a href='https://www.w3schools.com/accessibility/index.php' target='_blanck'>W3School</a></li>
          <li><a href='https://accessibilityinsights.io/docs/web/overview/' target='_blanck'>Accessibility Insights for Web</a></li>
        </ul>

      </section >
    </>
  )
}