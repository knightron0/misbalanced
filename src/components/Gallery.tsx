import { Grid } from '@chakra-ui/react';
import React from 'react';
import Sketch from './Sketch';

const sketchList = [
  {
    src: 'sketches/grid.png',
    alt: 'grid',
    title: "where's waldo?"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/glass.png',
    alt: 'stained glass',
    title: "stained glass"
  },
]

const Gallery: React.FC = () => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6} pr={20} pl={20}>
        {sketchList.map((sketch, i) => (
          <Sketch key={i} alt={sketch.alt} title={sketch.title} src={sketch.src}></Sketch>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;