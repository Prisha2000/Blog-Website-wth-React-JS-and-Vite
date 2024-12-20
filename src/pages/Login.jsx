import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  
  const [useData, setUserData]= useState({

    email: '',
    password: '',

  })

  const changeInputHandle=(e)=>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <section className='login'>
      <div className="container login-container form-container">
        <h2>Log In</h2>
        <form action="" className='form register-form'>
          <p className='form-message'>This is the invalid message</p>
          
          <input type="email" placeholder='Email Id' name='email' value={useData.email} onChange={changeInputHandle}/>
          <input type="password" placeholder='Password' name='password' value={useData.password} onChange={changeInputHandle}/>
          
          <button type='submit' className='btn btn-primary'> Log In </button>
        </form>

        <small>Do not have an account? <Link to={'/register'}>Register</Link></small>
      </div>
    </section>
  )
}
