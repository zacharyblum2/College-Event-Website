import React from 'react';
import './rightv.css';
import { Cal } from '../../components';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Rightv = () => {
  return (
    <Router> 
      <div>
        <Route exact path='/user'>
          <Cal/>
        </Route>
        
        <Route exact path='/rsos'>
          <a href="/createrso" class="btn btn-success strectched-link">Create RSO</a>
        </Route>
      </div>
    </Router>
  )
}

export default Rightv