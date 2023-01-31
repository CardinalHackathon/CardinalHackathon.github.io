import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import logo from "../Assets/logo.png";

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            {/* <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" /> */}
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">CardinalHacks</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Hackathon</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>What do you want to build today? 🗣 lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://pawan.live")
                    }>APPLY NOW</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='none'
                    backgroundColor="transparent" boxShadow="none"
                    boxSize="400px" src={logo}/>
            </Flex>

        </Stack>
        
    )
}

export default Header