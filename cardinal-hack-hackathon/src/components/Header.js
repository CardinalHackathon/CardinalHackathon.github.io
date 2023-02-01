import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import logo from "../Assets/logo.png";
import {FaDiscord} from 'react-icons/fa';
import Icon from '@chakra-ui/icon';


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
                alignSelf="center">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='center'>
                    <Text fontSize="3xl" fontWeight="semibold" >CardinalHacks</Text>
                    <Text fontSize="9xl" fontWeight="bold" bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text' >Hackathon</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>What do you want to build today? 🗣</Text>
                    <Text w="75%" color={isDark ? "gray.200" : "gray.500"}>
                There are no restrictions on what you can build. 
                You can, for example, construct a Mobile App, Web App, 
                Windows Form, Game, and so on. There will be food and awards. 
                Participate in the annual 24-hour hackathon hosted by 
                Saginaw Valley State University for people who sense potential
                in a challenge and want to broaden their horizons.
            </Text>
                    <Button mt={8} size='lg' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" onClick={() =>
                        window.open("https://svsu.edu")
                    }>APPLY NOW</Button>
                    
                    
                </Box>
                {/* <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='none'
                    backgroundColor="transparent" boxShadow="none"
                    boxSize="400px" src={logo}/> */}
            </Flex>

        </Stack>
        
    )
}


export default Header