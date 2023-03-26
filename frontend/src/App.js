import React from 'react';
import './App.css';

// Import all components directly, using index.js inside components.
import { HomePage, LoginPage, SignupPage, User, Event, Unis, Rso, MakeEvent} from './pages';

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
          <Route exact path='/createrso'>
            <Rso/>
          </Route>
          <Route exact path='/universities'>
            <Unis/>
          </Route>
          <Route exact path='/createEvent'>
            <MakeEvent/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;