import React from 'react'
import Profile from '../Common/Header/Profile';
import Navbar from '../Common/Header/Navbar/Navbar';
import './Home.css'


import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Profile />
    
    </div>
  );
}

export default Home