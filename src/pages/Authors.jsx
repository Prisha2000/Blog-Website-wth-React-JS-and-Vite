import React from 'react'

//UseState
import { useState } from 'react'

//Dummy-author-data
import { DummyAuthor } from '../data/data'
import { Link } from 'react-router-dom'

export default function Authors() {

  const [author, setAuthor] = useState(DummyAuthor)

  return (
    <section className='author'>
      
      {author.length > 0 ? <div className="container author-container" >
        {
          author.map(({id, Image, name, posts},index)=>{
            return <Link to={'/posts/user/${id}'} key={index} className='author-avatar'>
              <div className="author-image">
                <img src={Image} alt="" />
              </div>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
        </div> : <h2 className='error-center'>No User found</h2>
        }
      
    </section>
  )
}