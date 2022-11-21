import React, {useContext} from 'react';
import { UserContext } from '../UserContext/UserContext';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp'; 
import styles from './styles.module.scss'

const LoginSignup = () => {
  const user = useContext(UserContext);
  console.log('USER SIGN UP', user);

  return (
    <div className={styles.container}>
      <div className={styles.signup_container}>
        <SignUp />
      </div>
      <div className={styles.login_container}>
        <Login />
      </div>
    </div>
  )
}

export default LoginSignup;