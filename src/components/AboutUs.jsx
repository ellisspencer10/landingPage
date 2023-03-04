import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import React from "react";
import { GoGraph } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [bg, bgHover] = useToken("colors", ["white", "pink"]);
  const color = useColorModeValue("pink", "white");

  const [bg2, bgHover2] = useToken("colors", ["white", "teal"]);
  const color2 = useColorModeValue("teal", "white");
  return (
    <Container maxW="1200px" id="aboutUs">
      <Flex
        mt="120px"
        as="section"
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems={{ base: "center", lg: "start" }}
      >
        <Box
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: 5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          mt={{ base: "1rem", lg: "0" }}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/img1.2593260.png" />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box textAlign={{ base: "center", lg: "start" }}>
            <Heading fontWeight="400">
              Save Your Time & See How It works any platform
            </Heading>
            <Text
              fontSize="15px"
              lineHeight="2"
              color="grayText"
              mt="1rem"
              mb="3rem"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </Box>
          <Flex gap="2rem" flexDir={{ base: "column", lg: "row" }}>
            <Card
              w={"100%"}
              //   mb={{ base: "1rem", lg: "0" }}
              mx="auto"
              boxShadow="xl"
              bg={bg}
              transition="background-color 1s"
              _hover={{
                bg: bgHover,
              }}
              _after={{
                content: "'1'",
                position: "absolute",
                top: "-13px",
                right: "-13px",
                color: "white",
                fontSize: "14px",
                bg: bgHover,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                shadow: "md",
                height: "35px",
                width: "35px",
                borderRadius: "100%",
              }}
            >
              <CardBody
                display="flex"
                flexDir="column"
                mx="auto"
                alignItems="center"
                width="254px"
                height="160px"
                px="2rem"
                py="2.5rem"
              >
                <GoGraph color={color} fontSize="3rem" />
                <Text mt="10px">Process Title</Text>
              </CardBody>
            </Card>
            <Card
              w={"100%"}
              mx="auto"
              boxShadow="xl"
              transition="background-color 1s"
              bg={bg2}
              _hover={{
                bg: bgHover2,
              }}
              _after={{
                content: "'2'",
                position: "absolute",
                top: "-13px",
                right: "-13px",
                color: "white",
                fontSize: "14px",
                bg: bgHover2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                shadow: "md",
                height: "35px",
                width: "35px",
                borderRadius: "100%",
              }}
            >
              <CardBody
                mx="auto"
                display="flex"
                flexDir="column"
                alignItems="center"
                width="254px"
                height="160px"
                px="2rem"
                py="2.5rem"
              >
                <AiOutlineUser color={color2} fontSize="3rem" />
                <Text mt="10px">Recipient</Text>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutUs;
