import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    console.log("children----", children);

    const {authenticated}=useAuth();
    console.log("isLoggedIn---- app ----", authenticated);

  return authenticated ? <>{children}</>:<Navigate to="login"/>
   
}

export default PrivateRoutes
