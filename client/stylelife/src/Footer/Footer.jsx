import React from "react";

import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="black"
      color='white'
    mt='1rem'
      width={"full"}
      paddingLeft={"3rem"}
      paddingRight={"3rem"}
      fontFamily={"sans-serif"}
    >
      <Container as={Stack} maxW={"full"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"} fontSize={".85rem"} fontWeight={"500"}>
            {/* help */}

            <Text fontWeight={"600"} fontSize={"1rem"}>
              Help
            </Text>
            <Link href={"#"}>Customer Service</Link>
            <Link href={"#"}>Track Order</Link>
            <Link href={"#"}>Returns & Exchanges</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>International Orders</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          {/* quickLinks */}
          <Stack align={"flex-start"} fontSize={".85rem"} fontWeight={"500"} ml={{base: 0, sm: '0', md: '0',lg:'-4rem'}}>
            <Text fontWeight={"600"} fontSize={"1rem"}>
              Quick Links
            </Text>

            <Link href={"#"}>Find a Store </Link>
            <Link href={"#"}>Size Charts</Link>
            <Link href={"#"}>Refer a Friend</Link>
            <Link href={"#"}>Offers & Promotions</Link>
            <Link href={"#"}>My Favorites</Link>
          </Stack>
          {/* About JCrew */}

          <Stack align={"flex-start"} fontSize={".85rem"} fontWeight={"500"} ml={{base: 0, sm: '0', md: '0',lg:'-8rem'}}>
            <Text fontWeight={"600"} fontSize={"1rem"}>
            About Style Life
            </Text>

            <Link href={"#"}>Our Story</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Social Responsibility</Link>
            <Link href={"#"}>
              California Transparency Act/Modern Slavery Act
            </Link>
            <Link href={"#"}>Investor Relations</Link>
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <Link>California Do Not Sell My Personal Information</Link>
            <Link>Diversity, Equity and Inclusion at J.Crew Group</Link>
          </Stack>
          {/* like being first  */}
          <Stack align={"flex-start"} ml={{base: 0, sm: '0', md: '0',lg:'-4rem'}}>
            <Text fontWeight={"600"} fontSize={"1rem"}>
            Like Being First?
            </Text>

            <Text fontSize={".85rem"} color="grey">
              Get can't-miss style news, before everybody else.
            </Text>
            <Flex w={"full"}>
              <Input
                placeholder="Enter your email"
                borderRadius={"none"}
                fontSize=".8rem"
                h={"2rem"}
                border={"1px solid white"}
              />
              <Button
                bg={"white"}
                h="2rem"
                w="5rem"
                fontWeight={"500"}
                padding=".8rem"
                fontSize={{base: '.7rem', sm: '.7rem', md: '0.7rem',lg:'.8rem'}}
                border="none"
                color="black"
                borderRadius={"none"}
              >
                SIGN UP
              </Button>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={{base: '50vw', sm: '40vw', md: '30vw',lg:'20vw'}}>
          <BsInstagram size={"1.5rem"} />
          <GrFacebookOption size={"1.5rem"} />
          <BsTwitter size={"1.5rem"} />
          <BsLinkedin size={"1.5rem"} />
          <BsPinterest size={"1.5rem"} />
          <BsYoutube size={"1.5rem"} />
        </Flex>
        <Flex
          mt={"2rem"}
          alignItems="center"
          w="7%"
          justifyContent={"space-between"}
          cursor="pointer"
        >
          <Text _hover={{ borderBottom: "1px solid black" }}>India </Text>

         
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"left"}>
          © 2023 Style Life
        </Text>
      </Box>
    </Box>
  );
}