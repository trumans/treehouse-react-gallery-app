// TO DO: resolve creating unique key
import React from 'react';

const GalleryItem = ( {src, id} ) => {
<<<<<<< HEAD
  console.log('props id', `li-${id}`);
  return (
    <li key={`li-${id}`}>
=======
  console.log('this props id', `li-${id}`);
  return (
    <li key={`li-${id}`} blah="yada">
>>>>>>> a3628cb6e5e011010e6339e79bd70ab6f1ad30d1
      <img src={src} key={`img-${id}`} alt="" />
    </li>
  );
}

export default GalleryItem;
