import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay,ModalWindow } from "./Modal.styled";

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleBackdropClick = event => {
      if (event.currentTarget === event.target) {
        this.props.onClose();
        };
    };
    
    render() {

        let { src, alt } = this.props.image;

        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
              <ModalWindow>
                <img src={src} alt={alt} />
              </ModalWindow>
            </Overlay>,
            document.body
        )
    };
};