import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { Box, Container, Spacer } from "@chakra-ui/layout";

function FAQ() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Container 
    minW={{ base: "full", md: "70%" }} 
    // border={"5px solid black"} 
    py={{ base: 120, md: 120 }}
    >
      <Heading
        textAlign="center"
        as="h2"
        size="4xl"
        fontWeight="bold"
        bgGradient="linear(to-r, yellow.300, orange.500, red.700)"
        bgClip="text"
      >
        FAQs
      </Heading>
      <br />
      <Accordion allowToggle
      color={isDark ? "gray.200" : "gray.500"}
      textAlign="left">
        <AccordionItem >
          <h2 >
            <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>
              <Box as="span" flex="1" textAlign="left">
                What is CardinalHacks?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
          CardinalHacks is a 24-hour hackathon organized by Saginaw Valley State University Cardinals. It is a fast-paced and highly energized event where participants come together to develop and showcase their technical skills, creativity and innovation. The event provides a platform for participants to work on real-world problems, learn from each other, and network with industry professionals. Teams have 24 hours to conceptualize, design, and build a project from start to finish. At the end of the event, participants present their projects to a panel of judges for a chance to win prizes. CardinalHacks is a unique opportunity for participants to showcase their abilities and gain valuable experience in a supportive and inclusive environment.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                What is Hackathon?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          A hackathon is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                What to expect at Hackathon
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                Who can apply?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                Do I need to know how to code to attend a Hackathon?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                How many people can be on a team?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A maximum of 4 individuals can be on a single team.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                Do you need to be a SVSU student to attend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                What can I learn from it?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                Is there going to be food provided?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left">
                What do I do after I apply?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ fontWeight: "bold" }}
            _expanded={{ fontWeight: "bold" }}>              <Box as="span" flex="1" textAlign="left" >
                I want to know more
              </Box>
              <AccordionIcon  />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            For additional information, feel free to reach out to Anthony Chippi (achippi@svsu.edu).
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default FAQ;
