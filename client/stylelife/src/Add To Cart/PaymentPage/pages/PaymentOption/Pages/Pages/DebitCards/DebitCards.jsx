import {
  Box,
  Input,
  Text,
  Flex,
  Spacer,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import style from "./style/DebitCards.module.css";
export const DeditCards = ({ setOrderPlace }) => {
  return (
    <Box className={style.mainBox}>
      <Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text>Credit card number</Text>
        </Box>
        <Box>
          <Input
            bgRepeat={"no-repeat"}
            bgPos="right"
            bgSize={"30px"}
            bgImage={
              "https://th.bing.com/th/id/R.9e95d35f72b8dc8042b2a2dd61dce2ed?rik=RoQLZ3TAbJmDmw&riu=http%3a%2f%2fwww.enterhindi.com%2fwp-content%2fuploads%2f2017%2f02%2frupay-logo.png&ehk=bWtEwsZPRsJXVWC3ZdnDKUj5gUqKqWYC%2fvus3qkQQsk%3d&risl=&pid=ImgRaw&r=0"
            }
            size="sm"
                        id="ccn" type="number" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"

          />
        </Box>
      </Box>

      <Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text>Credit card name</Text>
        </Box>
        <Box>
          <Input placeholder="Enter Your Name" size="sm" />
        </Box>
      </Box>

      <Flex>
        <Box>
          <Text mb="15px">Expiry date (MM / YY)</Text>
          <Box>
            <Input type="date" />
          </Box>
        </Box>

        <Spacer />
        <Box>
          <Box>
            <Text mb="15px">CVV</Text>
          </Box>
          <Box>
            <Input
              type="password"
              className={style.inputcvv}
              w="10rem"
              bgRepeat={"no-repeat"}
              bgPos="right"
              bgSize={"30px"}
              bgImage={
                "https://moneymall.ae/credit-blog/wp-content/uploads/2020/09/cvv.png"
              }
            />
          </Box>
        </Box>
      </Flex>

      <Flex>
        {" "}
        <Checkbox
          size="lg"
          ml="8px"
          colorScheme="green"
          mr="8px"
        ></Checkbox>{" "}
        <Text>Save this card for faster checkout</Text>
      </Flex>

      <Box m="30px" justifyContent={"flex-start"} display="grid">
        <Button
          onClick={() => setOrderPlace(true)}
          _hover={"none"}
          borderRadius={"0px"}
          bg="#ef534e"
        >
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
