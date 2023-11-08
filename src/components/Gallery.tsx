import { Grid } from '@chakra-ui/react';
import React from 'react';
import Sketch from './Sketch';

const sketchList = [
  {
    src: 'sketches/grid.png',
    alt: 'grid',
    link: '',
    title: "where's waldo?"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    link: '',
    title: "wave"
  },
  {
    src: 'sketches/glass.png',
    alt: 'stained glass',
    link: '',
    title: "stained glass"
  },
  {
    src: 'sketches/disorder.png',
    alt: 'disorder',
    link: 'http://www.medienkunstnetz.de/works/schotter/',
    title: "disorder"
  },
  {
    src: 'sketches/socialnetwork.png',
    alt: 'social network',
    link: '',
    title: "social network"
  },
]

const Gallery: React.FC = () => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6} pr={20} pl={20}>
        {sketchList.map((sketch, i) => (
          <Sketch key={i} alt={sketch.alt} title={sketch.title} src={sketch.src} link={sketch.link}></Sketch>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;