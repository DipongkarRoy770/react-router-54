import React from 'react';
import './Comment.css'
import { Link } from 'react-router-dom';

const Comment = ({post}) => {
  //console.log(post)
  const {id}=post ;
  return (
    <div className='com'>
      <h3>serial:{post.id}</h3>
      <p>{post.body}</p>
      <p>{post.title}</p>
      <p><Link to={`/post/${id}`}>show more comment</Link></p>
    </div>
  );
};

export default Comment;