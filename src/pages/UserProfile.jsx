import React from 'react'
import { Link } from 'react-router-dom'

//UseState
import { useState } from 'react'

import ProfileImage from '../assets/avatar 2.jpg'

//Icons
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function UserProfile() {

  const[profileImage, setProfileImage] =useState ('');

  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [currentPassword, setCurrentPassword]= useState()
  const [newPassword, setNewPassword]= useState()
  const [confirmNewPassword, setConfirmNewPassword]= useState()

  const changeInputHandle=(e)=>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <section className='profile'>
      <div className="container profile-container">
        <Link to={'/myposts/id'}>My Posts</Link>



        <div className="profile-details form-container">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={ProfileImage} alt="" />
            </div>
            {/*Profile Form*/}
            <form className='profile-image-form' action="">
              <input type="file" name='profile-image' id='profile-image' accept='png, jpg, jpeg' onChange={e => setProfileImage(e.target.files[0])} />
              {/*<label htmlFor="profile-image"><FaEdit /></label>*/}
            </form>

            <button className="profile-image-button"><FaCheckCircle /></button>
          </div>

          <h2>Rony Roy</h2>

          {/*Profile Data Form*/}
          <form action="" className='form profile-data-form'>
          <p className='form-message'>This is the invalid message</p>
          
          <input type="text" placeholder='Full Name' name='name' value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder='Email Id' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder='Current Password' name='currentPassword' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
          <input type="password" placeholder='New Password' name='newPassword' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
          <input type="password" placeholder='Confirm Password' name='confirmPassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
          
          <button type='submit' className='btn btn-primary'> Update </button>
        </form>

        </div>
      </div>
    </section>
  )
}
