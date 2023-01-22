import { background, Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import ReCapture from "../pages/reCapture/reCapture";
import style from "./style/SignUp.module.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
const SignUp = ({
  HandelChange,
  password,
  email,
  name,
  setPassword,
  setEmail,
  setName,
}) => {
  const [nextBtn, setNextBtn] = useState(true);
  const toast = useToast();

  const PostForSignUp = async (data) => {
    try {
      let res = await axios.post(
        "https://nice-ruby-tortoise.cyclic.app/user/register",
        data
      );

      if (res.data === "User has been created") {
        toast({
          position: "top",
          title: "User Is Register.",
          description: "Status Success",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        HandelChange();
      }
    } catch (err) {
      toast({
        position: "top",
        title: "User already exists",
        description: "Please Login",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const nextButtonValue = (data) => {
    if (data === "yes") {
      setNextBtn(false);
    }
  };

  const HandelSubmit = () => {
    if (email == "" || name == "" || password == "") {
      toast({
        position: "top",
        title: "Input Error.",
        description: "Please Fill All Input",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      let obj = {
        name,
        email,
        password,
      };
      console.log(obj);
      PostForSignUp(obj);
    }
  };

  return (
    <Box w="90%" m="auto" className={style.mainBoxTop} mt={"60px"}>
      <Heading color={"#666"} as="h4" size="xl">
        Sign up{" "}
      </Heading>
      <Box className={style.MainBox}></Box>
      <Box className={style.MainBox}>
        <Box>
          <Input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </Box>{" "}
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

      <Box>
        <Button
          borderRadius={"0px"}
          bg="#ef534e"
          _hover={"none"}
          className={style.btnNextcolor}
          onClick={HandelChange}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
