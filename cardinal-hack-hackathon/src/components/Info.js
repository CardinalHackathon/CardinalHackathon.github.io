import { HStack, VStack, Box, Text, Spacer, Flex } from '@chakra-ui/layout'
import React from 'react'
import skill from '../Assets/skill.svg'
import location from '../Assets/location.svg'
import date from '../Assets/date.svg'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Grid, useColorMode, Container } from "@chakra-ui/react";

function Info(){

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { colorMode } = useColorMode();

    return(
        <Container maxW={"80%"} 
        py={{ base: 120, md: 120 }}
        >
        <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        textAlign={"center"}
      >
        <Box p={5}>
            <VStack>
                <Box as='img' src={skill}/>
                <Text fontSize="3xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>All Skill Levels</Text>
                <Text fontSize="l" fontWeight='semibold'>Beginner - Advanced</Text>
            </VStack>
        </Box>
        <Box p={5}>
            <VStack>
                <Box as='img' src={location}/>
                <Text fontSize="3xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>Saginaw Valley State University</Text>
                <Text fontSize="l" fontWeight='semibold'>Science East Building</Text>
            </VStack>
        </Box>
        <Box p={5}>
            <VStack>
                <Box as='img' src={date}/>
                <Text fontSize="3xl" fontWeight='semibold' bgGradient="linear(to-r, yellow.400, orange.500, red.600)" bgClip='text'>Mar 18-19, 2023</Text>
                <Text fontSize="l" fontWeight='semibold'>2 Days / 1 Night</Text>
            </VStack>
        </Box>
      </Grid>
    </Container>
    );
}

export default Info