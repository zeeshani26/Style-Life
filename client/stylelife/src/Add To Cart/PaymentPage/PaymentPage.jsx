import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import PaymentOption from "./pages/PaymentOption/PaymentOption";
const PaymentPage = () => {
  const [CartData, setCartData] = useState([]);

  const GetCartData = async () => {
    let token = JSON.parse(localStorage.getItem("StyleLifeUserData"));

    console.log(token.token);

    try {
      let res = await axios.post("https://glorious-bass-poncho.cyclic.app/", {
        headers: {
          "Content-Type": "application/json",
          authorization: token.token,
        },
      });
      console.log(res, "daa");
      setCartData(res);
    } catch (err) {
      console.log(err, "errr");
    }
  };

  useEffect(() => {}, []);

  return (
    <Flex bg="gray.300">
      <Box>
        <OrderSummary />
      </Box>
      <Box>
        <PaymentOption />
      </Box>
    </Flex>
  );
};

export default PaymentPage;
