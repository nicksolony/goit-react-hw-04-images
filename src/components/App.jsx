import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import { pixabayApi } from '../services/pixabay-api';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';





export class App extends Component {

  state = {
    photos:[],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    modalImage:{},
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
    let { currentPage, searchQuery } = this.state;
    let options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    pixabayApi(options)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

  };

  toggleModal = (e) => {
    if (e) {
      this.setState(({
        modalImage: {
          src: e.target.id,
          alt: e.target.alt
        }
      }));  
    } else {
      this.setState(({modalImage: {}}));
    }
    
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
    
  render() {
    let { photos, isLoading, showModal, modalImage } = this.state;
    let showLoadMore = photos.length > 0 && !isLoading;

  return (
    <AppContainer>
      <SearchBar onSubmit={this.onChangeQuery} />
      <ImageGallery images={photos} onClick={ this.toggleModal } />
      {showLoadMore && <Button loadMore={this.fetchPhotos} />}
      {isLoading && <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
      />}
      {showModal && (<Modal onClose={this.toggleModal} image={ modalImage} />)}
    </AppContainer>
  );
  };
};
