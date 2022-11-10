import React from 'react';
import styles from './styles.module.scss';


const NavLogo = () => {
    return (
        <div className={styles.brand_container}>
            <div className={styles.brand}>
                <span className={styles.k}>k</span>
                <span className={styles.a}>a</span>
                <span className={styles.r}>r</span>
                <span className={styles.t}>t</span>
                <span className={styles.f}>F</span>
                <span className={styles.f2}>F</span>
            </div>
        </div>
    ) 
}

export default NavLogo;