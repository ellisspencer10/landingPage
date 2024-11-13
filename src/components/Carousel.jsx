import React from "react";
import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Flex width="100%" flexDir="column">
      <Card p="15px" shadow="none" bg="gray.100">
        <Text lineHeight="2" fontSize="15px" textAlign="start" color="grayText">
          "Using their flexible, subscription-based AI solutions has transformed
          how we operate. We can tailor our services monthly to meet changing
          needs, helping us stay efficient and client-focused with minimal
          overhead."
        </Text>
      </Card>
      <Flex mt="1rem" alignItems="center">
        <Image
          borderRadius="100%"
          maxWidth="50px"
          src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/user3.67ec625.jpg"
          alt="Client Testimonial"
        />
        <Box textAlign="start" pl="10px">
          <Heading size="sm">Kips Leo</Heading>
          <Text fontSize="12px">CEO, Dynamic Solutions</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Carousel;
