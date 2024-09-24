import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar '>
        <NavLink to='/' ><div className="logo">MoviesHub</div></NavLink>
        <div className="navlinks">
            <NavLink to='/' ><button>Home</button></NavLink>
            <NavLink to='/about' ><button>About</button></NavLink>
            <NavLink to='/help'><button>FAQ</button></NavLink>
        </div>
    </div>
  );
}

export default Navbar;
