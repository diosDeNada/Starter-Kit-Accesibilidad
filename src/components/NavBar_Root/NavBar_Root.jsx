import React from 'react'
import { Outlet, useLocation, NavLink } from 'react-router-dom'
import styles from './NavBar_Root.module.css'

import BackBtn from '../BackBtn/BackBtn'
import Footer from '../Footer/Footer'

export default function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'


  return (
    <>
      <header>
        <nav className={styles.NavBar}>
          <ul className={styles.ul_NavBar}>
            <li className={styles.li_NavBar}><NavLink to='/recursos' >Recursos</NavLink> </li>
            <li className={styles.li_NavBar}><NavLink to='/'> Starter Kit:<br /> Accesibilidad</NavLink></li>
            <li className={styles.li_NavBar}><NavLink to='/herramientas' >Herramientas</NavLink> </li>

          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      {
        !isHomePage && <BackBtn />
      }

      <footer className={styles.footer}>
        <Footer />
      </footer>

    </>
  )
}