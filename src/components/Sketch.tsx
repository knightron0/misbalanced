import React, { useState } from 'react';
import { GridItem } from '@chakra-ui/react'

interface SketchProps {
    src: string;
    alt: string;
    title: string;
  }

const Sketch: React.FC<SketchProps> = ({ src, alt, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <GridItem
      className="gallery-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image">
        <img className="image-img select-none" src={src} alt={alt}></img>
      </div>
      <div className="img-overlay">
        <div className="img-title">{title.toLowerCase()}</div>
      </div>

    </GridItem>
  );
};

export default Sketch;