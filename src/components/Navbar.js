import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        MoviesHub
      </NavLink>
      <div className="navlinks">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <button>Home</button>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          <button>About</button>
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => (isActive ? 'active' : '')}>
          <button>FAQ</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
