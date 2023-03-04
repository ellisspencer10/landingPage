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
import { TbDeviceLaptop } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { IoMdPaperPlane } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineBackup } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import CardComp from "./CardComp";
import { motion } from "framer-motion";

const Features = () => {
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    // md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const featureCard = [
    {
      title: "Stock Management System",
      Icon: TbDeviceLaptop,
      colorCode: "#1431c6",
    },
    {
      title: "Receivable & Payables",
      Icon: GiPayMoney,
      colorCode: "#f77a4a",
    },
    {
      title: "Manage Buying & Selling",
      Icon: IoMdPaperPlane,
      colorCode: "#5ad4f1",
    },
    {
      title: "Message Notification",
      Icon: BiMessageDetail,
      colorCode: "#1431c6",
    },
    {
      title: "Powerful & Secure Backup",
      Icon: MdOutlineBackup,
      colorCode: "#f77a4a",
    },
    {
      title: "Product Management",
      Icon: MdOutlineManageAccounts,
      colorCode: "#5ad4f1",
    },
    {
      title: "Customized Pricing System",
      Icon: MdOutlinePriceChange,
      colorCode: "#1431c6",
    },
    {
      title: "Fastest Return System",
      Icon: TbTruckReturn,
      colorCode: "#f77a4a",
    },
  ];
  return (
    <Container maxW="1200px" mt="120px" id="features">
      <Heading fontWeight="400">Popular Features</Heading>
      <Text
        pt="1.5rem"
        lineHeight="2"
        pb="2rem"
        maxW="500px"
        mx="auto"
        color="grayText"
        fontSize="15px"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>

      <Box mt="2rem">
        <Grid templateColumns={columns} gap={6}>
          {featureCard &&
            featureCard.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <GridItem>
                  <CardComp
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}
                    title={item.title}
                    Icon={item.Icon}
                    colorCode={item.colorCode}
                  />
                </GridItem>
              </motion.div>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
