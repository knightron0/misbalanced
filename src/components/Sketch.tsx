import React, { useState } from 'react';
import { GridItem, Link } from '@chakra-ui/react'

interface SketchProps {
    src: string;
    alt: string;
    title: string;
    link: string;
  }

const Sketch: React.FC<SketchProps> = ({ src, alt, title, link }) => {
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
        <div className="img-title">{title.toLowerCase()}</div> {link != "" && <Link href={link} color={'gray'} >(source)</Link>}
      </div>

    </GridItem>
  );
};

export default Sketch;