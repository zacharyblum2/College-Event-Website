import React from 'react';
import { NavbarComp, Footer, Login } from '../../components';
import './loginPage.css';

const LoginPage = () => {
  return (
    <>
        <NavbarComp/>
        <Login/>
        <Footer/>
    </>
  )
}

export default LoginPage