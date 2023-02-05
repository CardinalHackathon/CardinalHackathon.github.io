import React from 'react'
import { Flex, HStack, VStack, Text } from '@chakra-ui/layout'

function Schedule(){
    return(
        <Flex>
            <HStack spacing={10}>
                <VStack overflowY='scroll'>
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                </VStack>
            
                <VStack overflowY='scroll'>
                    <Text>March 19</Text>
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                    <Text>March 18</Text> 

                    <Text>March 18</Text> 
                    <Text>March 18</Text> 
                </VStack>
            </HStack>
        </Flex>
        
    )
}

export default Schedule;