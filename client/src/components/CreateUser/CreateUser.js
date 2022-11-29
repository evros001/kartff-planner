import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { createUser, loginUser, getAuthUser } from '../../api/api';


const CreateUser = (props) => {
  const { setUserStepOne } = props; 

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    leagues: [],
    teams: []
  });
  const [error, setError] = useState();

  const [ user, setUser ] = useContext(UserContext);
  console.log("setUser", setUser);

  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('data', data);
    try {
      const {email, password} = data
      
      //create user
      const responseData = await createUser(data);
      console.log("create user respose data: ", responseData);
      
      //generate and set token
      const token = await loginUser({"email": email,"password": password});
      console.log("create user respose token: ", token);
      localStorage.setItem("token", JSON.stringify(token.data));
      
      //set user context
      const userData = await getAuthUser(token.data.token);
      console.log("retrieve authed user from token: ", userData);
      
      //set newly created user
      setUser(userData.data.user);
      
      //set to next step
      setUserStepOne(true);
    } catch (err) {
      console.log('create user errror', err);
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