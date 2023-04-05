import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleCom.css'

const SingleCom = () => {
  const body = useLoaderData()
  console.log(body)
  return (
    <div className='body'>
      <h1>wellcomr to single commet data loading</h1>
      <h2>{body.id}</h2>
      <h1>{body.title}</h1>
      <h3>{body.userId}</h3>
      <p>{body.body}</p>
    </div>
  );
};

export default SingleCom;