import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  
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
      <SearchBar/>
    </div>
  );
  };
};
