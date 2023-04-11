import React, { useState, useEffect }from 'react';
import './leftv.css';
import {Card, Rso} from '../../components';

// Import router.
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const events = [
  { event_id: '1', name: 'Fun in the sun', description: 'OUTSIDE TIME', date: '12/2/2019', time: '12:00pm', 
    organizer: 'Emily Blunt', email: 'emilyblunt@gmail.com', phone: '9545931896', 
    location: ["HEC 103", 28.6024, -81.2001]
  },
  { event_id: '2', name: 'Enjoy while lasts', description: 'we will be sulking', date: '12/34/12000', time: '11:00pm', 
    organizer: 'Peanut Man', email: 'peanut@gmail.com', phone: '9545931896', 
    location: ["HEC 103", 28.6024, -81.2001]
  },
  { event_id: '3', name: 'I hate it here', description: 'nothing', date: '100/100/100', time: '9:00pm', 
    organizer: 'George Guy', email: 'george@gmail.com', phone: '9545931896',
    location: ["HEC 103", 28.6024, -81.2001]
  },
]

const Leftv = () => {

  // const [events, setEvents] = useState("");
  const [joined, setJoined] = useState("");
  const [unjoined, setUnJoined] = useState("");
  const [events, setEvents] = useState("");
  const [userLoaded, setUserLoaded] = useState(false);

  let user_data = JSON.parse(localStorage.getItem("user_data"));

  const getRSOs = async event => {
    let data = {user_id: user_data.id};
    let js = JSON.stringify(data);

    // Does reading the errors work?
    try
    {
      const response = await fetch('http://localhost:8000/api/get_user_rsos/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

      let r = await response.text();

      let res = JSON.parse(r);
      setJoined(res.data.joined);
      setUnJoined(res.data.not_joined);

      const response2 = await 
      fetch('http://localhost:8000/api/get_user_events/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

      let r2 = await response.text();
      let res2 = JSON.parse(r2)
      setEvents(res2.data);

      return {success: true}
    }
    catch (e)
    {
      alert(e.toString());
      return {success: false};
    }
  }

  useEffect(() => {
    (async() => {
      setUserLoaded(false);
      let res = await getRSOs();
      // Wait on res2 as well, if either fail throw error of some sort. 
      // let res2 = await getEvents();
      if (res.success) {
        setUserLoaded(true);
      }
    })();
  }, []);

  return (
    <Router>
      { userLoaded ? (
          <div className="cards">
          <Route exact path='/user'>
          <a href="/createEvent" id="createBtn" class={user_data.type === 0 ? "btn btn-primary" : "btn btn-primary"}>Create Event</a>
            <div className="rsos">
              <div className="public">
                <h2 class="h5">Events</h2>
                {
                  events.map((events) => <Card id={events.event_id} name={events.name} description={events.description} date={events.date} 
                  time={events.time} location={events.location} email={events.email} phone={events.phone} organizer={events.organizer} part={false}/>)
                }
              </div>
              <div className="your">
                {/* These are the events that you are scheduled for. Should make two different calls*/}
                <h2 class="h5">Events Registered</h2>
                {
                  events.map((events) => <Card id={events.event_id} name={events.name} description={events.description} date={events.date} 
                  time={events.time} location={events.location} email={events.email} phone={events.phone} organizer={events.organizer} part={true}/>)
                }
              </div>
            </div>
          </Route>
          <Route exact path='/rsos'>
            <div className="rsos">
              <div className="public">
                <h2 class="h5">Joinable RSOs</h2>
                {
                  unjoined.map((rso) => <Rso name={rso} part={false}/>)
                }
              </div>
              <div className="your">
                <h2 class="h5">Your RSOs</h2>
                {
                  joined.map((rso) => <Rso name={rso} part={true}/>)
                }
              </div>
            </div>
          </Route>
        </div>
      ) : (
        <p>Loading User Data</p>
      )}
    </Router>
    
  )
}

export default Leftv