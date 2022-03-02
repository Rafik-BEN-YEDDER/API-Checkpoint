
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Error from './Error'
import Cardd from './Cardd'

function Post() {
    const params=useParams()
    const [pst,setpst]=useState()
    const [errorr,setErrorr]=useState()
    useEffect(()=>{
        axios
          .get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
          .then(res =>setpst(res.data) )
          .catch(err => setErrorr(err));
    },[])
    console.log(params.id)
  return (
    <div>
            {errorr? <Error/>: pst && pst.map(el=> <Cardd aa={el}/>)}
    </div>
  )
}

export default Post