import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({user}) => {
  const {id,phone,email,name}=user ;
  return (
    <div className='box'>
       <h1>name :{name}</h1>
       <h2>mail :{email}</h2>
       <p>phone: {phone}</p>
       <p><Link to ={`/friend/${id}`}>show more details</Link></p>
    </div>
  );
};

export default Friend;