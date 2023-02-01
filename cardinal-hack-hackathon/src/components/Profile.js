import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import {  VStack, Spacer } from "@chakra-ui/layout";
import { Container } from '@chakra-ui/react'

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Container centerContent>

            
            {/* <Text fontSize="2xl" >
                There are no restrictions on what you can build. 
                You can, for example, construct a Mobile App, Web App, 
                Windows Forum, Game, and so on. There will be food and awards. 
                Participate in the annual 24-hour hackathon hosted by 
                Saginaw Valley State University for people who sense potential
                 in a challenge and want to broaden their horizons.
            </Text> */}
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
            // maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
            >
            <Box alignSelf="center" px="40" py="200">
            <Text fontSize="3xl" color="gray.400">March</Text>
                <Heading fontWeight="extrabold" color="cyan.500" fontSize="9xl">
                    18-19
                </Heading>
            </Box>
            <Spacer />
            <Box alignSelf="flex-left" px="32" py="200">

                            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Android Apps
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Flutter Apps
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Web Apps
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
        </Container>
    )
    
}



export default Profile