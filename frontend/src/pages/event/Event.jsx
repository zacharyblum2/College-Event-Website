import React from 'react';
import './event.css';

import { Usernav, Userfoot, Ievent} from '../../components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Event = () => {
  return (
    <Router>
      <>
          <Usernav/>
          <Route exact path='/event'>
              <Ievent/>
          </Route>
          <Route exact path='/createrso'>

          </Route> 
          <Userfoot/>
      </>
    </Router>
  )
}

export default Event