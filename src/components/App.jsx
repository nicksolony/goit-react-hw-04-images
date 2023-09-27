import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import { fetchPhotos } from '../services/pixabay-api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';



export class App extends Component {

  handleSearch = e => {
    let searchObject = {
      searchQuery: 'yellow flower',
      currentPage: 1
    };
    e.preventDefault();
    fetchPhotos(searchObject)
  }
    
  render () {
  return (
    <AppContainer>
      <SearchBar onSubmit={this.handleSearch} />
      <ImageGallery/>
    </AppContainer>
  );
  };
};
