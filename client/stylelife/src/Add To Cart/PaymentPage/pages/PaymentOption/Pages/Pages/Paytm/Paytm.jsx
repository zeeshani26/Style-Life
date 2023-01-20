import { Box, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

export const Paytm = () => {
  return (
    <Box>
      <Box m="10px" justifyContent={"flex-start"} display='grid'>
        <Text>Select a Wallet</Text>
      </Box>
      <Box m="25px">
        <Image w="25rem" src="https://techstory.in/wp-content/uploads/2021/07/Paytm-in-talks-to-raise-268Mn-in-pre-IPO-funding-round.jpg" />
      </Box>

      <Box m="30px" justifyContent={"flex-start"} display="grid">
        <Button _hover={"none"} borderRadius={"0px"} bg="#ef534e">
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
