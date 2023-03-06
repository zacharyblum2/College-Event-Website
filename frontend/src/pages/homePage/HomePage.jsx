import React from 'react';
import './homePage.css';

import { NavbarComp, Footer, Who, Universities, Register} from '../../components';

const HomePage = () => {
  return (
    <>
        <NavbarComp/>
        <Who/>
        <Universities/>
        <Register/>
        <Footer/>
    </>
  )
}

export default HomePage