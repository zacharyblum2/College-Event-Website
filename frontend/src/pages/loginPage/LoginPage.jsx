import React from 'react';
import { NavbarComp, Footer } from '../../components';
import { LoginContainer } from '../../containers';
import './loginPage.css';

const LoginPage = () => {
  return (
    <>
        <NavbarComp/>
        <LoginContainer/>
        <Footer/>
    </>
  )
}

export default LoginPage