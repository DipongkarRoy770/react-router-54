import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav >
      <Link to="">Home</Link>
      <Link to= "friends">Friends</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="posts">Post</Link>
        
    </nav>
  );
};

export default Header;