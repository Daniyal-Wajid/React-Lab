import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div>
      <div className='nav'>
          <h1 className='nav-title'>TODOS</h1>
          <ul className='nav-menu'>
              <li className='nav-buttons'>
                  <Link to="/">Home</Link>
              </li>
              <li className='nav-buttons'>
                  <Link to="/todos">Todos</Link>
              </li>
              <li className='nav-buttons'>
                  <Link to="/aboutus">About Us</Link>
              </li>
              <li className='nav-buttons'>
                  <Link to="/authform">Authentication Form</Link>
              </li>
              <li className='nav-buttons'>
                  <Link to="/simpleform">Simple Form</Link>
              </li>
              <li className='nav-buttons'>
                  <Link to="/incrementpage">Increment Page</Link>
              </li>
          </ul>
      </div>
      <div className='bottom-line'></div>
    </div>
  );
}

export default Nav;
