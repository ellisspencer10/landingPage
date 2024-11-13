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
              Join Our Community of Flexible, Subscription-Based Services
            </Heading>
            <Text
              fontSize="15px"
              lineHeight="2"
              color="grayText"
              mt="1rem"
              mb="2rem"
            >
              Empower your business with our flexible subscription model.
              Choose from our suite of ChatGPT-powered services each month, and
              enjoy the freedom to tailor your plan based on your changing
              needs. This unique approach gives you full control over what you
              use, without the hassle of long-term commitments.
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
                  Flexible Service Options
                </Heading>
                <Text
                  fontWeight="300"
                  lineHeight="2"
                  textAlign="start"
                  color="grayText"
                  fontSize="15px"
                >
                  Our subscription model allows you to add or remove services
                  each month. Customize your experience and only pay for what
                  you need, when you need it.
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
                  Full Control & Customization
                </Heading>
                <Text
                  fontWeight="300"
                  lineHeight="2"
                  textAlign="start"
                  color="grayText"
                  fontSize="15px"
                >
                  Enjoy the flexibility to adapt your subscription to your
                  business’s evolving needs. Experiment with services to find
                  the best fit, making adjustments as your business grows.
                </Text>
              </CardBody>
            </Card>
          </Flex>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
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
