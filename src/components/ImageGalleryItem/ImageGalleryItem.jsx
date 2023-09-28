import React from "react";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags, onClick }) => {
    return (
    <GalleryItem>
            <Image src={webformatURL} alt={tags} id={ largeImageURL} onClick={onClick}/>
        </GalleryItem>
    );
};

