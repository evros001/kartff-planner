import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';


const LogIn = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState();

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5500/api/auth';
      const {data: res} = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location= '/';
      console.log(res.message)
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status < 500 ) {
        setError(err.response.data.message)
      }
    }
  }

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form onSubmit={handleSubmit}>
          <h1>Login to Your Account</h1>
            <input 
              type="email"
              placeholder="email"
              name='email'
              onChange={handleChange}              
              value={data.email}
              required
              className={styles.input}
            />
            <input 
              type="password"
              placeholder="password"
              name='password'
              onChange={handleChange}              
              value={data.password}
              required
              className={styles.input}
            />
            {
              error && <div className={styles.error_msg}>{error}</div>
            }
            <button type='submit' className={styles.green_btn}>Login</button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default LogIn