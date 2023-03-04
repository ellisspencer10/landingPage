import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BlogCard = ({ imageUrl, title, body }) => {
  return (
    <Card
      transition="all 1s ease"
      _hover={{
        shadow: "xl",
      }}
    >
      <CardBody p="10px" position="relative">
        <Box
          position="absolute"
          top="15px"
          left="15px"
          bg="black"
          fontSize="10px"
          px="5px"
          py="2px"
          borderRadius="3px"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ bg: "primary" }}
          tr
        >
          November 28, 2019
        </Box>
        <Image src={imageUrl} alt={title} borderRadius="none" />
        <Stack mt="8" mb="5px" pl="5px" spacing="3">
          <Heading fontWeight="400" textAlign="start" size="md">
            {title}
          </Heading>
          <Text fontSize="15px" color="grayText" textAlign="start">
            {body}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
