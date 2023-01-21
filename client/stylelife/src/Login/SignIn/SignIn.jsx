import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReCapture from "../pages/reCapture/reCapture";
import style from "./style/SignIn.module.css";

const SignIn = ({ HandelChange }) => {
  const [timer, setTimer] = useState(30);
  const [buttonPermetion, setButtonPermition] = useState(true);

  const [OtpNumber, setOtpNumber] = useState("1234");
  const [OtpValid, setOtpvalid] = useState(false);
  const [OtpValue, setOtpValue] = useState("");

  useEffect(() => {
    let id;
    id = setInterval(() => {
      setTimer((ele) => {
        if (ele <= 1) {
          clearInterval(id);
        }
        return ele - 1;
      });
    }, 1000);

    const cleanup = () => {
      clearInterval(id);
      console.log("cleanup is called");
    };
    return cleanup;
  }, []);

  const nextButtonValue = () => {
    setButtonPermition(!buttonPermetion);
  };

  const HandelChangeInput = (data) => {
    setOtpValue(data);
  };

  const HandelSubmit = () => {
    if (OtpValue !== OtpNumber) {
      setOtpvalid(true);
    } else {
      setOtpvalid(false);
    }
  };
  return (
    <Box className={style.mainBox} mt={"60px"}>
      <Box>
        <Heading color={"#666"} as="h4" size="xl">
          Enter 6 digit code{" "}
        </Heading>
      </Box>

      <Box>
        <Text>
          OTP sentto you on your mobile phone 967337944{" "}
          <Text color={"#35A7FF"} onClick={HandelChange}>
            Edit
          </Text>
        </Text>
      </Box>
      
      <Box>
        <Box pb="15px">
          {" "}
          <Input
            type="number"
            onChange={(e) => HandelChangeInput(e.target.value)}
            borderRadius="0px"
            _hover="none"
            placeholder="OTP"
            border="none"
            borderBottom={"1px solid black"}
          />
        </Box>
        <Box>
          {OtpValid ? <Text color={"red"}>Please enter valid OTP</Text> : ""}
          {timer <= 0 ? (
            <Text>
              {" "}
              Did not receive OTP <Text color={"#35A7FF"}>Get OTP on Call</Text>
            </Text>
          ) : (
            <Text>Did not receive OTP ? Resend OTP in {timer} second</Text>
          )}
        </Box>
      </Box>

      <Box>
        <ReCapture nextButtonValue={nextButtonValue} />
      </Box>

      <Box justifyContent={"start"} display="grid">
        <Button
          onClick={HandelSubmit}
          bg="#ef534e"
          _hover="none"
          borderRadius="0px"
          size="md"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
