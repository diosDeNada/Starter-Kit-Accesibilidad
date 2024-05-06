import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <section className={styles.homePage_Section}>
        <h1>Starter Kit: Accesibilidad</h1>
        <p>
          Bienvenida y bienvenido a este Starter Kit sobre Accesibilidad.<br />
          Si alguna vez a leído o escuchado sobre accesibilidad en la web y quiere saber más, este lugar es un gran punto de partida. Acá podrá encontrar los recursos y herramientas que le ayudarán a comprender más sobre la accesibilidad y a desarrollar su aplicación web con accesibilidad en mente.
        </p>

        <h2>¿Qué es la Accesibilidad?</h2>
        <p>La accesibilidad se refiere a la práctica de garantizar que todos los individuos, independientemente de sus capacidades físicas, cognitivas o sensoriales, puedan acceder y utilizar productos, servicios y entornos de manera equitativa y sin obstáculos.</p>

        <h2>¿Qué es la Accesibilidad Digital?</h2>
        <p className={styles.preExamples}>
          La accesibilidad digital se refiere a la práctica de diseñar y desarrollar productos digitales, como sitios web, aplicaciones móviles y software, de manera que sean accesibles para <strong>todas</strong> las personas. Esto significa crear productos digitales de manera que sean fáciles de percibir, entender y utilizar para una amplia gama de usuarios, utilizando tecnologías y prácticas que eliminen barreras y promuevan la inclusión.
          Algunos ejemplos de accesibilidad digital incluyen:</p>
        <ul>
          <li>Lectores de pantalla que analizan un sitio web en busca de información para un usuario con discapacidad visual.</li>
          <li>Los videos que tienen subtítulos para personas con discapacidad auditiva.</li>
          <li>Las imágenes que incluyen "texto alternativo" para personas con discapacidad visual.</li>
          <li>Los sitios web que permiten navegarse mediante el teclado para los usuarios que no puedan operar un mouse por alguna discapacidad motriz.</li>
        </ul>
        <p>Los ejemplos anteriores demuestran sólo un subconjunto de cómo los sitios web o las aplicaciones móviles incorporan la accesibilidad digital. Actualmente existe una lista completa de pautas de accesibilidad digital, el un estándar global conocido como <strong>Pautas de Accesibilidad al Contenido Web (WCAG en inglés)</strong>. Según el resumen de las WCAG, las WCAG "cubren una amplia gama de recomendaciones para hacer que el contenido web sea más accesible".<br />

          En la sección de <NavLink to='/recursos' aria-label="Recursos">Recursos</NavLink> va a encontrar una introducción a varios puntos básicos que debe tener presentes a la hora de crear un proyecto web, además de recursos externos valiosos de fuentes confiables.<br />
          En la sección de <NavLink to='/herramientas' aria-label="Herramientas">Herramientas</NavLink> encontrará una lista de herramientas que le ayudarán a comprobar el estado de accesibilidad de su proyecto.
        </p><br />
      </section>
    </>
  );
}
