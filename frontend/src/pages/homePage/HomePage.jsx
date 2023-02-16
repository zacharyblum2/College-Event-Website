import React from 'react';
import './homePage.css';

import { NavbarComp, Footer, Who} from '../../components';

const HomePage = () => {
  return (
    <>
        <NavbarComp/>
        <Who/>
        <Footer/>
    </>
  )
}

export default HomePage