import React from 'react'
import styles from './styles.module.css';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <button className={styles.white_btn} onClick={handleLogout}>Logout</button>     
  )
}

export default Logout