import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../UserContext/UserContext';
import SigninCreateBtn from '../../SigninCreateBtn/SigninCreateBtn';


const NavRight = () => {
    const user = useContext(UserContext);
    console.log("topright", user);

    return (
        <div className={styles.container}>
            {
                user && <div className={styles.account_container}>
                    {/* TODO: ACCOUNT MENU */}
                    <span className={styles.email} >{user.email}</span>
                    <span><FontAwesomeIcon icon={faUser} size="2x" /></span>
                </div>
            } {
              !user && <SigninCreateBtn type='create'/>
            }
        </div>
    ) 
}

export default NavRight;