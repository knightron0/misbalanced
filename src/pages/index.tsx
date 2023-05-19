import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Gallery from '../components/Gallery';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>misbalance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#000000] overflow-y-hidden overscroll-none">
        <Gallery />
      </main>
    </>
  );
};

export default Home;
