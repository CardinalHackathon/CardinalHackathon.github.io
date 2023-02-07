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
    Spacer,
  } from "@chakra-ui/react";
  import logo from "../Assets/logo.png";
  import { useMediaQuery } from "@chakra-ui/media-query";
  
  function About() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  
    return (
      <Container maxW={"100%"} 
    //   border={"5px solid red"}
      >
        <Stack 
        // border={"5px solid black"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 120, md: 120 }}
        //   pt={"100"}

        //   pb={{ base: 100, md: 200 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
        //   border={"5px solid white"}

            direction={{ base: "column", md: "row" }}
            flex={1}
            // justify={"center"}
            align={"center"}
            // position={'relative'}
            w={"auto"}
          >
                        <Spacer></Spacer>

            {/* <Box
                border={"5px solid black"}
                //   position={'relative'}
                height={"auto"}
                width={"full"}
                overflow={"hidden"}
                
              > */}
            <Image
            // border={"5px solid red"}
              width="auto"
              height="15rem"
              src={logo}
            />
            {/* </Box> */}

            <Stack 
            // border={"5px solid black"}
              spacing={{ base: 5, md: 1 }}
              w={"50%"}
              Box width={["100%", "80%", "50%"]}
              px={["10px", "20px", "50px"]}
              textAlign="center"
            >
              <Heading fontWeight={600} fontFamily="'Hind Madurai', sans-serif" >
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
              <Text color={"gray.500"}  >
                There are no restrictions on what you can build. You can, for
                example, construct a Mobile App, Web App, Windows Form, Game, and
                so on. There will be food and awards. Participate in the annual
                24-hour hackathon hosted by Saginaw Valley State University for
                people who sense potential in a challenge and want to broaden
                their horizons.
              </Text>
            </Stack>
            <Spacer></Spacer>

          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export default About;
  