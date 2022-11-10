import React, { useState, useContext } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const NavMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.container} onClick={() => {setMenuOpen(!menuOpen)}}>
            {   
                menuOpen 
                    ? <FontAwesomeIcon icon={faXmark} size="2x" />
                    : <FontAwesomeIcon icon={faBars} size="2x" />
            }
        </div>
    ) 
}

export default NavMenu;