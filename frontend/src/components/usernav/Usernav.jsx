import React from 'react';
import './usernav.css';

// How can I pass the user, user_id and their university name to each page? 

const Usernav = () => {
  let user_data = JSON.parse(localStorage.getItem('user_data'));

  return (
    <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
      {/* This should just reload the page */}
      <a className="navbar-brand" href="/user">EventAt: {user_data.name} <span></span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href='/user'>Events <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href='/rsos'>RSOs <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/">Log out <span className="sr-only">(current)</span></a>
        </div>
      </div>
    </nav>
  )
}

export default Usernav