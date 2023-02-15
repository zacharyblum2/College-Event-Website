import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-success navbar-dark justify-content-between">
      <a className="navbar-brand" href="#">EventAt</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse flex-grow-0' id='navbarSupportedContent'>
        <ul className='navbar-nav text-right'>
          <li className="nav-item active">
            <a className='nav-link' href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className='nav-link' href="#">Universities</a>
          </li>
          <li className="nav-item">
            <a className='nav-link' href="#">Sign-up</a>
          </li>
          <li className="nav-item">
            <a className='nav-link' href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar