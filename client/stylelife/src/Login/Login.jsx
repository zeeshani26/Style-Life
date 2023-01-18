import React, { useState } from "react";
import SignUp from "./SignUp/SignUp";

import style from "./style/Login.module.css";

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import SignIn from "./SignIn/SignIn"
const Login = () => {

const [ButtonTomove, setButtonTomove] = useState(true)

const HandelChange = () => {
  setButtonTomove(!ButtonTomove)
}

  return (
    <Box w={["60rem", "30rem", "70rem"]} display={["grid", "flex", "flex"]} m="auto" mt="5rem" >

      <Box w={["40%", "20%"]}  className={style.first_box_login}>
        <Box>
            <Box>
              <Image src="http://www.nearbuy.com/static/images/nb-logo.png" />
            </Box>

            <Box>
              <Text>Explore exciting deals & offers around you</Text>
            </Box>
        </Box>
      </Box>

      <Box className={style.second_Box_login}>
       {ButtonTomove ? <SignUp HandelChange={HandelChange} /> : <SignIn HandelChange={HandelChange} />} 
      </Box>
    </Box>
  );
};

export default Login;
