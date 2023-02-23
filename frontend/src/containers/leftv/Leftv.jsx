import React from 'react';
import './leftv.css';
import {Card, Rso} from '../../components';

// Import router.
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Leftv = () => {
  return (
    <Router>
        <div className="cards">
          <Route exact path='/user'>
            <Card/>
            <Card/>
          </Route>
          <Route exact path='/rsos'>
            <h2 class="h5">RSOS</h2>
            <Rso/>
          </Route>
        </div>
    </Router>
    
  )
}

export default Leftv