import React from 'react';
import './rightv.css';
import { Cal } from '../../components';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Rightv = () => {
  return (
    <Router> 
      <div>
        <Route exact path='/user'>
          {/* Only display if the user is of type admin, we should pass JSON to each page
              and then verify if user is admin status. If so make this button display.*/}
          <a href="/createevent" class="create hidden btn btn-success">Create event</a>
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