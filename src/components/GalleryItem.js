import React from 'react';

const GalleryItem = ( {src, id} ) => {
  return (
    <li>
      <img src={src} alt="" />
    </li>
  );
}

export default GalleryItem;
