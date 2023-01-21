import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";
import ReCapture from "../pages/reCapture/reCapture";
import style from "./style/SignUp.module.css";

const SignUp = ({HandelChange}) => {

  const nextButtonValue = () => {
  }

  
  return (
    <Box w="90%" m="auto" className={style.mainBoxTop} mt={"60px"}>
      <Heading color={"#666"} as="h4" size="xl">
        Login / Sign up{" "}
      </Heading>
      <Box className={style.MainBox}></Box>
      <Box className={style.MainBox}>
        <Box>
          <Input placeholder="Mobile Number" />
          <Input placeholder="Mobile Email" />
          <Input placeholder="Mobile Password" />
        </Box>{" "}
       
      </Box>
      <Box>
          <ReCapture nextButtonValue={nextButtonValue} />
        </Box>
      <Box justifyContent={"start"} display="grid">
        <Button onClick={HandelChange}  bg="#ef534e" _hover="none" borderRadius="0px"  size="md">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
