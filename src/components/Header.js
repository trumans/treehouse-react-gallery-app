import React from 'react';

import Search from "./Search";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <h1>Flickr Photo Search</h1>
      <Search />
      <Nav />
    </div>
  );
}

export default Header;
