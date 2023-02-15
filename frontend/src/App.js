import logo from './logo.svg';
import './App.css';
import React from 'react';

// Import all components directly, using index.js inside components.
import {View} from './containers';
import {Calendar, Event, Feed, Footer, NavbarComp} from './components';



function App() {
  return (
    <div className='App'> 
      <div className='gradient__bg'>
        <NavbarComp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
