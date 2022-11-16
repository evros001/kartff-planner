import React from 'react';
import styles from './styles.module.scss';


const NavLink = (props) => {
    const {link, index} = props;
    const url = link.split(' ').join('');
    console.log('url', url);

    return (
        <div className={styles.link_container} key={index}>
            <a href={`/${link}`}>{link}</a>
        </div>
    ) 
}

export default NavLink;