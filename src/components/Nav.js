import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/search/octopus'>Octopus</NavLink></li>
        <li><NavLink to='/search/elephant'>Elephant</NavLink></li>
        <li><NavLink to='/search/penguin'>Penguin</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
