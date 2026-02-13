import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <div className={styles.header}>
     <h1 className={styles.logo}>Hi This is Tejveer Singh</h1>
     <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
