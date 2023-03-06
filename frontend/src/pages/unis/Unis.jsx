import React from 'react';
import './unis.css';
import { NavbarComp, Footer, Unicard} from '../../components';
const Unis = () => {
  return (
    <>
        <NavbarComp/>
        <div className='content'>
            <Unicard/>
        </div>
        <Footer/>
    </>
  )
}

export default Unis