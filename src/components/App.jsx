import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchPhotos } from '../services/pixabay-api';

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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.handleSearch} />
    </div>
  );
  };
};
