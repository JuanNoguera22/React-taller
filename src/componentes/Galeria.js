import React from 'react';
import Image from './Imagenes';

function Galeria() {
    const images = [
        { src: 'https://wallpapercave.com/wp/wp12005386.jpg', alt: 'Imagen 1' },
        { src: 'https://images3.alphacoders.com/102/thumb-1920-1025036.jpg', alt: 'Imagen 2' },
        { src: 'https://images3.alphacoders.com/100/1006970.jpg', alt: 'Imagen 3' },
      ];
      return (
        <div>
          {images.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      );
}

export default Galeria;
