import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const NavMenu = (props) => {
    const { toggleMenu, menuOpen } = props    

    return (
        <div className={styles.container} onClick={() => {toggleMenu()}}>
            {   
                menuOpen 
                    ? null
                    : <FontAwesomeIcon icon={faBars} size="2x" />
            }
        </div>
    ) 
}

export default NavMenu;