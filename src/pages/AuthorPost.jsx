import React from 'react'

//Dummy-posts-data
import { DummyPosts } from '../data/data'

//UseState
import { useState } from 'react'

//Components
import PostItem from '../components/PostItem'

export default function AuthorPost() {

  const [posts, setPosts] = useState(DummyPosts)

  return (
    <section className='authorPost'>

      <h1 className='page-title'>Author Post</h1>

      { posts.length > 0 ? <div className='container authorPost-container'>
            {
              posts.map(({id, Image, authorId, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
            }
        </div> : <h2 className='error-center'>No posts found</h2>
      }
    </section>
  )
}
