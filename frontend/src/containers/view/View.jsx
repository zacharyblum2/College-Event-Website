import React from 'react';
import './view.css';
import { Leftv, Rightv } from '../../containers';
import { Header } from '../../components';

// Import router.
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const View = () => {
  return (
    <Router>
        <div className='view'>
          <Route exact path='/user'>
            <Header/>
          </Route>
          <br/>
          <div className='content'>
            <Leftv/>

            <Route exact path='/user'>
              <Rightv/>
            </Route>
          </div>
        </div>
    </Router>
    
  )
}

export default View