import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavLink from '../NavLink/NavLink'


const Navagation = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [links, setLinks] = useState(["About", "Account", "Roster", "Lineup", "League" ]);

    const {user} = props;

    return (
        <div className={styles.container} onClick={() => {setMenuOpen(!menuOpen)}}>
            {   
                menuOpen 
                    ? <FontAwesomeIcon icon={faXmark} size="2x" />
                    : <FontAwesomeIcon icon={faBars} size="2x" />
            }
            {
                user && <div><span><FontAwesomeIcon icon={faUser} size="2x" /></span> <span>{user}</span></div>
            }
        </div>
    ) 
}

export default Navagation;