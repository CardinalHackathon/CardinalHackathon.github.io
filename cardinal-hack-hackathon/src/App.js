import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, VStack, Heading, Spacer, Center, HStack } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaDiscord, FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Events from "./components/Events";
import Info from "./components/Info";
import About from "./components/About";
import Schedule from './components/Schedule';


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
        <HStack spacing="8">
            <IconButton as={FaGithub} boxSize="35" isRound='true' onClick={() => window.open("https://github.com/AJChippi")}/>
            <IconButton as={FaDiscord} boxSize="35" isRound='true' onClick={() => window.open("https://discord.gg/CD3m9Xr5QB")}/>
            <IconButton as={SiDevpost} boxSize="35" isRound='true'  onClick={() => window.open("")}/>
            <Button color='white' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" onClick={() =>
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfwP11jDXznV2UUlgYNeZ5zARWz93XUiLMkvypkkgqYmBO7tA/viewform?usp=sf_link")
                    }>APPLY</Button>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </HStack>
        
      </Flex>

      <Box textAlign={"center"} h='calc(100vh)'>
      <Header></Header>
      <ChevronDownIcon boxSize={20} h={80} color="orange.500" />
      </Box>

      <Info></Info>
    
      <Spacer></Spacer>
      <About></About>
            

      {/* { <Social></Social> } */}

      <Spacer></Spacer>

      

      <Spacer></Spacer>

      {/* <Schedule></Schedule> */}
      {/* <Flex
    mt="20px"
    overflow="scroll"
    sx={{
      "::-webkit-scrollbar": {
        display: "block",
      },
    }}
  >
       <Events></Events> 
</Flex> */}
      {/* <Profile></Profile> */}

      <Divider orientation='horizontal' />
            <FAQ></FAQ>
            <Divider orientation='horizontal' />

    </VStack>
  );
}

export default App;