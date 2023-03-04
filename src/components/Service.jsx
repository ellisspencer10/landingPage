import React from "react";
import ServiceCard from "./ServiceCard";
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineBackup } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Service = () => {
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    // md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });
  const cardDetails = [
    {
      title: "Invoice",
      body: "It is a long established fact that a reader will be distracted.",
      icon: TbFileInvoice,
      color: "#ff92b0",
      active: false,
    },
    {
      title: "Detailed Reports",
      body: "It is a long established fact that a reader will be distracted.",
      icon: HiOutlineDocumentReport,
      color: "#a37cfc",
      active: true,
    },
    {
      title: "Management",
      body: "It is a long established fact that a reader will be distracted.",
      icon: MdOutlineManageAccounts,
      color: "#5ad4f1",
      active: false,
    },
    {
      title: "Secure Backup",
      body: "It is a long established fact that a reader will be distracted.",
      icon: MdOutlineBackup,
      color: "#a37cfc",
      active: false,
    },
  ];
  return (
    <Container maxW="1200px" mt="120px" id="services">
      <Heading fontWeight="400">Popular Service</Heading>
      <Text
        lineHeight="2"
        fontSize="15px"
        pt="1.5rem"
        pb="2rem"
        maxW="500px"
        mx="auto"
        color="gray"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>
      <Box mt="2rem">
        <Grid templateColumns={columns} gap={6}>
          {cardDetails &&
            cardDetails.map((item, index) => (
              <GridItem key={index}>
                <ServiceCard
                  title={item.title}
                  Icon={item.icon}
                  colorCode={item.color}
                  body={item.body}
                  isActive={item.active}
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Service;
