import React, { useState, useEffect } from 'react';
import Router from './components/Router/Router';
import axios from 'axios';
import { UserContext } from './components/UserContext/UserContext';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const getUser = async (token) => {
    const url = 'http://localhost:5500/api/auth';
    const userData  = await axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} });
    console.log('USER DATA ON LOAD', userData);
    setUser(userData.data.user);
    setIsLoading(false);
    return;
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log('set user')
      const token = localStorage.getItem("token")
      getUser(token);
      
    } else {
      console.log('no token user', user)
      setIsLoading(false);
    }
  }, []);

  console.log("user App.js", user);

  return (
        <div className="App">
          { isLoading && 
            <div>Loading...</div>
          }
          { !isLoading &&
            <UserContext.Provider value={user}>
              <Router/>
            </UserContext.Provider>
          }
        </div>
  );
}

export default App;