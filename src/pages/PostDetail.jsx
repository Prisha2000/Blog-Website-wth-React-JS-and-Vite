import React from 'react'

//Router
import { Link } from 'react-router-dom'

//Components
import PostAuthor from '../components/PostAuthor'

//Post Detail Images
import postDetailImage from '../assets/blog post 1.jpg'

export default function PostDetail() {
  return (
    <section>
      <div className="container post-detail-container">
        <div className="postdetail-top">
          <PostAuthor />
          <div className="postdetail-button">
            
              <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>
              Edit
              </Link>
              <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>
              Delete
              </Link>
            
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postdetail-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt, accusantium tempore cum commodi optio autem delectus, quae quia nulla dolor ipsa asperiores perferendis exercitationem voluptates non facere provident atque!
        </p>
        </div>
      </div>
    </section>
  )
}
