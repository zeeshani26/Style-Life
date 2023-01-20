import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { CreditCards } from "./Pages/Pages/CreditCards/CreditCards";
import { Paytm } from "./Pages/Pages/Paytm/Paytm";
import { PaymentText } from "./Pages/PaymentText/PaymentText";

const PaymentOption = () => {
  return (
    <>
      <Box>
        <Heading justifyContent={"flex-start"} display="flex" as="h3" size="lg">
          Payment options{" "}
        </Heading>
      </Box>

      <Flex>
        <Box bg="white" w="8rem" h="20rem" border={"1px solid red"}><PaymentText /></Box>
        <Box bg="white" w="50rem" h="30rem" border={"1px solid red"}>


          {/* <Paytm /> */}
          <CreditCards />
        </Box>
      </Flex>
    </>
  );
};

export default PaymentOption;
