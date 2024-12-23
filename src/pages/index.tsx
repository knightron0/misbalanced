import { type NextPage } from "next";
import Head from "next/head";
import Gallery from '../components/Gallery';
import { Text, Divider, Box, Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Oswald } from 'next/font/google'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const oswald = Oswald({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>misbalanced</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="min-h-screen bg-[#000000] overflow-y-hidden overscroll-none text-center">
        <Text fontSize={{ base: '5xl', md: '5xl', lg: '5xl', xl: '5xl'}} color='white' alignSelf='center' margin={10} marginBottom={0} textColor={'gray.300'} userSelect='none' className={oswald.className}>misbalanced</Text>
        <Text fontSize={{ base: 'md', md: 'md', xl: 'md'}}  alignSelf='center' margin={10} marginTop={3} marginBottom={7} textColor={'#B8B8B8'} userSelect='none' fontFamily='Avenir' fontWeight='medium'>generative sketches by sarthak</Text>
        <Box marginLeft={10} marginRight={10} marginBottom={10}>
          <Divider borderColor={'gray.600'} />
        </Box>
        <Gallery />
        <Box marginLeft={10} marginRight={10} marginTop={10}>
          <Divider borderColor={'gray.600'} />
        </Box>
        <Flex alignSelf='center' margin={10} justifyContent='center' gap={5}>
          <Link href="https://www.instagram.com/misbalanced_/">
            <FontAwesomeIcon icon={faInstagram} color="#989898"></FontAwesomeIcon>
          </Link>
          <Link href="https://twitter.com/msarthak29">
            <FontAwesomeIcon icon={faTwitter} color="#989898"></FontAwesomeIcon>
          </Link>
          <Link href='https://sarthakmangla.com/'>
            <FontAwesomeIcon icon={faGlobe} color="#989898"></FontAwesomeIcon>
          </Link>
        </Flex>
      </main>
    </>
  );
};

export default Home;
