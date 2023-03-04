import React from "react";
import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Flex width="100%" flexDir="column">
      <Card p="15px" shadow="none" bg="gray.100">
        <Text lineHeight="2" fontSize="15px" textAlign="start" color="grayText">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. Distracted by
          the readable content of a page.
        </Text>
      </Card>
      <Flex mt="1rem" alignItems="center">
        <Image
          borderRadius="100%"
          maxWidth="50px"
          src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/user3.67ec625.jpg"
        />
        <Box textAlign="start" pl="10px">
          <Heading size="sm">Kips Leo</Heading>
          <Text fontSize="12px">CEO, Company</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Carousel;
