import {
  Box,
  chakra,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useColorMode
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import { ReactNode } from 'react';
import logo from "../Assets/logo.png";
import { SiDevpost } from "react-icons/si";

const Logo = (props) => { 
  return (
    <HStack >    
      <Box as="img" boxSize="30px" src={logo} mr={3} />
    <Heading
      size="l"
      fontWeight="semibold"
      bgGradient="linear(to-r, yellow.400, orange.500, red.600)"
      bgClip="text"
    >
      CardinalHacks
    </Heading>
    </HStack>

  );
};

const SocialButton = ({
  children,
  label,
  href
}) => {
  return (
    <chakra.button 
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
    backgroundColor={isDark ? "#051014" : "#e5e5e5"}
    boxShadow={"dark-lg"}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© 2023 CardinalHacks. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <SiDevpost />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaDiscord />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}