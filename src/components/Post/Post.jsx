import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Post = () => {
  const post = useLoaderData()
  //console.log(post)
  return (
    <div>
      <h3>wellcome to home post page :{post.length}</h3>
      {
        post.map(post => <Comment
        key={post.id}
        post= {post}
        ></Comment>)
      }
    </div>
  );
};

export default Post;