import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <section>
      <div className="container error-container">
        <div className="error-center">
          <h1>404</h1>
          <h3>Oops! This Page Not Found!</h3>
          <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
        </div>
      </div>
    </section>
  )
}
