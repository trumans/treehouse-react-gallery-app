// TO DO: resolve creating unique key
import React from 'react';

const GalleryItem = ( {src, id} ) => {
  console.log('this props id', `li-${id}`);
  return (
    <li key={`li-${id}`} blah="yada">
      <img src={src} key={`img-${id}`} alt="" />
    </li>
  );
}

export default GalleryItem;
