import React from "react";
import { ImagesGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images }) => {
    return (
        <ImagesGallery>
            <ImageGalleryItem>image 1</ImageGalleryItem>
            <ImageGalleryItem>image 2</ImageGalleryItem>
        </ImagesGallery>        
    );
};