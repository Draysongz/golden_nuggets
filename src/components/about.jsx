import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import nugget from "../assets/mainNuggets.png";
import bbrett from "../assets/1715323925464.gif";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import AboutVideo from "./aboutVid";
import abrett from "../assets/aboutBrett.svg";

export default function ProductIntro() {
  return (
    <Box bgGradient="linear(to-b, #0244a5b3, transparent)">
      {" "}
      <Stack
        p={{ base: 5, md: 5 }}
        m={{ base: "none", md: "6rem" }}
        width={"auto"}
        height="auto"
        align={"center"}
        justifyContent="center"
        rounded={"lg"}
        color={"white"}
        fontFamily="Londrina Solid"
        pos="relative"
      >
        <Flex color="white" fontWeight={800} align="center" justify="left">
          <Heading fontSize={"5xl"}>BRETT</Heading>
          <Divider />
          <Text letterSpacing={5}>THE PEPE'S BESTFRIEND</Text>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          px={{ base: 6, md: 3 }}
          py={10}
          bg="#0244a5b3"
          rounded="2xl"
          border="1px"
          borderColor="#0244a5b3.700"
          backdropFilter="blur(10px)"
          align={"center"}
          justify="center"
        >
          <Image
            w="100%"
            h="100%"
            maxW={{ base: "50%", md: "auto" }}
            objectFit="cover"
            src={abrett}
            rounded="md"
          />

          <Stack
            textAlign={{ base: "center", md: "left" }}
            direction="column"
            spacing={6}
            color="white"
          >
            <Heading
              as="h2"
              size="2xl"
              fontWeight="bold"
              maxW={{ base: "100%", md: "auto" }}
            >
              Who's Brett?!
            </Heading>
            <Text
              lineHeight="1.375"
              fontWeight={700}
              maxW={{ base: "100%", md: "auto" }}
              fontSize="2xl"
            >
              Brett is the legendary character from Matt Furie’s Boys' club
              comic. He is a dancer and loves video games. Now he is living on
              the TON blockchain as a Fan tribute. He has become blue mascot of
              the blue chain, TON.
            </Text>
            
           
          </Stack>
        </Stack>
        <Flex
          mx={5}
          gap={5}
          alignItems="center"
          justify={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <Button
            color="#0244a5b3"
            variant="solid"
            size="lg"
            rounded="full"
            boxShadow="md"
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.1)" }}
            rightIcon={<FaTelegram />}
          >
            TELEGRAM
          </Button>
          <Button
            color="#0244a5b3"
            variant="solid"
            size="lg"
            rounded="full"
            boxShadow="md"
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.1)" }}
            rightIcon={<FaTwitter />}
          >
            TWITTER
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}
