import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Register() {

  const [useData, setUserData]= useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const changeInputHandle=(e)=>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <section className='register'>
      <div className="container register-container form-container">
        <h2>Sign Up</h2>
        <form action="" className='form register-form'>
          <p className='form-message'>This is the invalid message</p>
          <input type="text" placeholder='Full Name' name='name' value={useData.name} onChange={changeInputHandle}/>
          <input type="email" placeholder='Email Id' name='email' value={useData.email} onChange={changeInputHandle}/>
          <input type="password" placeholder='Password' name='password' value={useData.password} onChange={changeInputHandle}/>
          <input type="password" placeholder='Confirm Password' name='password2' value={useData.password2} onChange={changeInputHandle}/>

          <button type='submit' className='btn btn-primary'> Register </button>
        </form>

        <small>Already have an account? <Link to={'/login'}>Log In</Link></small>
      </div>
    </section>
  )
}
