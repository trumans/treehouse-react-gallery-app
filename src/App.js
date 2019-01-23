import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer.js";
import NoResults from "./components/NoResults";
import apiKey from "./config";

class App extends Component {

  state = { search: 'bird' };

  fetchData = () => {
    const base_path = "https://api.flickr.com/services/rest/";
    const url_params =
      `method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.search}&per_page=24&format=json&nojsoncallback=1`;
    const searchUrl = `${base_path}?${url_params}`;
    console.log('search URL', searchUrl);

    fetch(searchUrl)
      .then(response => response.json())
      .then(data => this.setState( { data: data } ));
  }

  parseData = (data) => {
    if (data === undefined) { return '' }
    const items = data.photos.photo.map( (item) => {
      const src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
      console.log('src', src);
      return {
        id: item.id,
        src: src}
      })
    return items;
  }

  handleNewSearch = (newSearch) => {
    console.log('new search submitted for', newSearch);
    this.setState({search: newSearch});

  };

  render() {
    console.log('apiKey', apiKey);
    console.log('state', this.state);
    this.fetchData();
    const items = this.parseData(this.state.data);
    return (
      <div className="container">
        <Header onSearch={this.handleNewSearch} />
        { (items.length) ? <GalleryContainer items={items}/> : <NoResults /> }
      </div>
    )}
}

export default App;
