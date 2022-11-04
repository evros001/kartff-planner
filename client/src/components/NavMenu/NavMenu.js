import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navagation = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        
    ) 
}

export default Navagation;