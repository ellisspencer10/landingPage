import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ title, Icon, colorCode, body, isActive }) => {
  return (
    <Card
      shadow={isActive ? "xl" : "none"}
      p="30px"
      h="100%"
      position="relative"
      transition="all 1s ease"
      _before={{
        content: `""`,
        position: "absolute",
        width: isActive ? "100%" : "0",
        height: "5px",
        background: colorCode,
        left: "0",
        bottom: "0",
        transition: "all 0.4s ease",
        borderRadius: "0 0 3px 3px",
      }}
      _hover={{
        "&:before": {
          background: colorCode,
          width: "100%",
        },
        shadow: "xl",
      }}
    >
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Icon fontSize="3rem" color={colorCode} />
        <Heading py="1rem" size="md" fontWeight="400">
          {title}
        </Heading>
        <Text fontSize="15px" color="grayText" lineHeight="2">
          {body}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
