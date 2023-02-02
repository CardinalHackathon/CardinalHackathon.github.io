
import { HStack, Text, Flex, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';
import logo from "../Assets/logo.png";
import React from 'react'



function About() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} p={isNotSmallerScreen ? "32" : "0"}>
        <HStack justifyContent='center'>
            <Image alignSelf="center" borderRadius='none'
                    backgroundColor="transparent" boxShadow="none"
                    boxSize="300px" src={logo}/>

             <Text alignSelf='center' fontSize="2xl" w={"35%"}>
                <HStack justifyContent='center'>
                    <Text fontSize="5xl" fontWeight='semibold'>What is</Text>
                    <Text fontSize="5xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>CardinalHacks</Text>
                    <Text fontSize="5xl" fontWeight='semibold'>?</Text>
                </HStack>
                There are no restrictions on what you can build. 
                You can, for example, construct a Mobile App, Web App, 
                Windows Form, Game, and so on. There will be food and awards. 
                Participate in the annual 24-hour hackathon hosted by 
                Saginaw Valley State University for people who sense potential
                in a challenge and want to broaden their horizons.
            </Text>
        </HStack>
        </Flex>
    )
}

export default About