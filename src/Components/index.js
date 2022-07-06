import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

  const Navbar = () => {
  return (
    <>
     <nav className="navbar-light bg-dark ">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link  mx-4 my-2 " aria-current="page" href="home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 my-2" href="about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 my-2" href="contact">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 my-2" href="subjects">Subjects</a>
        </li>
      </ul>
    </nav>
    </>
  );
};
  
export default Navbar;
