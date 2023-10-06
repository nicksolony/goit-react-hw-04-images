import { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import { pixabayApi } from '../services/pixabay-api';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';





export const App = () => {


  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({});


  useEffect(() => {
    fetchPhotos();
  }, [searchQuery]);

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setPhotos([]);
    setError(null);


  };

  const fetchPhotos = () => {

    setIsLoading(true);

    pixabayApi({ searchQuery, currentPage })
      .then(photos => {
        setPhotos([...photos, ...photos]);
        setCurrentPage(currentPage + 1);

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
  
    } else {

      setModalImage({});
    };
   
    setShowModal(!showModal);


  };
    
  
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
