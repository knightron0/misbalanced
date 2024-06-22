import { Grid } from '@chakra-ui/react';
import React from 'react';
import Sketch from './Sketch';

const sketchList = [
  {
    src: 'sketches/singapore.png',
    alt: 'singapore',
    link: '',
    title: "singapore"
  },
  {
    src: 'sketches/westlafayette.png',
    alt: 'west lafayette',
    link: '',
    title: "west lafayette"
  },
  {
    src: 'sketches/miamibeach.png',
    alt: 'miami beach',
    link: '',
    title: "miami beach"
  },
  {
    src: 'sketches/delhi.png',
    alt: 'delhi',
    link: '',
    title: "delhi"
  },
  {
    src: 'sketches/nyc.png',
    alt: 'nyc',
    link: '',
    title: "nyc"
  },
  {
    src: 'sketches/chicago.png',
    alt: 'chicago',
    link: '',
    title: "chicago"
  },
  {
    src: 'sketches/boston.png',
    alt: 'boston',
    link: '',
    title: "boston"
  },
  {
    src: 'sketches/bayarea.png',
    alt: 'bay area',
    link: '',
    title: "bay area"
  },
  {
    src: 'sketches/meteora.png',
    alt: 'meteora',
    link: '',
    title: "meteora"
  },
  {
    src: 'sketches/santorini.png',
    alt: 'santorini',
    link: '',
    title: "santorini"
  },
  {
    src: 'sketches/socialnetwork.png',
    alt: 'social network',
    link: '',
    title: "social network"
  },
  {
    src: 'sketches/disorder.png',
    alt: 'disorder',
    link: 'http://www.medienkunstnetz.de/works/schotter/',
    title: "disorder"
  },
  {
    src: 'sketches/glass.png',
    alt: 'stained glass',
    link: '',
    title: "stained glass"
  },
  {
    src: 'sketches/wave.png',
    alt: 'wave',
    link: '',
    title: "wave"
  },
  {
    src: 'sketches/grid.png',
    alt: 'grid',
    link: '',
    title: "where's waldo?"
  }
]

const Gallery: React.FC = () => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6} className='lg:pr-20 md:pr-16 pr-10 lg:pl-20 md:pl-16 pl-10'>
        {sketchList.map((sketch, i) => (
          <Sketch key={i} alt={sketch.alt} title={sketch.title} src={sketch.src} link={sketch.link}></Sketch>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;