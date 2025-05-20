import React, { useState } from 'react'
import { UserContext } from './userContext'
import Profile from './Profile';

const UseContext = () => {
    const [user] = useState("Vishnu");
  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile/>
      </UserContext.Provider>
    </div>
  )
}

export default UseContext
