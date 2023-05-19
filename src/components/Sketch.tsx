import React, { useState } from 'react';
import { Text, Image, GridItem } from '@chakra-ui/react'

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
        <Text className="absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75 text-white text-center" fontFamily='avenir' fontWeight='medium'>
          {title.toLowerCase()}
        </Text>
      )}
    </GridItem>
  );
};

export default Sketch;