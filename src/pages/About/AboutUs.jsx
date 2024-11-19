import React from 'react';
import Nav from '../../components/Nav/Nav';
import './aboutus.css';

const About = () => {
  return (
    <div className="about-container">
      <Nav />
      <h1>About Us</h1>
      <p>
        Welcome to our To-Do List application! We are a passionate team dedicated to helping you 
        organize your tasks and boost your productivity. Our goal is to provide a simple, 
        intuitive platform that makes managing your daily activities easier and more efficient.
      </p>
      <h2>Our Mission</h2>
      <p>
        We believe that staying organized is key to achieving your goals. Our mission is to 
        empower users to take control of their tasks and achieve a balanced life.
      </p>
      <h2>Our Story</h2>
      <p>
        Our journey began with a simple idea: to create a tool that helps individuals prioritize 
        what matters most. Over time, we’ve listened to our users and continuously improved 
        our app to meet their needs.
      </p>
      <h2>Join Us!</h2>
      <p>
        We invite you to explore our app and take the first step towards better organization. 
        Thank you for being a part of our community!
      </p>
    </div>
  );
};

export default About;
