import React from 'react'
import { useUser } from './userContext'

const Profile = () => {
    const user = useUser()
  return <div>Hello, {user}</div>
}

export default Profile
