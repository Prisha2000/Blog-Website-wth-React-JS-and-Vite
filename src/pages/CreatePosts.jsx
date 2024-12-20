import React from 'react'
import { useState } from 'react'

//React Quill
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function CreatePosts() {

  const [title, setTitle]= useState('')
  const [category, setCategory]= useState('Uncategorized')
  const [description, setDescription]= useState('')
  const [thumbImage, setthumbImage]= useState('')


  //Post Categories
  const postCategories = ['Education', 'Discovery', 'Agriculture', 'Entertainment', 'Music', 'Art', 'Business', 'Investment', 'Fashion', 'Sports', 'Science', 'Weather'];

  //Modules
  const modules={
    toolbar: [
      [{'header' : [1, 2, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list' : 'ordered'}, {'list' : 'bullet'}, {'indent' : '+1'}, {'indent' : '-1'}],
      ['link', 'image'],
      ['clean']
    ]
  }

   //Formats
  const formats =[
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <section className='createPosts'>
      <div className="container form-container createPost-container">
      <h2>Create Post</h2>
        <form action="" className='form createPosts-form'>
          <p className='form-message'>This is the invalid message</p>
          
          <input type="text" placeholder='Title' name='title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select> 

          <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)} />
          
          <input type="file" value={thumbImage} onChange={e => setthumbImage(e.target.value)} accept='png, jpg, jpeg'/>

          <button type='submit' className='btn btn-primary'> Create </button>
        </form>
      </div>
    </section>
  )
}
