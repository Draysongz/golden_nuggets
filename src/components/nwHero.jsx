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
import bbrett from "../assets/1715323925464.gif";

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
        position="relative"
      >
        <Flex m={10} flexDir={{ base: "column", md: "row" }}>
          <Image src={bbrett} w="100%" />
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
            <Text
              fontFamily="primary"
              fontSize="2xl"
              letterSpacing="0.5rem"
              textAlign={{ base: "center", lg: "left" }}
              opacity={1}
              transform="none"
            >
              PEPE'S best friend on TON
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
          one of cryptos most significant cultural icons and the mascot of TON
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
                Buy on Stonfi
              </Button>
               <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                Buy on Tonkeeper
              </Button>
              <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                Dexton
              </Button>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
