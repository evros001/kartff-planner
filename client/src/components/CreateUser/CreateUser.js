import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';


const CreateUser = () => {

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('data', data);
    try {
      const url = 'http://localhost:5500/api/users';
      console.log('url', url);
      const responseData = await axios.post(url, data);
      console.log('data back', responseData);
      navigate('/login')
    } catch (err) {
      console.log('errror', err);
      if (err.response && err.response.status >= 400 && err.response.status < 500 ) {
        setError(err.response.data.message)
      }
    }
  }

  return (
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
            <button type='submit' className={styles.green_btn}>Continue</button>
        </form>
    </div>
  )
}

export default CreateUser