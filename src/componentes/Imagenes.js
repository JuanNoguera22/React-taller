import React from 'react';

const Imagenes = ({ src, alt }) => {
    return (
      <img src={src} alt={alt} style={{ width: '200px', height: '200px', margin: '10px' }} />
    );
  };

export default Imagenes;
