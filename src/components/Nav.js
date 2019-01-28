import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/search/octopus' onClick={() => {this.props.onSearch("octopus")}}>Octopus</NavLink></li>
          <li><NavLink to='/search/elephant' onClick={() => {this.props.onSearch("elephant")}}>Elephant</NavLink></li>
          <li><NavLink to='/search/penguin' onClick={() => {this.props.onSearch("penguin")}}>Penguin</NavLink></li>
        </ul>
      </nav>
    )}
}

export default Nav;
