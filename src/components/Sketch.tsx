import React, { useState } from 'react';
import { Image, GridItem } from '@chakra-ui/react'

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
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={src} alt={alt} />
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white py-2 px-4 text-center">
          {title}
        </div>
      )}
    </GridItem>
  );
};

export default Sketch;