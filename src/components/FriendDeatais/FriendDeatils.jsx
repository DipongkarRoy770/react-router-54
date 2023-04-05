import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDeatils = () => {
  const friend = useLoaderData()
  //console.log(friend)
  return (
    <div>
      <h1>name : {friend.name}</h1>
      <h2>gmail: {friend.email}</h2>
      <h2>phone: {friend.phone}</h2>
    </div>
  );
};

export default FriendDeatils;