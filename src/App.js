import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer.js";
import PageNotFound from "./components/PageNotFound";
import apiKey from "./config";

class App extends Component {

  state = { isLoading: false, search: '' };
  defaultSearch = 'octopus';

  fetchData = (search) => {
    const base_path = "https://api.flickr.com/services/rest/";
    const url_params =
      `method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    const searchUrl = `${base_path}?${url_params}`;

    this.setState( { isLoading: true  } );
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => this.parseResponse(data))
      .then(items => this.setState( { items: items, search: search, isLoading: false } ));
  }

  parseResponse(data) {
    if (data === undefined) { return '' }
    const items = data.photos.photo.map( (item) => {
      const src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`

      return {
        id: item.id,
        src: src}
      })
    return items;
  }

  handleSearch = (searchWord) => {
    this.fetchData(searchWord);
  };

  componentDidMount() {
      this.handleSearch(this.defaultSearch);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.handleSearch} />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to={`/search/${this.defaultSearch}`} /> } />
            <Route path="/search/:topic" render={ () => <GalleryContainer state={this.state} handleSearch={this.handleSearch}/> } />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
