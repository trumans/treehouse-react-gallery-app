import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><a href='#' onClick={() => {this.props.onSearch("octopus")}}>Octopuses</a></li>
          <li><a href='#' onClick={() => {this.props.onSearch("elephant")}}>Elephants</a></li>
          <li><a href='#' onClick={() => {this.props.onSearch("penguin")}}>Penguins</a></li>
        </ul>
      </nav>
    )}
}

export default Nav;
