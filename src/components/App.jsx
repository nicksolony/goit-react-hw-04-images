import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import { pixabayApi } from '../services/pixabay-api';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';



export class App extends Component {

  state = {
    photos:[],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error:null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPhotos();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      photos: [],
      error: null,
    });
  };

  fetchPhotos = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    pixabayApi(options)
      .then(photos => {
        console.log(photos);
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

  };
    
  render () {
  return (
    <AppContainer>
      <SearchBar onSubmit={this.onChangeQuery} />
      <ImageGallery images={this.state.photos} />
      <Button loadMore={this.fetchPhotos}/>
    </AppContainer>
  );
  };
};
