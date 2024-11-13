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
    lg: "repeat(4, 1fr)",
  });
  
  const cardDetails = [
    {
      title: "Invoicing Made Simple",
      body: "Automate your invoicing to save time and reduce manual effort, keeping your finances organized effortlessly.",
      icon: TbFileInvoice,
      color: "#ff92b0",
      active: false,
    },
    {
      title: "Detailed Reporting",
      body: "Gain insights into your business performance with easy-to-access reports, helping you make data-driven decisions.",
      icon: HiOutlineDocumentReport,
      color: "#a37cfc",
      active: true,
    },
    {
      title: "Client Management",
      body: "Streamline client interactions and manage accounts efficiently to build stronger relationships.",
      icon: MdOutlineManageAccounts,
      color: "#5ad4f1",
      active: false,
    },
    {
      title: "Secure Data Backup",
      body: "Keep your data safe and secure with automated backups, giving you peace of mind.",
      icon: MdOutlineBackup,
      color: "#a37cfc",
      active: false,
    },
  ];

  return (
    <Container maxW="1200px" mt="120px" id="services">
      <Heading fontWeight="400">Popular Services</Heading>
      <Text
        lineHeight="2"
        fontSize="15px"
        pt="1.5rem"
        pb="2rem"
        maxW="500px"
        mx="auto"
        color="gray"
      >
        Our subscription model allows you to choose the specific services you
        need each month, making it easy to tailor your experience as your
        business grows.
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
