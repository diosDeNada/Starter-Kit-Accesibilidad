import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './BackBtn.module.css'

export default function BackBtn() {
  const navigate = useNavigate();


  return (
    <button onClick={() => navigate(-1)} className={`${styles.BackBtn} `}> Atrás</button>
  )
}