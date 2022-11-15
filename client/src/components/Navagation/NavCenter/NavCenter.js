import React, { useState } from 'react';
import styles from './styles.module.scss';
import NavLogo from '../NavLogo/NavLogo';


const NavCenter = () => {

    return (
        <div className={styles.container}>
          <NavLogo />
        </div>
    ) 
}

export default NavCenter;