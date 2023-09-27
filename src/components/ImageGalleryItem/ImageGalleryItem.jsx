import React from "react";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ id,webformatURL,largeImageURL }) => {
    return (
        <GalleryItem key={id}>
            <Image src={webformatURL} alt="" />
        </GalleryItem>
    );
};

