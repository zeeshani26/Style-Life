import { Box, Input, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import React from "react";

export const CreditCards = () => {
  return (
    <Box>
      <Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text>Credit card number</Text>
        </Box>
        <Box>
          <Input placeholder="small size" size="sm" />
        </Box>
      </Box>

      <Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text>Credit card number</Text>
        </Box>
        <Box>
          <Input placeholder="small size" size="sm" />
        </Box>
      </Box>

      <Flex>
        <Box>
          <Text>Expiry date (MM / YY)</Text>
          <Box>
            <Input type="date" />
          </Box>
        </Box>

        <Spacer />
        <Box>
          <Text>CVV</Text>
          <Box>
            <Input
              w="5rem"
              type="input"
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

      
      <Box>
          <Input type="checkbox" />
          <Text>Save this card for faster checkout</Text>
        </Box>

      <Box m="30px" justifyContent={"flex-start"} display="grid">
        <Button _hover={"none"} borderRadius={"0px"} bg="#ef534e">
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
