import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    // md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const blogCardList = [
    {
      title: "Life Lack Meaning",
      body: "It is a long established fact that a reader will be distracted by the readable.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/11.75a6eb1.jpg",
    },
    {
      title: "Life Lack Meaning",
      body: "It is a long established fact that a reader will be distracted by the readable.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/13.cdb8b9d.jpg",
    },
    {
      title: "Life Lack Meaning",
      body: "It is a long established fact that a reader will be distracted by the readable.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/12.faadf3a.jpg",
    },
    {
      title: "Life Lack Meaning",
      body: "It is a long established fact that a reader will be distracted by the readable.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/14.975dd07.jpg",
    },
  ];
  return (
    <Container maxW="1200px" mt="120px" mb="120px" id="blog">
      <Heading fontWeight="400">Latest Posts</Heading>
      <Text
        lineHeight="2"
        pt="1.5rem"
        pb="2rem"
        maxW="500px"
        mx="auto"
        color="gray"
      >
        If you are planning on developing a product landing.
      </Text>
      <Box mx="auto" mt="1rem">
        <Grid templateColumns={columns} gap={6}>
          {blogCardList &&
            blogCardList.map((item, index) => (
              <GridItem key={index}>
                <BlogCard
                  imageUrl={item.imgUrl}
                  title={item.title}
                  body={item.body}
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
