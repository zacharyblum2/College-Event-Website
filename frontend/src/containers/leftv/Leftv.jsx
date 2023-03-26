import React from 'react';
import './leftv.css';
import {Card, Rso} from '../../components';

// Import router.
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const events = [
  { event_id: '1', name: 'Fun in the sun', description: 'OUTSIDE TIME', date: '12/2/2019', time: '12:00pm', 
    organizer: 'Emily Blunt', email: 'emilyblunt@gmail.com', phone: '9545931896', longitude: '123', 
    latitude: '1231', loc_name: 'HEC 103'
  },
  { event_id: '2', name: 'Enjoy while lasts', description: 'we will be sulking', date: '12/34/12000', time: '11:00pm', 
    organizer: 'Peanut Man', email: 'peanut@gmail.com', phone: '9545931896', longitude: '123', 
    latitude: '1231', loc_name: 'HEC 103'
  },
  { event_id: '3', name: 'I hate it here', description: 'nothing', date: '100/100/100', time: '9:00pm', 
    organizer: 'George Guy', email: 'george@gmail.com', phone: '9545931896',longitude: '123', 
    latitude: '1231', loc_name: 'HEC 103'
  },
]

const rsos = [
  { name: 'Folkore Club', admin_id: '1', description: 'The 2023 folklore society club will focus on'},
  { name: 'Anime Club', admin_id: '2', description: 'We like to watch anime'}
]

const Leftv = () => {
  return (
    <Router>
        <div className="cards">
          <Route exact path='/user'>
            <div className="rsos">
              <div className="public">
                <h2 class="h5">Events</h2>
                {
                  events.map((events) => <Card name={events.name} description={events.description} date={events.date} 
                  time={events.time} location={events.loc_name} email={events.email} phone={events.phone} organizer={events.organizer} part={false}/>)
                }
              </div>
              <div className="your">
                {/* These are the events that you are scheduled for. Should make two different calls*/}
                <h2 class="h5">Events Registered</h2>
                {
                  events.map((events) => <Card name={events.name} description={events.description} date={events.date} 
                  time={events.time} location={events.loc_name} email={events.email} phone={events.phone} organizer={events.organizer} part={true}/>)
                }
              </div>
            </div>
          </Route>
          <Route exact path='/rsos'>
            <div className="rsos">
              <div className="public">
                <h2 class="h5">Joinable RSOs</h2>
                {
                rsos.map((rso) => <Rso name={rso.name} description={rso.description} part={false}/>)
                }
              </div>
              <div className="your">
                <h2 class="h5">Your RSOs</h2>
                {
                rsos.map((rso) => <Rso name={rso.name} description={rso.description} part={true}/>)
                }
              </div>
            </div>
          </Route>
        </div>
    </Router>
    
  )
}

export default Leftv