import React from 'react';
import './makeEvent.css';

import { Usernav, Userfoot, CreateEvent} from '../../components';

// When clicking on an event, add information to localStorage, 
// on /event load, search for all information regarding that event and load it.
const MakeEvent = () => {
  return (
      <>
        <Usernav/>
        <CreateEvent/>
        <Userfoot/>
      </>
  )
}

export default MakeEvent