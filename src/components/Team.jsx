import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Team = () => {
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    // md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const images = [
    "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/410.91b6388.jpeg",
    "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/411.1cb604d.jpeg",
    "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/412.ed47ab4.jpeg",
    "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/414.221c464.jpeg",
    // "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/410.91b6388.jpeg",
    // "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/410.91b6388.jpeg",
  ];
  return (
    <Container maxW="1200px" mt="120px" mb="120px">
      <Heading fontWeight="400">Our Team</Heading>
      <Text
        lineHeight="2"
        pt="1.5rem"
        pb="2rem"
        maxW="500px"
        mx="auto"
        color="gray"
      >
        If you are planning on developing a product landing app or website, take
        a look at this beautiful-crafted.
      </Text>
      <Box mx="auto">
        <Grid templateColumns={columns} gap={6}>
          {images &&
            images.map((item, index) => (
              <GridItem key={index}>
                <Image mx="auto" w="230px" h="230px" src={item} />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Team;
