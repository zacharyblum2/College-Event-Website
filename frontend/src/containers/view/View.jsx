import React from 'react';
import './view.css';
import { Leftv, Rightv } from '../../containers';
import { Header } from '../../components';

const View = () => {
  return (
    <div className='view'>
      <Header/>
      <div className='content'>
        <Leftv/>
        <Rightv/> 
      </div>
    </div>
  )
}

export default View