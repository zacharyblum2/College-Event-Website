import React from 'react';
import './leftv.css';
import {Card} from '../../components';

const Leftv = () => {
  return (
    /* Should cards be lazy loaded or should there be pages?*/
    <div className="cards">
      <Card/>
      <Card/>
    </div>
  )
}

export default Leftv