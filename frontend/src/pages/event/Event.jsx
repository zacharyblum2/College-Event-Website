import React from 'react';
import './event.css';

import { Usernav, Userfoot, Ievent, Comment} from '../../components';
import {Comments} from '../../containers';

const Event = () => {
  return (
      <>
        <Usernav/>
        <Ievent/>
        <Comments/>
        <Userfoot/>
      </>
  )
}

export default Event