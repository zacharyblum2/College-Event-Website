import React from 'react';
import './App.css';

// Import all components directly, using index.js inside components.
import {View, LoginContainer, SignupContainer} from './containers';
import {Calendar, Event, Feed, Footer, NavbarComp} from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'> 
      <div className='gradient__bg'>
        <NavbarComp />
        <LoginContainer/>
        <SignupContainer/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
