import React from 'react'

const Post = ({title, image, description}) => {
  
  return (
    <div className='post'>
      <div 
        style={{ backgroundImage: `url(${image})`}} 
        className="post__image"
      ></div>

      <div className="post__info">
        <h2 className="post__title">{title}</h2>
        <p className="post_description">
          {description}
        </p>
      </div>

    </div>
  )
}

export default Post