import React, { useState, useEffect } from 'react';
import Logout from '../Logout/Logout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Users = () => {
  const [allUsers, setAllUsers] = useState()

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const results = await axios.get('http://localhost:5500/api/users/all');
        setAllUsers(results)
        console.log('all users', results);
      } catch (err) {
        console.log('all users error', err);
      }
    }
    getAllUsers();
  }, [])

  return (
    <div>
      <p>ALL USERS</p>
      <span>
        {allUsers && allUsers.data && allUsers.data.length > 0 &&
        allUsers.data.map((user) => {
          return <>
            <span>{user.email}</span><br />
          </>
        })}
      </span>
      <Logout />
    </div>
  )
}

export default Users