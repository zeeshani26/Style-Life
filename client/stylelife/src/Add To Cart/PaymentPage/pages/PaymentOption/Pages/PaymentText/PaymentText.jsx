import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

export const PaymentText = ({setPaymentOfMethod, PaymentOfMethod}) => {
  let payment = ["Paytm", "Credit Cards", "Debit Cards", "Net Banking"];

  return (
    <Box>
      {payment.map((ele) => {
        return (
          <Flex  style={{
            backgroundColor:PaymentOfMethod == ele ? "white" : "#c6d4d9"
          }} mb="2px"  p="8px" pt="15px" pb="15px" onClick={()=>setPaymentOfMethod(ele)}>
            <Box>{ele}</Box> <Spacer /><Box>{">"}</Box>
          </Flex>
        );
      })}
    </Box>
  );
};


