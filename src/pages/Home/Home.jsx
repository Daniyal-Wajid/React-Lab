import React from 'react';
import { Link } from 'react-router-dom';  
import Nav from '../../components/Nav/Nav';
import './home.css';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Your To-Do List</h1>
        <p className="text-lg text-center mb-4">
          Organize your tasks and boost your productivity with ease. Keep track of what matters most to you.
        </p>
        <p className="text-lg text-center mb-8">
          Get started today and take control of your day!
        </p>

        <div className="flex space-x-4">
          <Link to="/pageone">
            <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
              Go to Page One
            </button>
          </Link>
          <Link to="/pagetwo">
            <button className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-200">
              Go to Page Two
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
