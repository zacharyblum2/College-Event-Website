import React from 'react'
import './who.css';

const Who = () => {
  return (
    <div className='who'>
      <div className='left'>
        <h6>See your universities events with EventAt</h6>
        <p>Many universities struggle with a way to post
           all their upcoming events! With EventAt
           we are creating a central resource for students and registered
           student organizations (RSOs) to view, sign up for,
           and create events at their University!
        </p>
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