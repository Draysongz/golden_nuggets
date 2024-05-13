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
  Link,
} from "@chakra-ui/react";
import mainNugs from "../assets/mainNuggets.png";
import bbrett from "../assets/1715323925464.gif";

export default function NewHero() {
  const handleCopy = (value)=>{
    navigator.clipboard.writeText(value)
  }
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
            value={'EQCvS3PxE6ZJNplq5xWt2_lm6Lio9JCJBup6PWky8FVMnEHY'}
            onClick={(e)=> handleCopy(e.target.value)}
          >
            EQCvS3PxE6ZJNplq5xWt2_lm6Lio9JCJBup6PWky8FVMnEHY
          </Button>

          <Text  color="white" >Supply: 1,000,0000,000</Text>
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
                <Link href="https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQCvS3PxE6ZJNplq5xWt2_lm6Lio9JCJBup6PWky8FVMnEHY" isExternal>
                Buy on Stonfi
                </Link>
              </Button>
               <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                <Link href='https://www.geckoterminal.com/ton/pools/EQDP9NpmY87q8Fn9RM75gQbH-nZVKmF21p62E1E7gmBRQ3Xi' isExternal>

            
                Geckoterminal
                </Link>
              </Button>
              <Button
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                rounded="2xl"
              >
                <Link href='https://app.thedexton.com/pair-explorer/EQDP9NpmY87q8Fn9RM75gQbH-nZVKmF21p62E1E7gmBRQ3Xi' isExternal>
                Dexton
                </Link>
              </Button>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
