import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Welcome from '../Pages/Welcome/Welcome';
import { UserContext } from '../UserContext/UserContext';

function Router(props) {
  const [ user ] = useContext(UserContext); 
  console.log('render', user)
  const pages = {
    roster: 'roster',
    welcome: 'welcome',
    home: 'home'
  }

  return (
    <Routes>  
      {user && <Route path="/welcome" exact element={<Navigate replace to="/home" />} />}
      {user && <Route path="/" exact element={<Navigate replace to="/home" />} />}
      {user && <Route path="/roster" exact element={<Home display={pages.roster}/>} />}
      {user && <Route path="/home" exact element={<Home display={pages.home}/>} />}
      <Route path="/roster" element={<Navigate replace to="/welcome" />} />
      <Route path="/home" element={<Navigate replace to="/welcome" />} />
      <Route path="/" element={<Navigate replace to="/welcome" />} />
      <Route path="/welcome" exact element={<Welcome display={pages.welcome}/>} />
    </Routes>
  );
}

export default Router;