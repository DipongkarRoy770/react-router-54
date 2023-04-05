import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
  const data = useLoaderData()
  //console.log(data)
  return (
    <div>
      <h3>wellcomr to friend my react router page ={data.length}</h3>
      {
        data.map(user=> <Friend
        key={user.id}
        user ={user}
        ></Friend>)
      }
    </div>
  );
};

export default Friends;