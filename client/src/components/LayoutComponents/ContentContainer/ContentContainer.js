import React from 'react';
import styles from './styles.module.scss';
import Roster from '../../Roster/Roster';
import OnboardUser from '../../OnboardUser/OnboardUser';

const ContentContainer = (props) => {
    const { display } = props
    console.log("display", display);
    return (
        <div className={styles.container}>
            {
                display == 'roster' && <Roster />
            }
            {
                display == 'welcome' && <OnboardUser />
            }
            {
                display == 'home' && <Roster />
            }
        </div>
    ) 
}

export default ContentContainer;