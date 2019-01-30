import React from 'react';

import Search from "./Search";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <h1>Flickr Photos for a Topic</h1>
      <Search />
      <Nav />
    </div>
  );
}

export default Header;
