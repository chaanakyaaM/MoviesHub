import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <NavLink exact to='/' ><div className="logo">MoviesHub</div></NavLink>
        <div className="navlinks">
            <NavLink exact to='/' ><button>Home</button></NavLink>
            <NavLink to='/about' ><button>About</button></NavLink>
            <NavLink to='/help'><button>Help</button></NavLink>
        </div>
    </div>
  );
}

export default Navbar;
