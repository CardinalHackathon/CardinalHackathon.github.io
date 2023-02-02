import { HStack, VStack, Box, Text, Spacer, Flex } from '@chakra-ui/layout'
import React from 'react'
import skill from '../Assets/skill.svg'
import location from '../Assets/location.svg'
import date from '../Assets/date.svg'
import { useMediaQuery } from '@chakra-ui/media-query';

function Info(){

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
        <Flex direction={isNotSmallerScreen ? "row" : "column"} p={isNotSmallerScreen ? "32" : "0"} justifyContent='center'>
        <HStack spacing={40}>
            <VStack>
                <Box as='img' src={skill}/>
                <Text fontSize="3xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>All Skill Levels</Text>
                <Text fontSize="l" fontWeight='semibold'>Beginner - Advanced</Text>
            </VStack>
            
            <VStack>
                <Box as='img' src={location}/>
                <Text fontSize="3xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>Saginaw Valley State University</Text>
                <Text fontSize="l" fontWeight='semibold'>Science East Building</Text>
            </VStack>
            
            <VStack>
                <Box as='img' src={date}/>
                <Text fontSize="3xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>Mar 18-19, 2023</Text>
                <Text fontSize="l" fontWeight='semibold'>2 Days / 1 Night</Text>
            </VStack>
            <Spacer></Spacer>
        </HStack>
        <Spacer></Spacer>
        </Flex>
    )
}

export default Info