import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "./Carousel";

const Portfolio = () => {
  return (
    <Container maxW="1200px" id="portfolio" overflow="hidden">
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
            duration: 0.8,
            delay: 3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          mx="auto"
          mt={{ base: "1rem", lg: "0" }}
          w={{ base: "100%", lg: "50%" }}
          display="flex"
          justifyContent="center"
          p="1rem"
        >
          <Image src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/chart-3.9551d62.png" />
        </Box>
        <Box
          as={motion.div}
          initial={{ x: "200px" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          w={{ base: "100%", lg: "50%" }}
        >
          <Heading fontWeight="400" textAlign={{ base: "center", lg: "start" }}>
            Popular features that your business needs
          </Heading>
          <Text
            textAlign={{ base: "center", lg: "start" }}
            pt="1.5rem"
            pb="2rem"
            mx="auto"
            color="grayText"
            fontSize="15px"
            lineHeight="2"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <Box width="100%" margin="0 auto">
            <Carousel />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Portfolio;
