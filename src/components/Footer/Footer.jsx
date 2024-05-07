import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <section>
      <footer className={styles.footer} style={{background: '#333'}}>
        <p>Made in Costa Rica with ❤️ by Ariel GonzAgüer</p>
        <p>Background by: <a href="http://www.freepik.com">Designed by Freepik</a></p>
      </footer>
    </section>
  )
}