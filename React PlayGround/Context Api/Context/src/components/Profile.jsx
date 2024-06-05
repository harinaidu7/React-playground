import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  
  const {user} = useContext(UserContext)
  
  if(!user) return <h1>Not Logging in</h1>
  
  return (
    <div>
      Profile:{user.username}
      <h1></h1>
    </div>
  )
}
