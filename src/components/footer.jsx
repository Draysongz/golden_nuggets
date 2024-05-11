import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box position="relative" py={5} bg="#0244a5b3">
      <Box maxW="screen-xl" mx="auto" flexDir="column" gap={4}>
        <Flex alignItems="center" justifyContent="center" py={5}>
          <Text
            fontSize="8xl"
            fontWeight={600}
            textAlign="center"
            color="white"
            w="max-content"
            // textColor="transparent"
            pointerEvents="none"
            textShadow="-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000"
          >
            BRETT ON TON
          </Text>
        </Flex>
        <Flex justifyContent="center" w="full" py={4}>
          <Text color="white" fontWeight={700}>
            Copyright © 2024. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
