import {
    Box,
    Flex,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import style from "../style/reCapture.module.css";
  
  const ReCapImageBox = () => {
  return (
    <Box  >


    <Box>
      <Image
        m="auto"
        w="6vh"
        src="https://www.nikeshoebot.com/wp-content/uploads/2020/11/cyber-aio-captcha-solver-750x743.png"
        alt=""
      />
    </Box>

    <Box  className={style.Image_box_recpa}>
      <Box m="auto" w="95%">
        <Box display={"grid"} justifyContent={"start"} >
          {" "}
          <Text>reCAPTCHA</Text>
        </Box>
        <Box >
          <Flex gap="3px">
            <Text>Privacy</Text>
            <Text>-</Text>
            <Text>Terms</Text>
          </Flex>
        </Box>
      </Box>
    </Box>




  </Box>
  )
}

export default ReCapImageBox
