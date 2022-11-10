import React, { useState } from 'react';
import styles from './styles.module.scss';
import NavLogo from '../NavLogo/NavLogo';


const NavCenter = () => {
    const [links, setLinks] = useState(["About", "Account", "Roster", "Lineup", "League" ]);

    return (
        <div className={styles.container}>
          <NavLogo />
        </div>
    ) 
}

export default NavCenter;