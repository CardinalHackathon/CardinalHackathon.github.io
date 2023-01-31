import {Spacer, Flex, Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import {FaSun, FaMoon} from 'react-icons/fa'

function App() {

const { colorMode, toggleColorMode } = useColorMode();
const isDark = colorMode == "dark";

  
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" 
          fontWeight={'semibold'} 
          color="cyan.400">CardinalHacks Hackathon
        </Heading>
    
        <Spacer></Spacer>
        <IconButton 
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />} 
            isRound="true" 
            onClick={toggleColorMode}>Apply
        </IconButton>
      </Flex>
    </VStack>
  );
}

export default App;
