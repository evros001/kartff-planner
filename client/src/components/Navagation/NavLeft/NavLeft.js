import React from 'react';
import styles from './styles.module.scss';
import NavMenu from '../NavMenu/NavMenu';


const NavLeft = () => {
    return (
        <div className={styles.container}>
          <NavMenu />
        </div>
    ) 
}

export default NavLeft