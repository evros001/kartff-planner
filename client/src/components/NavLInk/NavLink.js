import React, {useState} from 'react';
import styles from './styles.module.scss';
import NavLogo from '../../NavLogo/NavLogo';
import NavMenu from '../../NavMenu/NavMenu';
import NavLink from '../../NavLink/NavLink';


const NavLink = () => {
    const [links, setLinks] = useState([]);

    return (
        <div className={styles.container}>
            <a href='#'></a>
        </div>
    ) 
}

export default NavLink;