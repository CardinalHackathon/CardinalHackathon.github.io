import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, VStack, Heading, Spacer, Center } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Events from "./components/Events";
import Info from "./components/Info";


import { Button, ButtonGroup } from '@chakra-ui/react';
import logo from "./Assets/logo.png";
import { Skeleton, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
      <Box ml="170" as="img" boxSize="50px" src={logo} mr={3} />
         <Heading
           size="xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>CardinalHacks</Heading>


        <Spacer></Spacer>
        <Button color='white' bgGradient="linear(to-r, yellow.400, orange.500, red.600)">APPLY</Button>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>

      <Box textAlign={"center"} h='calc(100vh)'>
      <Header></Header>
      <ChevronDownIcon boxSize={20} h={80} color="cyan.500" />
      </Box>

      <Info></Info>
    
      <Spacer></Spacer>
             <Text fontSize="2xl" w={"75%"}>
                There are no restrictions on what you can build. 
                You can, for example, construct a Mobile App, Web App, 
                Windows Form, Game, and so on. There will be food and awards. 
                Participate in the annual 24-hour hackathon hosted by 
                Saginaw Valley State University for people who sense potential
                in a challenge and want to broaden their horizons.
            </Text>
            

      { <Social></Social> }

      <Spacer></Spacer>

      

      <Spacer></Spacer>
      <Flex
    mt="20px"
    overflow="scroll"
    sx={{
      "::-webkit-scrollbar": {
        display: "block",
      },
    }}
  >
      <Events></Events>
</Flex>
      <Profile></Profile>

      <Divider orientation='horizontal' />
            <FAQ></FAQ>
            <Divider orientation='horizontal' />

    </VStack>
  );
}

export default App;