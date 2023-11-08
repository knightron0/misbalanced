import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from '@chakra-ui/react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from '@vercel/analytics/react';

import "~/styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
