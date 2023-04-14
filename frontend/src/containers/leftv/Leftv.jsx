import React, { useState, useEffect }from 'react';
import './leftv.css';
import {Card, Rso} from '../../components';

// Import router.
import {BrowserRouter as Router, Route} from 'react-router-dom';

// const events2 = [
//   { event_id: '1', name: 'Fun in the sun', description: 'OUTSIDE TIME', date: '12/2/2019', time: '12:00pm', 
//     organizer: 'Emily Blunt', email: 'emilyblunt@gmail.com', phone: '9545931896', 
//     location: ["HEC 103", 28.6024, -81.2001]
//   },
//   { event_id: '2', name: 'Enjoy while lasts', description: 'we will be sulking', date: '12/34/12000', time: '11:00pm', 
//     organizer: 'Peanut Man', email: 'peanut@gmail.com', phone: '9545931896', 
//     location: ["HEC 103", 28.6024, -81.2001]
//   },
//   { event_id: '3', name: 'I hate it here', description: 'nothing', date: '100/100/100', time: '9:00pm', 
//     organizer: 'George Guy', email: 'george@gmail.com', phone: '9545931896',
//     location: ["HEC 103", 28.6024, -81.2001]
//   },
// ]

const Leftv = () => {

  const [joined, setJoined] = useState([]);
  const [unjoined, setUnJoined] = useState([]);
  const [events, setEvents] = useState([]);
  const [userLoaded, setUserLoaded] = useState(false);
  const [admin, setAdmin] = useState(false);

  let user_data = JSON.parse(localStorage.getItem("user_data"));

  const getInfo = async event => {
    let data = {user_id: user_data.id};
    let js = JSON.stringify(data);

    // Does reading the errors work?
    try
    {
      // Get RSO information.
      const response = await fetch('http://localhost:8000/api/get_user_rsos/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

      let r = await response.text();

      let res = JSON.parse(r);
      setJoined(res.data.joined);
      setUnJoined(res.data.not_joined);
      console.log(joined);
      console.log(unjoined);

      // Get event information.
      const response2 = await 
      fetch('http://localhost:8000/api/get_user_events/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

      let r2 = await response2.text();
      let res2 = JSON.parse(r2)

      console.log("User events " + r2);
      setEvents(res2.data.events);

      // Get userType information. Create endpoint for it. 
      const response3 = await 
      fetch('http://localhost:8000/api/get_type/',
      {method:'POST', body: js, headers: {'Content-Type': 'application/json'}});

      let r3 = await response3.text();
      let res3 = JSON.parse(r3);

      let obj = {name: user_data.name, id: user_data.id, type: res3.data.user_type, uni: user_data.uni}
      
      // update locally stored information.
      localStorage.setItem('user_data', JSON.stringify(obj));
      user_data = JSON.parse(localStorage.getItem("user_data"));

      // Get user admin information    
      const response4 = await
      fetch('http://localhost:8000/api/get_user_admin_rsos/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});
    
      let r4 = await response4.text();
            
      let res4 = JSON.parse(r4);

      if (res.data.rsos)
      if (Object.values(res4.data.rsos).length !== 0)
        setAdmin(true);

      return {success: true}
    }
    catch (e)
    {
      console.log("ERROR");
      console.log(e.toString());

      return {success: false};
    } 
  }

  useEffect(() => {
    (async() => {
      let res = await getInfo();
      // Wait on res2 as well, if either fail throw error of some sort. 
      // let res2 = await getEvents();
      if (res.success) {
        setUserLoaded(true);

      console.log(userLoaded);
      }
    })();
  }, []);

  return (
    <Router>
      { userLoaded ? (
          <div className="cards">
          <Route exact path='/user'>
            {/* If the user is type 1 or 2 display Create Event, otherwise do not. */}
            { admin ? <a href="/createEvent" id="createBtn" class={user_data.type !== 0 ? "btn btn-primary" : "btn btn-primary hidden"}>Create Event</a> : <></> }
            <div className="rsos">
              <div className="public">
                <h2 class="h5">Events</h2>
                {
                  events.map((event) => 
                  <Card id={event.event_id} name={event.name} description={event.description} 
                  creator={event.creator} host_rso={event.host_rso} date={event.date} 
                  time={event.time} email={event.email} phone={event.phone} lng={event.longitude} 
                  lat={event.latitude} loc_name={event.loc_name}/>)
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