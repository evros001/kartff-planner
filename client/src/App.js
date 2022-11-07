import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp/signup';
import LogIn from './components/LogIn/login';
import Roster from './components/Roster/Roster';
import Users from './components/Users/Users';
import StandardLayout from './components/LayoutComponents/StandardLayout/StandardLayout';
import ContentContainer from './components/LayoutComponents/ContentContainer/ContentContainer';
import Navagation from './components/LayoutComponents/Navagation/Navagation';
import axios from 'axios';
import './App.css';



function App() {
  console.log('render')
  const [currentUser, setCurrentUser] = useState(null);
  const user = localStorage.getItem("token");
  // const UserContext = useContext(null);
  // useEffect(async () => {
  //   const url = 'http://localhost:5500/api/auth';
  //   console.log('user', user)
  //   const userData  = await axios.get(url, user);
  //   console.log(userData);
  // }, [user]);
  const getUser = async (token) => {
    const url = 'http://localhost:5500/api/auth';
    const userData  = await axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} });
    console.log('USER DATA ON LOAD', userData);
    // setCurrentUser(userData.data.user);
    return;
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token")
      getUser(token);
    }
  }, [currentUser]);

  return (
        <div className="App">  
          <Routes>   
            {user && <Route path="/" exact element={<Navigate replace to="/welcome" />} />}
            {user && <Route path="/roster" exact element={<Roster />} />}
            <Route path="/users" exact element={<Users />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/" exact element={<Navigate replace to="/login" />} />
            <Route path="/roster" exact element={<Navigate replace to="/login" />} />
            <Route path="/welcome" exact element={
              <StandardLayout>
                <Navagation />
                <ContentContainer /> 
              </StandardLayout>
            } />
            </Routes>
        </div>
  );
}

export default App;