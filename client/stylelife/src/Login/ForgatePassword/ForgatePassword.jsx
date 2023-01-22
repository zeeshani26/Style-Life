import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReCapture from "../pages/reCapture/reCapture";
import style from "./style/ForgatePassword.module.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const ForgatePassword = ({ setPasswordForgate, setRoute_forgate_Chgange }) => {
  const [timer, setTimer] = useState(30);
  const [OtpValidBoolean, setOtpValidBoolean] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const [otp, setotp] = useState("");
  const [email, setEmail] = useState("");
  const [TimerShow, setTimerShow] = useState(false);

  const toast = useToast();

  const nextButtonValue = (data) => {
    if (data === "yes") {
      setNextBtn(false);
    }
  };

  const GetForCheckUser = async (data1) => {
    try {
      let res = await axios.get(
        "https://nice-ruby-tortoise.cyclic.app/user/forgot",
        data1
      );
      console.log(res);
      return res.data.user;
    } catch (err) {
      console.log(err, "errr");
    }
  };

  const HandelSubmit = async () => {
    if (TimerShow) {
      if (otp === "1234") {
        setRoute_forgate_Chgange(false);

        return;
      } else {
        toast({
          position: "top",
          title: "",
          description: "Please Enter Valid OTP",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }

    console.log(email);

    if (email.substring().includes("@gmail.com")) {
      let user = await GetForCheckUser({ email });

      if (!user) {
        toast({
          position: "top",
          title: "",
          description: "User Not Found",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setTimerShow(false);
        return;
      }

      setTimerShow(true);
    } else {
      toast({
        position: "top",
        title: "Something Went Wrong",
        description: "Please Check Your Email",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
  };

  useEffect(() => {
    let id;
    if (TimerShow) {
      id = setInterval(() => {
        setTimer((ele) => {
          if (ele <= 1) {
            clearInterval(id);
          }
          return ele - 1;
        });
      }, 1000);
    }

    if (timer <= -1) {
      clearInterval(id);
    }

    const cleanup = () => {
      clearInterval(id);
    };
    return cleanup;
  }, [HandelSubmit]);

  return (
    <Box className={style.mainBox}>
      <Box>
        <Heading color={"#666"} as="h4" size="xl">
          Enter Email{" "}
        </Heading>
      </Box>

      <Box>
        <Box pb="15px">
          {" "}
          {!TimerShow ? (
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderRadius="0px"
              _hover="none"
              placeholder="Email"
              border="none"
              borderBottom={"1px solid black"}
            />
          ) : (
            <Input
              type="OTP"
              value={otp}
              onChange={(e) => setotp(e.target.value)}
              borderRadius="0px"
              _hover="none"
              placeholder="OTP"
              border="none"
              borderBottom={"1px solid black"}
            />
          )}
        </Box>
        <Box>
          {OtpValidBoolean ? (
            <Text color={"red"}>Please enter valid OTP</Text>
          ) : (
            ""
          )}
          {timer <= 0 ? (
            <Flex gap="3">
              {" "}
              <Text> Did not receive OTP</Text>{" "}
              <Text color={"#35A7FF"}>Get OTP on Call</Text>
            </Flex>
          ) : TimerShow ? (
            <Text color={"#35A7FF"}>
              Did not receive OTP ? Resend OTP in {timer} second
            </Text>
          ) : (
            <Text color={"#35A7FF"}>Enter Email Which You Use In SignUp</Text>
          )}
        </Box>
      </Box>

      <Box>
        <ReCapture nextButtonValue={nextButtonValue} />
      </Box>

      <Box justifyContent={"start"} display="grid">
        <button
          onClick={HandelSubmit}
          disabled={nextBtn}
          className={style.btnNextcolor}
          style={{ backgroundColor: nextBtn ? "gray" : "#ef534e" }}
        >
          Next
        </button>
      </Box>

      <Box justifyContent={"start"} display="grid">
        <button
          onClick={() => setPasswordForgate(true)}
          className={style.btnNextcolor}
        >
          Back
        </button>
      </Box>
    </Box>
  );
};

export default ForgatePassword;
