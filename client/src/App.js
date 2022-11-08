import React, { useContext, useState, useEffect } from 'react';
import Router from './components/Router/Router';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  // const user = localStorage.getItem("token");
  // const UserContext = useContext(null);

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
      const token = localStorage.getItem("token")
      getUser(token);
    } else {
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
            <Router user={user}/>
          }
        </div>
  );
}

export default App;