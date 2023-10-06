import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import { pixabayApi } from '../services/pixabay-api';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';





export const App = () => {

  // state = {
  //   photos:[],
  //   currentPage: 1,
  //   searchQuery: '',
  //   isLoading: false,
  //   error: null,
  //   showModal: false,
  //   modalImage:{},
  // };

  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({});

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.fetchPhotos();
  //   }
  // };

  useEffect(() => {
    fetchPhotos();
  }, [searchQuery]);

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setPhotos([]);
    setError(null);

    // this.setState({
    //   searchQuery: query,
    //   currentPage: 1,
    //   photos: [],
    //   error: null,
    // });
  };

  const fetchPhotos = () => {
    // let { currentPage, searchQuery } = this.state;
    // let options = { searchQuery, currentPage };

    // this.setState({ isLoading: true });
    setIsLoading(true);

    pixabayApi({ searchQuery, currentPage })
      .then(photos => {
        setPhotos([...photos, ...photos]);
        setCurrentPage(currentPage + 1);
        // this.setState(prevState => ({
        //   photos: [...prevState.photos, ...photos],
        //   currentPage: prevState.currentPage + 1,
        // }));
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));

  };

  const toggleModal = (e) => {
    if (e) {
      setModalImage({
        src: e.target.id,
        alt: e.target.alt
      })
      // this.setState(({
      //   modalImage: {
      //     src: e.target.id,
      //     alt: e.target.alt
      //   }
      // }));  
    } else {
      // this.setState(({ modalImage: {} }));
      setModalImage({});
    };
   
    setShowModal(!showModal);

    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };
    
  
    // let { photos, isLoading, showModal, modalImage } = this.state;
    let showLoadMore = photos.length > 0 && !isLoading;

  return (
    <AppContainer>
      <SearchBar onSubmit={onChangeQuery} />
      <ImageGallery images={photos} onClick={toggleModal } />
      {showLoadMore && <Button loadMore={fetchPhotos} />}
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
      {showModal && (<Modal onClose={toggleModal} image={modalImage} showModal={showModal} />)}
    </AppContainer>
  );
  };
