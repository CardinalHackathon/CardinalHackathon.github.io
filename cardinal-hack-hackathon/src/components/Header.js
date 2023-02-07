import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import logo from "../Assets/logo.png";
import { FaDiscord } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import "@fontsource/contrail-one"

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack 
    w="100%" 
    h="100%" 
    // border={"5px solid white"}
    justifyContent={"center"}
    >
      {/* <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" /> */}
      <Flex 
        // border={"5px solid red"}
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="center">
          <Text
            fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
            fontWeight="semibold"
            textColor={"#e5e5e5"}
          >
            CardinalHacks
          </Text>
          <Text
            fontSize={{ base: "6xl", md: "6xl", lg: "9xl" }}
            fontFamily="Contrail One"
            fontWeight="semibold"
            bgGradient="linear(to-r, yellow.300, orange.500, red.700)"
            bgClip="text"
          >
            Hackathon
          </Text>
          <Text
            Box
            width={["100%", "80%", "60%"]}
            px={["10px", "20px", "30px"]}
            color={isDark ? "gray.200" : "gray.500"}
          >
            What do you want to build today? 🗣
          </Text>
          <Text
            Box
            width={["100%", "80%", "60%"]}
            px={["10px", "20px", "30px"]}
            color={isDark ? "gray.200" : "gray.500"}
          >
            There are no restrictions on what you can build. You can, for
            example, construct a Mobile App, Web App, Windows Form, Game, and so
            on. There will be food and awards. Participate in the annual 24-hour
            hackathon hosted by Saginaw Valley State University for people who
            sense potential in a challenge and want to broaden their horizons.
          </Text>
          <Button
            mt={8}
            size="lg"
            bgGradient="linear(to-r, yellow.400, orange.500, red.600)"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfwP11jDXznV2UUlgYNeZ5zARWz93XUiLMkvypkkgqYmBO7tA/viewform?usp=sf_link"
              )
            }
          >
            APPLY NOW
          </Button>
        </Box>
        {/* <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='none'
                    backgroundColor="transparent" boxShadow="none"
                    boxSize="400px" src={logo}/> */}
      </Flex>
    </Stack>
  );
}

export default Header;
