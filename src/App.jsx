import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import wp from "./assets/public.avif";
import NuggetsCard from "./components/nuggetsCard";
import ProductIntro from "./components/about";
import NewHero from "./components/nwHero";
import MyNav from "./components/nav";
import Tokenomics from "./components/tokenomics";
import Utilities from "./components/utils";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BrettSection from "./components/howTo";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Box
        backgroundImage={`url(${wp})`}
        backgroundRepeat="repeat-y"
        overflowX="hidden"
        alignContent={"center"}
        justifyContent={"center"}
        zIndex={0}
        position="relative"
        w="full"
        h="full"
        backgroundSize="contain"
      >
        <Image
          bgGradient="linear(to-b, #0244a5b3, transparent)"
          // src="https://imagedelivery.net/cwNlIhFkSHgM59lNYMgaeA/b555872f-5310-41eb-1198-23c70f77a900/public"
          backgroundSize="cover"
          backgroundPosition="center"
          backdropBlur={10}
          placeholder="blur"
          w="full"
          h="full"
          zIndex={0}
          quality={100}
          fit
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          position="absolute"
        />
        <MyNav />
        <NewHero />
        <ProductIntro />
        {/* <Tokenomics /> */}
        {/* <BrettSection /> */}
        <Utilities />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;
