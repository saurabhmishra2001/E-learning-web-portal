import React from 'react'


export default function Navbar() {
  return (
    <div >
    <nav className="navbar-light bg-dark ">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link  mx-4 my-2 " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 my-2" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 my-2" href="/">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 my-2" href="/">Our Services</a>
        </li>
      </ul>
    </nav>

  </div>
    )
}



