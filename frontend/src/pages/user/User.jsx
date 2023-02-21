import React from 'react'
import './user.css';
import { Usernav, Userfoot, Header} from '../../components';
import { View } from '../../containers';

const User = () => {
  return (
    <>
        <Usernav/>
        <Header/>
        <View/>
        <Userfoot/>
    </>
  )
}

export default User