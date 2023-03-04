import {
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Container,
  useBreakpointValue,
  Box,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolling, setIsScrolling] = useState(false);

  const menuItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About Us",
      id: "aboutUs",
    },
    {
      name: "Features",
      id: "features",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Portfolio",
      id: "portfolio",
    },
    {
      name: "Blog",
      id: "blog",
    },
    {
      name: "Contact Us",
      id: "contactUs",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const drawerSize = useBreakpointValue({ base: "xs", md: "md" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bg={"white"}
      shadow={isScrolling ? "md" : "none"}
    >
      <Container maxW="1200px">
        <Flex
          alignItems="center"
          height="80px"
          px={4}
          justifyContent="space-between"
        >
          {/* Logo */}
          <Image
            src="https://templates.iqonic.design/sofbox/html/vue/sofbox-modern/dist/_nuxt/img/logo-2.aaf5cc0.png"
            alt="Logo"
            boxSize="50px"
            width="45px"
          />

          {/* Menu */}
          <Flex justify="center" display={{ base: "none", lg: "block" }}>
            <Flex ml={0} justify="center" as={UnorderedList} styleType="none">
              {menuItems.map((item, index) => (
                <Button
                  as={Link}
                  to={item.id}
                  spy={true}
                  offset={-80}
                  cursor="pointer"
                  smooth={true}
                  key={index}
                  fontWeight={400}
                  variant="ghost"
                  color={activeIndex === index ? "primary" : "secondary"}
                  onClick={() => setActiveIndex(index)}
                  w="full"
                  _before={{
                    content: `""`,
                    position: "absolute",
                    width: activeIndex === index ? "100%" : "0",
                    height: "3px",
                    background: "primary",
                    left: "0",
                    bottom: "0",
                    transition: "all 0.4s ease",
                  }}
                  _hover={{
                    "&:before": {
                      background: "primary",
                      width: "100%",
                    },
                  }}
                  _active={{
                    bg: "transparent",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Flex>
          </Flex>

          {/* Hamburger Icon */}
          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="Menu"
              icon={<FaBars fontSize="1.5rem" />}
              size="md"
              bg="primary"
              color="white"
              variant="ghost"
              onClick={onOpen}
            />
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
            <Flex>
              {/* Serach Icon */}
              <Box>
                <IconButton
                  aria-label="Cart"
                  icon={<FaSearch />}
                  isRound={true}
                  size="md"
                  variant="ghost"
                  _hover={{
                    bg: "transparent",
                  }}
                />
              </Box>

              {/* Cart Icon */}
              <Box
                position="relative"
                _after={{
                  content: "'0'",
                  position: "absolute",
                  top: "2px",
                  color: "white",
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  right: "0",
                  bg: "primary",
                  opacity: "0.8",
                  height: "18px",
                  width: "18px",
                  borderRadius: "100%",
                }}
              >
                <IconButton
                  aria-label="Cart"
                  icon={<FaShoppingCart />}
                  isRound={true}
                  size="md"
                  variant="ghost"
                  _hover={{
                    bg: "transparent",
                  }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* Mobile Menu Drawer */}
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          size={drawerSize}
        >
          <DrawerOverlay>
            <DrawerContent marginTop="60px">
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                {menuItems.map((item, index) => (
                  <Button
                    as={Link}
                    to={item.id}
                    spy={true}
                    offset={-80}
                    cursor="pointer"
                    smooth={true}
                    key={index}
                    fontWeight={400}
                    variant="ghost"
                    color="secondary"
                    justifyContent="flex-start"
                    onClick={() => setActiveIndex(index)}
                    w="full"
                    _active={{
                      bg: "transparent",
                    }}
                    _before={{
                      content: `""`,
                      position: "absolute",
                      height: "3px",
                      background: "primary",
                      left: "0",
                      bottom: "0",
                      transition: "all 0.4s ease",
                    }}
                    _hover={{
                      "&:before": {
                        background: "primary",
                        width: "100%",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Container>
    </Box>
  );
}

export default Header;
