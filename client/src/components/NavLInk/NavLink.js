import React, {useState} from 'react';
import styles from './styles.module.scss';


const NavLink = (props) => {
    const {link, index} = props;

    return (
        <div className={styles.link_container} key={index}>
            <a href={`/${link}`}>{link}</a>
        </div>
    ) 
}

export default NavLink;