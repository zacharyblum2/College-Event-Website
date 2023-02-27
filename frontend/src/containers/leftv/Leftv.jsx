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
            {/* cards.map((element) => <Card name={element.name} description={element.description} time={element.time} location={element.location} />*/}
            <Card/>
            <Card/>
          </Route>
          <Route exact path='/rsos'>
            <h2 class="h5">RSOS</h2>
            {/* rsos.map((element) => <Rso name={element.name} description={element.description}/>*/}
            <Rso/>
          </Route>
        </div>
    </Router>
    
  )
}

export default Leftv