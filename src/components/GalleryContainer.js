import React from 'react';

import GalleryItem from "./GalleryItem";

<<<<<<< HEAD
const GalleryContainer = ( {items, topic} ) => {
  return (
    <div className="photo-container">
      <h2>Results for {topic}</h2>
=======
const GalleryContainer = ( {items} ) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
>>>>>>> a3628cb6e5e011010e6339e79bd70ab6f1ad30d1
      <ul>
        { items.map( (item) => <GalleryItem src={item.src} id={item.id} /> ) }
      </ul>
    </div>
  );
}

export default GalleryContainer;
