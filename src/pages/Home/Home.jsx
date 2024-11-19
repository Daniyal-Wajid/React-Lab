import React from 'react';
import Nav from '../../components/Nav/Nav';
import './home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <h1>Welcome to Your To-Do List</h1>
      <p>Organize your tasks and boost your productivity with ease. Keep track of what matters most to you.</p>
      <p>Get started today and take control of your day!</p>
    </div>
  );
};

export default Home;
