import React from 'react';
import './App.css';

// Import all components directly, using index.js inside components.
import {View, LoginContainer, SignupContainer} from './containers';
import {Calendar, Event, Feed, Footer, NavbarComp} from './components';
import { HomePage, LoginPage, SignupPage } from './pages';

function App() {
  return (
    <div className='App'>
        <HomePage/>
    </div>
      
  );
}

export default App;