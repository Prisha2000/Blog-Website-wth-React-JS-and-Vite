import React from 'react'

import { Link } from 'react-router-dom'

export default function DeletePost() {
  return (
    <section>
      <div className="container error-container">
        <div className="error-center">
          <h1>Delete Post</h1>
          
          <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
        </div>
      </div>
    </section>
  )
}
