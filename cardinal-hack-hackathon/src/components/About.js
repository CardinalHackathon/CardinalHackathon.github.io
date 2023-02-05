import {
    Container,
    Center,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    HStack,
  } from "@chakra-ui/react";
  import logo from "../Assets/logo.png";
  import { useMediaQuery } from "@chakra-ui/media-query";
  
  function About() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  
    return (
      <Container maxW={"100%"}>
        <Stack
        
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            flex={1}
            justify={"center"}
            align={"center"}
            // position={'relative'}
            w={"auto"}
          >
            {/* <Box
                border={"5px solid black"}
                //   position={'relative'}
                height={"auto"}
                width={"full"}
                overflow={"hidden"}
                
              > */}
            <Image
              width="auto"
              height="15rem"
              src={logo}
            />
            {/* </Box> */}
  
            <Stack 
              spacing={{ base: 5, md: 1 }}
              w={"50%"}
              Box width={["100%", "80%", "60%"]}
              px={["10px", "20px", "150px"]}
              textAlign="center"
            >
              <Heading fontWeight={600} >
                <Center>
                  <Box mt={isNotSmallerScreen ? "0" : 16}>
                    <Text
                      as="span"
                      textAlign="center"
                      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                      fontWeight="semibold"
                    >
                      What is{" "}
                    </Text>
                    <Text
                      as="span"
                      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                      fontWeight="semibold"
                      bgGradient="linear(to-r, yellow.400, orange.500, red.600)"
                      bgClip="text"
                    >
                      CardinalHacks
                    </Text>
                    <Text
                      as="span"
                      textAlign="center"
                      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                      fontWeight="semibold"
                    >
                      {" "}
                      ?
                    </Text>
                  </Box>
                </Center>
              </Heading>
              <Text color={"gray.500"} >
                There are no restrictions on what you can build. You can, for
                example, construct a Mobile App, Web App, Windows Form, Game, and
                so on. There will be food and awards. Participate in the annual
                24-hour hackathon hosted by Saginaw Valley State University for
                people who sense potential in a challenge and want to broaden
                their horizons.
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export default About;
  