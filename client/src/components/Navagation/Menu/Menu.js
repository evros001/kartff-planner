import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { UserContext } from '../../UserContext/UserContext';
import NavLink from '../NavLink/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



const Menu = (props) => {
  const [links, setLinks] = useState(["About", "Account", "Roster", "Lineup", "Join/Create" ]);
  const user = useContext(UserContext);
  const { toggleMenu } = props;

  useEffect(() => {
      if (user) {
          setLinks(prevLinks => [...prevLinks, "Logout"])
      } else {
          setLinks(prevLinks => [...prevLinks, "Sign In"])
      }
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.icon_container} onClick={() => {toggleMenu()}}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </div>
        <div className={styles.menu_container}>
            {links.map((link, index) => {
                return <NavLink link={link} key={index} />
            })}
        </div>
      </div>
  ) 
}

export default Menu;