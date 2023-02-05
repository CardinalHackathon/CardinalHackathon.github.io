import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
// import {
//   Router,
//   Route,
//   Switch,
//   useLocation,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Icon from "@chakra-ui/icon";
import logo from "../Assets/logo.png";
import About from "../components/About";
import { FaSun, FaMoon, FaDiscord, FaGithub } from "react-icons/fa";


const Links = ['About', 'FAQ', 'Social'];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);



function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Box px={4} w="100%" >
        
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}  >
        <Flex alignItems={'center'} >
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
<Box as="img" boxSize="50px" src={logo} mr={3} />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Heading
          size="xl"
          fontWeight="semibold"
          bgGradient="linear(to-r, yellow.400, orange.500, red.600)"
          bgClip="text"
        >
          CardinalHacks
        </Heading>

          </Flex>












          <Flex alignItems={'center'}>
          <IconButton
            position={"initial"}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
                          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
            </HStack>

          </HStack>
          </Flex>






        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Navbar;
