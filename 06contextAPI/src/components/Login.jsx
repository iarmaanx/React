import React, { useState } from 'react'

const [userName , setUserName] = useState('')
const [password , setPassword] = useState('')

function Login() {
  return (
    <div>
        <p>Login Page</p>
        <input type="text"
        placeholder='username'
        value={userName} 
        onChange={ (e) => setUserName(e.target.value)}          
        />
    </div>
  )
}

export default {Login, userName, password}