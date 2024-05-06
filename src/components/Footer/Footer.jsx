import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <section aria-label='footer' className={styles.footer} style={{background: '#333'}}>
      <footer >
        <p>Made in Costa Rica with ❤️ by Ariel GonzAgüer</p>
      </footer>
    </section>
  )
}