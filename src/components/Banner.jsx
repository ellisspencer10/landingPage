import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  keyframes,
  Text,
} from "@chakra-ui/react";
import { easeIn, motion } from "framer-motion";
import React from "react";
import BgSvg from "../assets/wave.png";

const mover = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-15px); }
`;

const Banner = () => {
  return (
    <Flex
      id="home"
      backgroundImage={`url(${BgSvg})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      // bgGradient="linear(to-r, purple.400, purple.500)"
      // maxH="400px"
      height="100%"
      width="100%"
      alignItems={{ base: "start", md: "center" }}
      flexDir={{ base: "column", md: "row" }}
      pt={{ base: "8rem", md: "8rem" }}
      position="relative"
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        color="white"
        height={{ base: "100%", lg: "100vh" }}
        maxH="500px"
        m={"auto"}
        // mb={{ base: "2rem", md: "0" }}
        pt={{ base: 0, lg: "5rem" }}
      >
        <Box
          w={{ lg: "30%", lg: "35", xl: "40%" }}
          display={{ base: "none", lg: "block" }}
        ></Box>
        <Flex
          height="100%"
          direction="column"
          w={{ base: "90%", lg: "60%" }}
          m={{ base: "auto" }}
          mb={{ base: "2rem", md: "0" }}
        >
          <Heading
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            fontWeight="400"
            fontSize={{
              base: "20px",
              md: "25px",
              lg: "28px",
              xl: "38px",
              "2xl": "44px",
            }}
            mx={{ base: "auto", md: "0" }}
            textAlign={{ base: "center", md: "start" }}
            maxWidth={{ base: "300px", lg: "100%" }}
            lineHeight={{ base: "1.5" }}
          >
            Sofbox is the Best Software Landing Website Ever.
          </Heading>
          <Text
            as={motion.div}
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: easeIn,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            fontSize={{ base: "12px", md: "15px" }}
            textAlign={{ base: "center", md: "start" }}
            m="0"
            my="1rem"
            mx={{ base: "auto", md: "0" }}
            maxWidth={{ base: "300px", lg: "100%" }}
            fontWeight="300"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Text>
          <Button
            as={motion.div}
            initial={{
              opacity: 0,
              y: 120,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: easeIn,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            border
            color="primary"
            fontWeight="400"
            maxW="130px"
            mx={{ base: "auto", md: "0" }}
            _hover={{
              bg: "black",
            }}
          >
            Read More
          </Button>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        w={{ base: "75%", md: "50%" }}
        m={"auto"}
        // mt="5rem"
        position="relative"
        as={motion.div}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "linear" }}
      >
        <Image
          maxHeight="570px"
          src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/slide1.ec30980.png"
          alt="laptop"
          objectFit="cover"
        />
        <Image
          animation={`${mover} 1.5s infinite alternate`}
          maxHeight={{
            base: "120px",
            sm: "150px",
            md: "200px",
            lg: "250px",
            xl: "350px",
          }}
          height="100%"
          position="absolute"
          left={{ base: 0, md: "1rem", lg: "2rem" }}
          objectFit="cover"
          src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/slide3.ad6f7f6.png"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
