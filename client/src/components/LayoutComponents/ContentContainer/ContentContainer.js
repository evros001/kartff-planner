import React from 'react';
import styles from './styles.module.scss';
import Roster from '../../Roster/Roster';
import LoginSignup from '../../LoginSignup/LoginSignup';

const ContentContainer = (props) => {
    const { display } = props
    console.log("display", display);
    return (
        <div className={styles.container}>
            {
                display == 'roster' && <Roster />
            }
            {
                display == 'welcome' && <LoginSignup />
            }
            {
                display == 'home' && <Roster />
            }
        </div>
    ) 
}

export default ContentContainer;