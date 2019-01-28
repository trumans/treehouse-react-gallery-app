// Might add app title, logo
import React from 'react';

import Search from "./Search";
import Nav from "./Nav";

const Header = ( {onSearch} ) => {
  return (
    <div>
      <h1>Flickr Photos for a Topic</h1>
      <Search onSearch={onSearch} />
      <Nav onSearch={onSearch} />
    </div>
  );
}

export default Header;
