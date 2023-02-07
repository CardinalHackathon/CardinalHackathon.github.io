import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { Box, Container, Spacer } from "@chakra-ui/layout";

function FAQ() {
  const isMobile = useMediaQuery("(max-width: 767px)");

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
      color={"gray.300"} 
      textAlign="left">
        <AccordionItem >
          <h2>
            <AccordionButton 
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>
              <Box as="span" flex="1" textAlign="left">
                What is CardinalHacks
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
          <AccordionButton 
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
                What is Hackathon
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
                Do I have to know how to code to attend Hackathon?
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
                How many people can be in a team?
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
                Is it SVSU students only?
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
                Is there gonna be any food?
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left">
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
            _hover={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}
            _expanded={{ bgClip:"text", bgGradient:"linear(to-r, yellow.300, orange.500, red.700)" }}>              <Box as="span" flex="1" textAlign="left" >
                I want to know more
              </Box>
              <AccordionIcon  />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default FAQ;
