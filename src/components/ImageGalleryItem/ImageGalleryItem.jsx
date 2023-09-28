import React from "react";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ id,webformatURL,largeImageURL, tags }) => {
    return (
        <GalleryItem>
            <Image src={webformatURL} alt={tags} largeImageURL={ largeImageURL} />
        </GalleryItem>
    );
};

