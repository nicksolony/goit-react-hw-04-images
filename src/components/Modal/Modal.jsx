import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay,ModalWindow } from "./Modal.styled";

export const Modal= ({image, onClose, showModal}) => {


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (!showModal) {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal]);
    

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose();
        };
    };

    const handleBackdropClick = (event) => {
      if (event.currentTarget === event.target) {
        onClose();
        };
    };
    
    

        let { src, alt } = image;

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
              <ModalWindow>
                <img src={src} alt={alt} />
              </ModalWindow>
            </Overlay>,
            document.body
        )
    };
