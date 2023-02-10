import { ReactNode } from "react";
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
  VisuallyHidden,
  chakra,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { SiDevpost } from "react-icons/si";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Icon from "@chakra-ui/icon";
import logo from "../Assets/logo.png";
import About from "../components/About";
import { FaSun, FaMoon, FaDiscord, FaGithub } from "react-icons/fa";
import "@fontsource/hind-madurai";
import FAQ from "./FAQ";

const Links = ["About", "FAQ", "Social"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

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

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Box 
      boxShadow={"2xl"}
      px={4} 
      w="100%" 
      backgroundColor={isDark ? "#051014" : "#e5e5e5"}
      // p={4} 
      position="fixed" 
      top="0" 
      left="0" 
      right="0" 
      zIndex="1"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"} pl={{ base: isOpen ? "47%" : "47%", md: "180px" }} >
            <Menu >
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                // border={"5px solid white"} 

              >
                <Box as="img" boxSize="50px" src={logo} mr={3} />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <FAQ></FAQ>
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
              display={{ base: isOpen ? "none" : "none", md: "block" }}
              fontFamily="'Hind Madurai', sans-serif"
            >
              CardinalHacks
            </Heading>
          </Flex>

          <Flex alignItems={"center"}>

            <Box>

            <IconButton
                 position={"initial"}
                 size={"md"}
                 icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                 aria-label={"Open Menu"}
                 display={{ md: "none" }}
                 onClick={isOpen ? onClose : onOpen}
               />
            </Box>

            <HStack spacing={8} alignItems={"center"}>
              {/* <Box>Logo</Box> */}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
<Stack direction={'row'} mr={3}>
          <SocialButton label={'Devpost'} href={'#'}>
            <SiDevpost size="full" />
          </SocialButton>
          <SocialButton label={'Discord'} href={'#'}>
            <FaDiscord size="full"/>
          </SocialButton>
          <SocialButton label={'Github'} href={'#'}>
            <FaGithub size="full"/>
          </SocialButton>
        </Stack>
              </HStack>
            </HStack>

            <IconButton
                  ml={{ base: 2, md: 6 }}
                  icon={isDark ? <FaSun /> : <FaMoon />}
                  isRound="true"
                  onClick={toggleColorMode}
                ></IconButton>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            {/* <Stack as={"nav"} spacing={4}> */}
            <Stack direction={'column'} mr={3} align={"center"}>
              <Stack direction={'row'}>
          <SocialButton label={'Devpost'} href={'#'}> 
          <SiDevpost />
          
          </SocialButton>
          <Text alignSelf={"center"}>Devpost</Text>
          </Stack>

          <Stack direction={'row'}>
          <SocialButton label={'Discord'} href={'#'}> 
          <FaDiscord />
          
          </SocialButton>
          <Text alignSelf={"center"}>Discord</Text>
          </Stack>
          <Stack direction={'row'}>
          <SocialButton label={'Github'} href={'#'}> 
          <FaGithub />
          
          </SocialButton>
          <Text alignSelf={"center"}>GitHub</Text>
          </Stack>
        </Stack>
            {/* </Stack> */}
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
