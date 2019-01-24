import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer.js";
import Loading from "./components/Loading";
import NoResults from "./components/NoResults";
import apiKey from "./config";

class App extends Component {

  state = { isLoading: false };
  response;

  fetchData = (search) => {
    const base_path = "https://api.flickr.com/services/rest/";
    const url_params =
      `method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    const searchUrl = `${base_path}?${url_params}`;
    console.log('search URL', searchUrl);

    this.setState( {isLoading: true, search: search} );
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => this.response = data)
      .then(() => this.setState( { isLoading: false} ));
  }

  parseResponse() {
    if (this.response === undefined) { return '' }
    const items = this.response.photos.photo.map( (item) => {
      const src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
      console.log('src', src);
      return {
        id: item.id,
        src: src}
      })
    return items;
  }

  handleSearch = (searchWord) => {
    console.log('search submitted for', searchWord);
    this.fetchData(searchWord);
  };

  componentDidMount() {
      this.handleSearch("octopus");
  }

  renderGallery() {
    const items = this.parseResponse(this.response);
    const search = this.state.search;
    if (this.state.isLoading) {
        return <Loading />
      } else {
        return (items.length)
          ? <GalleryContainer items={items} topic={search}/>
          : <NoResults topic={search} />
      }
  }

  render() {
    return (
      <div className="container">
        <Header onSearch={this.handleSearch} />
        { this.renderGallery() }
      </div>
    )
  }
}

export default App;
