import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Utilities = () => {
  return (
    <Box py={24} position="relative" color="white" bg="#0244a5b3">
      <Box
        maxW="4xl"
        mx="auto"
        px={4}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={20}
      >
        <Heading
          fontSize={{ base: "4xl", lg: "6xl" }}
          lineHeight={{ base: "2rem", lg: "5rem" }}
          bgClip="text"
          textColor="white"
          pointerEvents="none"
          p={4}
          textAlign="center"
        >
          UTILITIES
        </Heading>
        <Flex flexDir="column" gap={8} w="full">
          <Flex
            bgGradient="linear(to-b, #0244a5b3, blue.400)"
            flexDir={{ base: "column", lg: "row" }}
            gap={8}
            alignItems="center"
            w="full"
            p={12}
            rounded="2xl"
            border="1px"
            borderColor="gray.600"
            backdropFilter="blur(10px)"
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              gap={4}
              w="full"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading fontSize={{ base: "3xl", lg: "4xl" }} color="white">
                Strong Partnerships:
              </Heading>
              <Text>
                BRETT has forged strategic partnerships with leading companies
                in the crypto space, which will help to ensure the project's
                long-term viability and growth
              </Text>
            </Flex>
          </Flex>
          <Flex
            bgGradient="linear(to-b, #0244a5b3, blue.400)"
            flexDir={{ base: "column", lg: "row" }}
            gap={8}
            alignItems="center"
            w="full"
            p={12}
            rounded="2xl"
            border="1px"
            borderColor="gray.600"
            backdropFilter="blur(10px)"
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              gap={4}
              w="full"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading fontSize={{ base: "3xl", lg: "4xl" }} color="white">
                Growing Ecosystem:
              </Heading>
              <Text>
                The Ton Chain's ecosystem is rapidly expanding, with numerous
                projects and applications being built on the platform. This
                growing ecosystem provides a strong foundation for BRETT's
                success, as it allows the platform to leverage the resources and
                expertise of other projects in the space. As the Ton Chain
                continues to grow, so too will the potential for BRETT to thrive
                and expand its offerings.
              </Text>
            </Flex>
          </Flex>
          <Flex
            bgGradient="linear(to-b, #0244a5b3, blue.400)"
            flexDir={{ base: "column", lg: "row" }}
            gap={8}
            alignItems="center"
            w="full"
            p={12}
            rounded="2xl"
            border="1px"
            borderColor="gray.600"
            backdropFilter="blur(10px)"
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              gap={4}
              w="full"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading fontSize={{ base: "3xl", lg: "4xl" }} color="white">
                Strong Community Support:
              </Heading>
              <Text>
                The Ton Chain and BRETT have garnered significant support from
                the crypto community, with many prominent figures expressing
                their bullish outlook on the project. This strong community
                backing provides a solid foundation for the project's growth and
                success, as it ensures that there is a dedicated user base to
                support and promote the memecoin and blockchain
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Utilities;
