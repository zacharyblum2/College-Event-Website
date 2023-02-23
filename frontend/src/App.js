import React from 'react';
import './App.css';

// Import all components directly, using index.js inside components.
import {View, LoginContainer, SignupContainer} from './containers';
import {Calendar, Feed, Footer, NavbarComp} from './components';
import { HomePage, LoginPage, SignupPage, User, Event, Unis} from './pages';

// Import router.
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/signup">
            <SignupPage/>
          </Route>
          <Route exact path='/user'>
            <User/>
          </Route>
          <Route exact path='/rsos'>
            <User/>
          </Route>
          <Route exact path='/event'>
            <Event/>
          </Route>
          <Route exact path='/universities'>
            <Unis/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;