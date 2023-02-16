import React from 'react';
import './signupPage.css';
import { NavbarComp, Footer } from '../../components';
import { SignupContainer } from '../../containers';

const SignupPage = () => {
  return (
    <>
        <NavbarComp/>
        <SignupContainer/>
        <Footer/>
    </>
  )
}

export default SignupPage