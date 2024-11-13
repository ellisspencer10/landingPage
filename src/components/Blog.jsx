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
    lg: "repeat(4, 1fr)",
  });

  const blogCardList = [
    {
      title: "Maximizing Business Efficiency with AI",
      body: "Discover how AI-driven tools can streamline your operations and enhance client interactions effortlessly.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/11.75a6eb1.jpg",
    },
    {
      title: "Why Flexibility is Key in Business Solutions",
      body: "Learn about the importance of adaptable services and how our subscription model provides unique flexibility.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/13.cdb8b9d.jpg",
    },
    {
      title: "How ChatGPT is Revolutionizing Customer Engagement",
      body: "Explore the power of AI in providing responsive, intelligent customer support that scales with your business.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/12.faadf3a.jpg",
    },
    {
      title: "Tailor Your Services, Optimize Your Outcomes",
      body: "Our unique service model allows you to select the solutions that best fit your business goals each month.",
      imgUrl:
        "https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/14.975dd07.jpg",
    },
  ];

  return (
    <Container maxW="1200px" mt="120px" mb="120px" id="blog">
      <Heading fontWeight="400">Latest Insights</Heading>
      <Text
        lineHeight="2"
        pt="1.5rem"
        pb="2rem"
        maxW="500px"
        mx="auto"
        color="gray"
      >
        Stay updated with the latest trends in AI-driven business solutions and
        discover how flexible, subscription-based services can transform your
        operations.
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
