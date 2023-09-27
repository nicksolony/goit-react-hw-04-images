import React from "react";
import {ImagesGallery} from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
    return (
        <ImagesGallery>
            <li>image 1</li>
            <li>image 2</li>
        </ImagesGallery>        
    );
};