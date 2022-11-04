import React, {useState} from 'react';
import styles from './styles.module.scss';
import NavLogo from '../../NavLogo/NavLogo';
import NavMenu from '../../NavMenu/NavMenu';
import NavLink from '../../NavLink/NavLink';


const Navagation = () => {
    const [links, setLinks] = useState([]);

    return (
        <div className={styles.container}>
            <div>
            <NavMenu />
            <NavLogo />
            </div>
            <div className={styles.link_container}>
                { links && links.map((link) => {
                    return <NavLink link={link} />
                })}
            </div>
        </div>
    ) 
}

export default Navagation;