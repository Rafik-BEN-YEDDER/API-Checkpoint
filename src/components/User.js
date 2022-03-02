import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function User({user}) {
  return (
    <div>
        <Link to={`/Profile/Post/${user.id}`}><Button variant="primary">
        {user.name}</Button></Link>
    </div>
  )
}

export default User