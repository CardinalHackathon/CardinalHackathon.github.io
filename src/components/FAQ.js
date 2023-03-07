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
                What should I expect at a Hackathon?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            During the duration of the competion, you will work together with your team to create the best piece of software within the alotted time period. After the completion of the competition judges will go around and judge your project based on usability, creativity, and completeness.
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
            Any currently enrolled high school or college student over the age of 18 is free to apply for the competition.
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
            A general understanding of programming is recommended but not required to compete.
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
            No, any student currently enrolled in highschool or college over the age of 18 can attend.
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
            Students can learn a vast number of different things from attending/competing in a hackathon, whether it be learning to program, expanding open their existing knowledge of programming, learning to work with a team, etc.
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
            At the moment, food will be provided but is subject to change.
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
            After you submit your application, you and your team are free to start thinking of ideas for projects you would like to complete during the hackathon. Please note that no work will be accepted that is done outside of the set competition time.
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
