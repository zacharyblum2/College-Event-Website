import React from 'react';
import './homePage.css';

import { NavbarComp, Footer, Who, Universities} from '../../components';

const HomePage = () => {
  return (
    <>
        <NavbarComp/>
        <Who/>
        <Universities/>
        <Footer/>
    </>
  )
}

export default HomePage