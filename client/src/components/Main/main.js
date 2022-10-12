import React from 'react';
import styles from './styles.module.css';
import Logout from '../Logout/Logout';

const Main = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>KartFF</h1>
        <a href="#">My Account</a><br />
        <a href="#">Join League</a><br />
        <a href="#">Create League</a><br />
        <a href="/roster">Roster</a><br />
        <a href="#">Matchup Planner</a><br />
        <Logout />
      </nav>
    </div>
  )
}

export default Main;