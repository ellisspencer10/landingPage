import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePhone, AiOutlineHome, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    // md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });
  return (
    <Box bg="primary" id="contactUs">
      <Container maxW="1200px" mt="120px">
        <Box mx="auto" pt="75px">
          <Grid
            color="white"
            textAlign="start"
            templateColumns={columns}
            gap={6}
          >
            <GridItem>
              <Flex flexDir="column">
                <Box height="80px">
                  <Image
                    height="100%"
                    maxH="50px"
                    src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/logo-white.16b4641.png"
                  />
                </Box>
                <Box>
                  <Text
                    lineHeight="2"
                    fontSize="15px"
                    color="white"
                    textAlign="start"
                  >
                    Subscribe to our newsletter and get 10% off your first
                    purchase.
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex flexDir="column">
                <Flex alignItems="center" height="80px">
                  <Heading size="md" fontWeight="400">
                    Information
                  </Heading>
                </Flex>
                <Flex fontSize="15px" flexDir="column">
                  <Link mb="10px">Home</Link>
                  <Link mb="10px">Blog</Link>
                  <Link mb="10px">Careers</Link>
                  <Link mb="10px">Pricing</Link>
                  <Link>Contact</Link>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex flexDir="column">
                <Flex alignItems="center" height="80px">
                  <Heading size="md" fontWeight="400">
                    About Us
                  </Heading>
                </Flex>
                <Flex fontSize="15px" flexDir="column">
                  <Link mb="10px">Home</Link>
                  <Link mb="10px">Blog</Link>
                  <Link mb="10px">Careers</Link>
                  <Link mb="10px">Pricing</Link>
                  <Link>Contact</Link>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex flexDir="column">
                <Flex alignItems="center" height="80px">
                  <Heading size="md" fontWeight="400">
                    Quick Links
                  </Heading>
                </Flex>
                <Flex fontSize="15px" flexDir="column">
                  <Flex mb="15px" alignItems="center">
                    <AiOutlinePhone fontSize="1.5rem" />
                    <Link ml="10px">+0123456789</Link>
                  </Flex>
                  <Flex mb="15px" alignItems="center">
                    <AiOutlineMail fontSize="1.5rem" />
                    <Link ml="10px">support@iqnonicthemes.com</Link>
                  </Flex>
                  <Flex mb="15px" alignItems="center">
                    <AiOutlineHome fontSize="1.5rem" />
                    <Link ml="10px">1234 North Avenue Luke Lane</Link>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      <Box borderTop="1px solid" py="1rem" mt="1rem" color="white">
        <Container maxW="1200px">
          <Text textAlign="end" fontSize="15px">
            Copyright 2021 sofbox All Rights Reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
