import React from 'react'
import './who.css';

const Who = () => {
  return (
    <div className='who'>
      <div className='left'>
        <p>Who are we?</p>
      </div>
      <div className='right'>
        <img src="/uni.jpg" alt="College students
        at outdoors event fair with booths and games" 
        className='uni__img'/>
      </div>
    </div>
  )
}

export default Who