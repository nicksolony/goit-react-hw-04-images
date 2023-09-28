import React from "react";
import { ImagesGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images }) => {
    return (
        <ImagesGallery>
            {
                images.map(({ id, webformatURL, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />)
            }
        </ImagesGallery>        
    );
};