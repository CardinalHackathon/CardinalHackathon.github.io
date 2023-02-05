import React from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Spacer,
  Center,
  HStack,
} from "@chakra-ui/layout";
import { FaSun, FaMoon, FaDiscord, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Events from "./components/Events";
import Info from "./components/Info";
import Footer from "./components/Footer";

import About from "./components/About";
import Navbar from "./components/Navbar";
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "./Assets/logo.png";
import { Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

// ssr-friendly media query with fallback
const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
  ssr: true,
  fallback: false, // return false on the server, and re-evaluate on the client side
})
const theme = useTheme()

  return (
    
    <div>
    <VStack minH="100vh" alignItems="center" justifyContent="center">
    <Navbar ></Navbar>

      {/* <Flex w="full">
        <Box as="img" boxSize="50px" src={logo} mr={3} />
        <Heading
          size="xl"
          fontWeight="semibold"
          bgGradient="linear(to-r, yellow.400, orange.500, red.600)"
          bgClip="text"
        >
          CardinalHacks
        </Heading>

        <Spacer></Spacer>
        <HStack spacing="8">
          <IconButton
            as={FaGithub}
            boxSize="35"
            isRound="true"
            onClick={() => window.open("https://github.com/AJChippi")}
          />
          <IconButton
            as={FaDiscord}
            boxSize="35"
            isRound="true"
            onClick={() => window.open("https://discord.gg/CD3m9Xr5QB")}
          />
          <IconButton
            as={SiDevpost}
            boxSize="35"
            isRound="true"
            onClick={() => window.open("")}
          />
          <Button
            color="white"
            bgGradient="linear(to-r, yellow.400, orange.500, red.600)"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfwP11jDXznV2UUlgYNeZ5zARWz93XUiLMkvypkkgqYmBO7tA/viewform?usp=sf_link"
              )
            }
          >
            APPLY
          </Button>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </HStack>
      </Flex> */}




      <Box textAlign={"center"} h="calc(100vh)">
        <Header></Header>
        {/* <ChevronDownIcon boxSize={20} h={80} color="orange.500" /> */}
      </Box>

      <Box h="calc(100vh)">
      {/* <Info></Info> */}

      <About></About>
      {/* <Box textAlign={"center"} h="calc(100vh)">

      <FAQ></FAQ>
</Box> */}


      </Box>
      
      {/* <Box h="calc(100vh)">
      </Box> */}

<Footer></Footer>

    </VStack>


    </div>
  );
}

export default App;
