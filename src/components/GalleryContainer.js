import React, { Component } from 'react';

import GalleryItem from "./GalleryItem";
import Loading from "./Loading";
import NoResults from "./NoResults";

class GalleryContainer extends Component {

  render() {
    let body;
    const { isLoading, search, items } = this.props.state;

    if (isLoading || items == null ) {
      body = <Loading />
    } else {
      if ( items.length === 0 ) {
        body = <NoResults search={search} />
      } else {
        body = (
          <div>
            <h2>Results for {search}</h2>
            <ul>
              { items.map( (item) => <GalleryItem src={item.src} id={item.id} /> ) }
              </ul>
          </div>
        )
      }
    }

    return (
      <div className="photo-container">
       { body }
      </div>
    )
  }
}

export default GalleryContainer;
