import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Links = [
  { name: "ABOUT", path: "#" },
  { name: "TOKENOMICS", path: "#" },
  { name: "CONTACT", path: "#" },
  { name: "TELEGRAM", path: "https://t.me/BrettOnTonOfficial" },
  { name: "TWITTER", path: "https://twitter.com/Brettontonchain" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box bg={useColorModeValue("#fffff", "gray.900")} px={4} pos="relative">
      <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex alignItems={"center"}>
          <Text
            fontSize={{ base: "3xl", lg: "4xl" }}
            p={1}
            bg="#90cdf4"
            color={"white"}
            fontWeight="bold"
            textShadow="2px 2px 2px rgba(144, 205, 244 , 0.5)" // Assuming this is the desired text stroke effect
            bgGradient="linear(to-r, #0244a5b3, transparent)"
            textStyle={"stroke"}
            textDecor="transparent"
            pointerEvents="none"
            opacity={1}
            transform="none"
          >
            BRETT
          </Text>
        </Flex>
        <HStack spacing={8} alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            align={"start"}
            color="White"
          >
            {Links.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "#0244a5b3",
                }}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button>Buy on Kyberswap</Button> */}
            {/* <Link href="">
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "blue.500", color: "white" }}
              />
            </Link>

            <Link href="">
              <IconButton
                aria-label="Telegram"
                icon={<FaTelegram />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "blue.500", color: "white" }}
                ml={2}
              />
            </Link> */}
          </Flex>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
            <HStack justifyContent="center">
              <Link href="https://twitter.com/Brettontonchain">
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: "blue.500", color: "white" }}
                />
              </Link>

              <Link href="https://t.me/BrettOnTonOfficial">
                <IconButton
                  aria-label="Telegram"
                  icon={<FaTelegram />}
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: "blue.500", color: "white" }}
                />
              </Link>
            </HStack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
