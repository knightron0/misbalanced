import { Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
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
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
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
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    title: "wave"
  }
]

const Gallery: React.FC = () => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6} p={20}>
        {sketchList.map(sketch => (
          <Sketch alt={sketch.alt} title={sketch.title} src={sketch.src}></Sketch>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;