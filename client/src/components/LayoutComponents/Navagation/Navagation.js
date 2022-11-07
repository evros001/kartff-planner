import React, {useState, useContext} from 'react';
import styles from './styles.module.scss';
import NavLogo from '../../NavLogo/NavLogo';
import NavMenu from '../../NavMenu/NavMenu';
import NavLink from '../../NavLink/NavLink';


const Navagation = () => {
    const [links, setLinks] = useState(["About", "Account", "Roster", "Lineup", "League" ]);
    console.log('links', links);
    const user = useContext(UserContext);

    return (
        <div className={styles.container}>
            <div>
                <NavMenu />
                <NavLogo />
            </div>
            <div className={styles.link_container}>
                { links && links.map((link, index) => {
                    return <NavLink link={link} index={index} />
                })}
            </div>
            <div>{user.email}</div>
        </div>
    ) 
}

export default Navagation;