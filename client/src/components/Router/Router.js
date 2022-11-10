import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from '../SignUp/signup';
import LogIn from '../LogIn/login';
import Roster from '../Roster/Roster';
import Users from '../Users/Users';
import StandardLayout from '../LayoutComponents/StandardLayout/StandardLayout';
import ContentContainer from '../LayoutComponents/ContentContainer/ContentContainer';
import Navagation from '../Navagation/Navagation';
import { UserContext } from '../UserContext/UserContext';



function Router(props) {
  const user = useContext(UserContext); 
  console.log('render', user)

  return (
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
  );
}

export default Router;