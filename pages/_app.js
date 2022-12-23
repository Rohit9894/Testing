import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import Socket from "../Components/socket/socket";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Socket />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
