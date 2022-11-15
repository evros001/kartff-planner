
import React, {useState } from 'react';
import styles from './styles.module.scss';
import NavLeft from './NavLeft/NavLeft';
import NavCenter from './NavCenter/NavCenter';
import NavRight from './NavRight/NavRight';
import Menu from './Menu/Menu'


const Navagation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log("menuOpen", menuOpen)
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className={styles.container}>
                <NavLeft toggleMenu={toggleMenu} menuOpen={menuOpen}/>
                <NavCenter />
                <NavRight />
                {
                    menuOpen && <Menu toggleMenu={toggleMenu}/>
                }
            </div>
        </>
    ) 
}

export default Navagation;