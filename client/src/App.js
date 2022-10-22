import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main/main';
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
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
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