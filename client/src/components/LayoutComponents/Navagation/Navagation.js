import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navagation = () => {
    return (
        <div className=''>
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
            <FontAwesomeIcon icon={faBars} />
        </div>
    ) 
}

export default Navagation;