import { CardBody, Card, Heading } from "@chakra-ui/react";
import { useState } from "react";

const CardComp = ({ title, Icon, colorCode }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Card
      shadow="xl"
      h="180px"
      transition="background-color 1s ease-out"
      _hover={{
        color: "white",
        bg: `${colorCode}`,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p="30px"
      >
        <Icon
          transition="color 0.4s ease-out"
          fontSize="3rem"
          color={isHovering ? "white" : colorCode}
        />
        <Heading
          transition="color 0.4s ease-out"
          mt="1rem"
          size="md"
          fontWeight="300"
          lineHeight="1.5em"
        >
          {title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CardComp;
