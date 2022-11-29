import React from "react";
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';

const SigninCreateBtn = (props) => {
  const { type } = props;

  return (
    <div className={styles.container}>
      <Link to='/welcome'>{type}</Link>
    </div>
  )
}

export default SigninCreateBtn;
