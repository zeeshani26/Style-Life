import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

export const PaymentText = () => {
  let payment = ["Paytm", "Credit Cards", "Debit Cards", "Net Banking"];

  return (
    <Box>
      {payment.map((ele) => {
        return (
          <Flex p="10px">
            <Box>{ele}</Box> <Spacer /><Box>{">"}</Box>
          </Flex>
        );
      })}
    </Box>
  );
};


