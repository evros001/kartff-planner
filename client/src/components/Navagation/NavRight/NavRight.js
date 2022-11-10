import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../UserContext/UserContext';


const NavRight = () => {
    const user = useContext(UserContext);

    return (
        <div className={styles.container}>
            {
                user && <div className={styles.account_container}>
                    {/* TODO: ACCOUNT MENU */}
                    <span className={styles.email} >{user.email}</span>
                    <span><FontAwesomeIcon icon={faUser} size="2x" /></span>
                </div>
            }
        </div>
    ) 
}

export default NavRight;