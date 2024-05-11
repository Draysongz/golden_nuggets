import {
  Box,
  AspectRatio,
  Flex,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import hbrett from "../assets/howBrett.svg";

const BrettSection = () => {
  return (
    <Box bg="#0244a5b3" color="white" position="relative" w="full" h="auto">
      <Box position="absolute" zIndex={10} opacity={1} w="full" h="100vh" />
      <Flex
        maxW="6xl"
        mx="auto"
        p={4}
        flexDir="column"
        gap={8}
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={20}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          justify="center"
          fontWeight="bold"
          gap={4}
          translateY="7rem"
          zIndex={50}
        >
          <Flex flexDir="column" alignItems="center" opacity={1}>
            <Text letterSpacing="0.5rem">PEPE'S</Text>
            <Text letterSpacing="0.5rem">BESTFRIEND</Text>
          </Flex>
          <Link href="#">
            <Box
              bgGradient="linear(to-b, gray, black)"
              p={6}
              rounded="full"
              border="1px solid"
              borderColor="rgba(204, 204, 204, 0.7)"
              opacity={1}
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Box
                bgGradient="linear(to-tr, #0244a5b3, #0244a5b3)"
                p={4}
                rounded="full"
                opacity={1}
              >
                <Box
                  rounded="full"
                  w="40"
                  h="40"
                  justifyContent={"center"}
                  alignContent="center"
                >
                  <Image
                    w="100%"
                    h="100%"
                    maxW={{ base: "auto", md: "auto" }}
                    objectFit="cover"
                    src={hbrett}
                    rounded="md"
                  />
                </Box>
              </Box>
            </Box>
          </Link>
        </Flex>
        <Box
          bg="#0244a5b3"
          bgGradient="linear(to-t, rgba(144, 205, 244 , 0.5), rgba(0, 0, 0, 0.2))"
          flexDir="column"
          gap={8}
          alignItems="center"
          justifyContent="center"
          w="full"
          pt={24}
          pb={12}
          rounded="2xl"
          border="1px solid"
          borderColor="rgba(204, 204, 204, 0.7)"
          position="relative"
          overflow="hidden"
          backdropFilter="blur(16px)"
          opacity={1}
        >
          <Flex
            flexDir="column"
            alignItems="center"
            fontSize={{ base: "6xl", lg: "9xl" }}
            lineHeight={{ base: "3rem", lg: "5rem" }}
          >
            <Text
              fontSize={{ base: "5xl", lg: "9xl" }}
              p={1}
              bg="#90cdf4"
              fontWeight="bold"
              textShadow="5px 5px 5px rgba(144, 205, 244 , 0.5)" // Assuming this is the desired text stroke effect
              bgGradient="linear(to-r, blue.500, transparent)"
              textStyle={"stroke"}
              textDecor="transparent"
              pointerEvents="none"
              opacity={1}
              transform="none"
            >
              BRETT
            </Text>
          </Flex>
          <Flex
            p={10}
            gap={{ base: 3, md: 5 }}
            flexDir={{ base: "column", md: "row" }}
            w="full"
          >
            <Box w="full">
              <AspectRatio ratio={16 / 9}>
                <Box position="relative" w="full" h="full" objectFit="cover">
                  <iframe
                    src="https://iframe.cloudflarestream.com/023a54329fa9c24ef9fc6dab1dd8b428?preload=metadata"
                    title="Video Player"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </AspectRatio>
              <Text textAlign="center" fontSize="xl">
                How to buy on Ton Mainnet
              </Text>
            </Box>

          </Flex>
          <Flex gap={4} opacity={1} align="center" justify="center">
            <Link
              href="https://kyberswap.com/swap/base/eth-to-brett"
              isExternal
            >
              <Button
                px={4}
                py={3}
                border="1px solid"
                borderColor="rgba(204, 204, 204, 0.7)"
                rounded="full"
                bgGradient="linear(to-tr, yellow.400, yellow.300)"
                gap={3}
                alignItems="center"
                fontWeight="semibold"
                _hover={{
                  scale: "1.05",
                  bgGradient:
                    "linear(to-tr, rgba(255, 217, 0, 0.2), rgba(204, 204, 204, 1))",
                }}
                transition="all 0.3s ease-in-out"
              >
                <Text>Buy Now</Text>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </Button>
            </Link>
            <Link
              href="https://www.dextools.io/app/en/base/pair-explorer/0x404e927b203375779a6abd52a2049ce0adf6609b?t=1708765825026"
              isExternal
            >
              <Button
                px={4}
                py={3}
                border="1px solid"
                borderColor="rgba(204, 204, 204, 0.7)"
                rounded="full"
                bgGradient="linear(to-tr, rgba(255, 217, 0, 0.3), rgba(204, 204, 204, 0.3))"
                fontWeight="semibold"
                _hover={{
                  scale: "1.05",
                  bgGradient:
                    "linear(to-tr, rgba(255, 217, 0, 0.4), rgba(204, 204, 204, 0.4))",
                }}
                transition="all 0.3s ease-in-out"
              >
                See Charts
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default BrettSection;
