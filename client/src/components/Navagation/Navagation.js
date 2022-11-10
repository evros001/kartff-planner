
import React, {useState } from 'react';
import styles from './styles.module.scss';
import NavLeft from './NavLeft/NavLeft';
import NavCenter from './NavCenter/NavCenter';
import NavRight from './NavRight/NavRight';


const Navagation = () => {
    const [links, setLinks] = useState(["About", "Account", "Roster", "Lineup", "League" ]);
    console.log('links', links);

    return (
        <div className={styles.container}>
            <NavLeft />
            <NavCenter />
            <NavRight />
        </div>
    ) 
}

export default Navagation;