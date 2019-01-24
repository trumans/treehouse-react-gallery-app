// TO DO: resolve creating unique key
import React from 'react';

const GalleryItem = ( {src, id} ) => {
  console.log('props id', `li-${id}`);
  return (
    <li key={`li-${id}`}>
      <img src={src} key={`img-${id}`} alt="" />
    </li>
  );
}

export default GalleryItem;
