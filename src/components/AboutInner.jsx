import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { motion } from "framer-motion";

const AboutInner = () => {
  return (
    <Container maxW="1200px">
      <Flex
        mt="120px"
        as="section"
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems={{ base: "center", lg: "start" }}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box textAlign={{ base: "center", lg: "start" }}>
            <Heading fontWeight="400">
              Join our global community and get access
            </Heading>
            <Text
              fontSize="15px"
              lineHeight="2"
              color="grayText"
              mt="1rem"
              mb="2rem"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </Box>
          <Flex flexDirection="column" gap="1rem" px="16px">
            <Card
              display="flex"
              alignItems={{ base: "start", lg: "center" }}
              flexDirection={{ base: "column", lg: "row" }}
              boxShadow="xl"
              p="30px"
            >
              <BsCreditCard2Back fontSize="3rem" />
              <CardBody
                p={{ base: "0", lg: "20px" }}
                mt={{ base: "10px", lg: "0" }}
              >
                <Heading
                  size="md"
                  fontWeight="400"
                  textAlign="start"
                  textTransform="capitalize"
                  mb="10px"
                >
                  Virtual Card
                </Heading>
                <Text
                  fontWeight="300"
                  lineHeight="2"
                  textAlign="start"
                  color="grayText"
                  fontSize="15px"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </CardBody>
            </Card>

            <Card
              display="flex"
              alignItems={{ base: "start", lg: "center" }}
              flexDirection={{ base: "column", lg: "row" }}
              boxShadow="xl"
              p="30px"
            >
              <AiOutlineFileProtect fontSize="3rem" />
              <CardBody
                p={{ base: "0", lg: "20px" }}
                mt={{ base: "10px", lg: "0" }}
              >
                <Heading
                  size="md"
                  fontWeight="400"
                  textAlign="start"
                  textTransform="capitalize"
                  mb="10px"
                >
                  Buyer Protection
                </Heading>
                <Text
                  fontWeight="300"
                  lineHeight="2"
                  textAlign="start"
                  color="grayText"
                  fontSize="15px"
                >
                  There are many variations of passages of Lorem Ipsum
                  available.
                </Text>
              </CardBody>
            </Card>
          </Flex>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          //   mx={{ base: "auto", lg: "none" }}
          mt={{ base: "1rem", lg: "0" }}
          w={{ base: "100%", lg: "50%" }}
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/img3.959042b.png" />
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutInner;
