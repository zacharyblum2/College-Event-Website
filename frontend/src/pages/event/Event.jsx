import React from 'react';
import './event.css';

import { Usernav, Userfoot, } from '../../components';
import { Ievent } from '../../containers';

const Event = () => {
  return (
    <>
        <Usernav/>
        <Ievent/>
        <Userfoot/>
    </>
  )
}

export default Event