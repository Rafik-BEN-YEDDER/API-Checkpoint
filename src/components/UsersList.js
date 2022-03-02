import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Error from './Error'
import User from './User'
function UsersList() {
    const [user,setUser]=useState()
    const [error,setError]=useState()
    useEffect(()=>{
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(res =>setUser(res.data) )
          .catch(err => setError(err));
    },[])
  return (
      <div>
    <div>UsersList</div>
    <div>
        {error? <Error/>: user && user.map(el=> <User user={el}/>)}
    </div>
    </div>
  )
}

export default UsersList
