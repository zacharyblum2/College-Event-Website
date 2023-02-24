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
          <button type="button" class="btn btn-success">Create RSO</button>
        </Route>
      </div>
    </Router>
  )
}

export default Rightv