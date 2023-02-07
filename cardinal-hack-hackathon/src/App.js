import React from "react";
import "@fontsource/hind-madurai";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Spacer,
  Center,
  HStack
} from "@chakra-ui/layout";
import { FaSun, FaMoon, FaDiscord, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

// Custom components
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Info from "./components/Info";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";

// Chakra UI components
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "./Assets/logo.png";
import { Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false
  });
  const theme = useTheme();

  return (

    <Flex
      fontFamily="'Hind Madurai', sans-serif"
      backgroundColor="#040D10"
      flexDirection="column"
      textAlign="center"
      minH="calc(100vh)"
    >
      <VStack alignItems="center" justifyContent="center">
        <Navbar />
        <Flex
          flexDirection="column"
          textAlign="center"
          h="calc(90vh)"
        >
          <Header />
          <Spacer />
          <ChevronDownIcon
            alignSelf="center"
            boxSize={20}
            h="min"
            color="orange.500"
          />
        </Flex>
        <Flex flexDirection="column" textAlign="center">
          <Info />
          <About />
        </Flex>
        <FAQ />
      </VStack>
      <Spacer />
      <Footer />
    </Flex>
  );
}

export default App;
