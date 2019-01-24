import React from 'react';

import GalleryItem from "./GalleryItem";

const GalleryContainer = ( {items, topic} ) => {
  return (
    <div className="photo-container">
      <h2>Results for {topic}</h2>
      <ul>
        { items.map( (item) => <GalleryItem src={item.src} id={item.id} /> ) }
      </ul>
    </div>
  );
}

export default GalleryContainer;
