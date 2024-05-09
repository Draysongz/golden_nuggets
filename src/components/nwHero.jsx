import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import mainNugs from "../assets/mainNuggets.png";

export default function NewHero() {
  return (
    <>
      <Stack
        w={"full"}
        h="auto"
        p={10}
        backdropBlur={2}
        rounded="2xl"
        align={"center"}
        justify={"center"}
      >
        <Flex m={10} flexDir={{ base: "column", md: "row" }}>
          <Image src={mainNugs} w="100%" />
          <Box
            display="flex"
            flexDirection="column"
            color="white"
            width="full"
            lg="50%"
            alignItems={{ base: "center", lg: "start" }}
          >
            <Text
              fontWeight="semibold"
              letterSpacing="0.5rem"
              opacity={1}
              transform="none"
            >
              INTRODUCING
            </Text>
            <Text
              fontFamily="monospace"
              fontSize={{ base: "5xl", lg: "9xl" }}
              bgGradient="linear(to-r, blue.500, transparent)"
              textStroke="white"
              pointerEvents="none"
              opacity={1}
              transform="none"
            >
              BRETT
            </Text>
            <Text
              fontFamily="primary"
              fontSize="2xl"
              letterSpacing="0.5rem"
              textAlign={{ base: "center", lg: "left" }}
              opacity={1}
              transform="none"
            >
              PEPE'S best friend on BASE
            </Text>
          </Box>
        </Flex>

        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          letterSpacing="0.5rem"
          textAlign="center"
          fontWeight={700}
          opacity={1}
          transform="none"
          textColor={"White"}
        >
          one of cryptos most significant cultural icons and the mascot of BASE
          chain
        </Text>
        <Divider mb={5} />
        <Stack align={"center"} justify="center" gap={10}>
          <Button
            leftIcon={<CopyIcon />}
            variant="outline"
            color="white"
            _hover={{ transform: "scale(1.1)" }}
            rounded="2xl"
          >
            0x532f27101965dd16442E59d40670FaF5eBB142E4
          </Button>
          <Flex>
            <ButtonGroup
              gap={5}
              flexDir={{ base: "column", md: "row" }}
              rounded="full"
            >
              <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                Buy on Kyberswap
              </Button>
              <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                Buy on OKX
              </Button>
              <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                Dextools Chart
              </Button>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}