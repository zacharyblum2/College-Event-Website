import React from 'react';
import './event.css';

import { Usernav, Userfoot, Ievent, Comment} from '../../components';
import {Comments} from '../../containers';

// We have to combine data from tables in order to get this page. Get the event, then with the 
// eventID get the admin of the RSO, that is the organizer.
const event = [
  { event_id: '1', name: 'Fun in the sun', organizer: 'Emily blunt', description: 'OUTSIDE TIME', date: '12/2/2019', time: '12:00pm', email: 'emilyblunt@gmail.com', phone: '9545931896',
    longitude: '123', latitude: '1231', loc_name: 'HEC 103'}
]

// When clicking on an event, add information to localStorage, 
// on /event load, search for all information regarding that event and load it.
const Event = () => {
  return (
      <>
        <Usernav/>
        {
          event.map((event) => <Ievent name={event.name} organizer={event.organizer} description={event.description} date={event.date} 
                                time={event.time} email={event.email} phone={event.phone} location={event.loc_name}/>)
        }
        <Comments/>
        <Userfoot/>
      </>
  )
}

export default Event