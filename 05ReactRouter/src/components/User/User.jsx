import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} =  useParams()
    if(userId == 'admin'){
        alert("Secret password is: Harry Potter");
    }


  return (
    <div className='text-center bg-slate-600'> <b className='text-2xl'>User: {userId}</b></div>
  )
}

export default User