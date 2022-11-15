import React from 'react';
import styles from './styles.module.scss';
import NavMenu from '../NavMenu/NavMenu';


const NavLeft = (props) => {
    const { toggleMenu, menuOpen } = props
    
    return (
        <div className={styles.container}>
          <NavMenu toggleMenu={toggleMenu} menuOpen={menuOpen}/>
        </div>
    ) 
}

export default NavLeft