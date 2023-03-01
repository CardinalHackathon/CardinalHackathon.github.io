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
          pt={{ base: "100px", md: "200px" }}
          pb={{ base: "0", md: "100px" }}

          //   pt={"100"}

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
              CardinalHacks is a 24-hour hackathon organized by Saginaw Valley State University Cardinals. It is a fast-paced and highly energized event where participants come together to develop and showcase their technical skills, creativity and innovation. The event provides a platform for participants to work on real-world problems, learn from each other, and network with industry professionals. Teams have 24 hours to conceptualize, design, and build a project from start to finish. At the end of the event, participants present their projects to a panel of judges for a chance to win prizes. CardinalHacks is a unique opportunity for participants to showcase their abilities and gain valuable experience in a supportive and inclusive environment.
              </Text>
            </Stack>
            <Spacer></Spacer>

          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export default About;
  