import React from 'react';
import LogIn from '../LogIn/login';
import SignUp from '../SignUp/signup';
import styles from './styles.module.scss'

const LoginSignup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signup_container}>
        <SignUp />
      </div>
      <div className={styles.login_container}>
        <LogIn />
      </div>
    </div>
  )
}

export default LoginSignup;