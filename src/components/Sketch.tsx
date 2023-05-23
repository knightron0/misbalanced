import React, { useState } from 'react';
import { Text, Image, GridItem, Flex } from '@chakra-ui/react'

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
      <Flex className="absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-70 transition ease-in-out opacity-0 hover:opacity-1 duration-100" justifyContent='center' alignItems='center'>
        <Text fontFamily='avenir' fontWeight='medium'>
          {title.toLowerCase()}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default Sketch;