import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <Box bg="#0244a5b3" py={24} zIndex={10} position="relative" id="contact">
      <Box maxW="screen-xl" mx="auto" px={4}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          flexDir={{ base: "column", lg: "row" }}
          py={4}
        >
          <Heading
            as="p"
            fontSize={{ base: "4xl", lg: "6xl" }}
            lineHeight={{ base: "2rem", lg: "5rem" }}
            color="white"
            w="max-content"
            pointerEvents="none"
            whiteSpace="nowrap"
            textShadow="-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
          >
            contact us
          </Heading>
          <Box
            w="full"
            h="2px"
            bgGradient="linear(to-r, white, white)"
            display={{ base: "none", lg: "block" }}
          />
          <Text
            tracking="0.5rem"
            fontWeight="bold"
            w="max-content"
            whiteSpace="nowrap"
          >
            CONNECT WITH BRETT
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: 4, lg: 16 }}
          p={{ base: 4, lg: 12 }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Flex
            gap={{ base: 4, lg: 4 }}
            flexDir={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Link href="mailto:contact@basedbrett.com" isExternal>
              <Text
                textColor={"White"}
                fontWeight="semibold"
                underline
                _hover={{ color: "gray.400" }}
                transition="all 0.3s ease-in-out"
                fontSize={{ base: "3xl", md: "5xl" }}
                textShadow="-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
              >
                contact@basedbrett.com
              </Text>
            </Link>
          </Flex>
          <Box
            maxW={{ base: "none", lg: "lg" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Flex gap={4} fontSize="6xl" color="white">
              <Link href="https://twitter.com/Brettontonchain" isExternal>
                <FaTwitter className="hover:text-gray-400 cursor-pointer transition-all ease-in-out duration-300" />
              </Link>
              <Link href="https://t.me/BrettOnTonOfficial" isExternal>
                <FaTelegram className="hover:text-gray-400 cursor-pointer transition-all ease-in-out duration-300" />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
