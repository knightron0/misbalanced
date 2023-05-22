import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Gallery from '../components/Gallery';
import { Text, Divider, Box, Flex } from '@chakra-ui/react'
import { Oswald } from 'next/font/google'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const oswald = Oswald({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>misbalance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#000000] overflow-y-hidden overscroll-none text-center">
        <Text fontSize='5xl' color='white' alignSelf='center' margin={10} marginBottom={0} textColor={'gray.300'} userSelect='none' className={oswald.className}>misbalance</Text>
        <Text fontSize='md' alignSelf='center' margin={10} marginTop={3} marginBottom={7} textColor={'gray.500'} userSelect='none' fontFamily='avenir' fontWeight='bold'>generative sketches by sarthak</Text>
        <Box marginLeft={10} marginRight={10} marginBottom={10}>
          <Divider borderColor={'gray.600'} />
        </Box>
        <Gallery />
        <Box marginLeft={10} marginRight={10} marginTop={10}>
          <Divider borderColor={'gray.600'} />
        </Box>
        <Flex alignSelf='center' margin={10} justifyContent='center' gap={5}>
          <Link href="https://www.instagram.com/misbalance_/">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </Link>
          <Link href="https://twitter.com/home">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </Link>
          <Link href='https://sarthakmangla.com/'>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          </Link>
        </Flex>
      </main>
    </>
  );
};

export default Home;
