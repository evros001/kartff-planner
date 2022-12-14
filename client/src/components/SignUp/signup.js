import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.scss';


const SignUp = () => {

  const [data, setData] = useState({
    firstName: '', 
    lastName: '',
    email: '',
    password: '',
    leagues: [],
    teams: []
  });
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const loginUser = async () => {
    console.log("hit");
    try {
      const url = 'http://localhost:5500/api/auth';
      const userData = { email: data.email, password: data.password }
      const {data: res} = await axios.post(url, userData);
      console.log("res", res);
      localStorage.setItem("token", JSON.stringify(res));
      window.location= '/';
    } catch (err) {
      console.log("err", err);
      if (err.response && err.response.status >= 400 && err.response.status < 500 ) {
        setError(err.response.data.message)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('data', data);
    try {
      const url = 'http://localhost:5500/api/users';
      console.log('url', url);
      const signUpResponse = await axios.post(url, data);
      loginUser();
    } catch (err) {
      console.log('errror', err);
      if (err.response && err.response.status >= 400 && err.response.status < 500 ) {
        setError(err.response.data.message)
      }
    }
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input 
              type="text"
              placeholder="First Name"
              name='firstName'
              onChange={handleChange}              
              value={data.firstName}
              required
              className={styles.input}
            />
            <input 
              type="text"
              placeholder="Last Name"
              name='lastName'
              onChange={handleChange}              
              value={data.lastName}
              required
              className={styles.input}
            />
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
            <button type='submit' className={styles.green_btn}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp