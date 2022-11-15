import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from '../SignUp/signup';
import LogIn from '../LogIn/login';
import Roster from '../Roster/Roster';
import Users from '../Users/Users';
import Home from '../Pages/Home/Home';
import Welcome from '../Pages/Welcome/Welcome';
import { UserContext } from '../UserContext/UserContext';



function Router(props) {
  const user = useContext(UserContext); 
  console.log('render', user)

  return (
    <Routes>  
      {user && <Route path="/" exact element={<Navigate replace to="/welcome" />} />}
      {user && <Route path="/roster" exact element={<Roster />} />}
      {user && <Route path="/home" exact element={<Home />} />}
      {/* <Route path="/users" exact element={<Users />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<LogIn />} /> */}
      {/* <Route path="/roster" exact element={<Navigate replace to="/welcome" />} /> */}
      <Route path="/" element={<Navigate replace to="/welcome" />} />
      <Route path="/welcome" exact element={<Welcome />} />
    </Routes>
  );
}

export default Router;