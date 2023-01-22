import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReCapture from "../pages/reCapture/reCapture";
import style from "./style/SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import ForgatePassword from "../ForgatePassword/ForgatePassword";
import axios from "axios";

const SignIn = ({ name, HandelChange, onClose, setPasswordForgate, setAdmin }) => {
  const [timer, setTimer] = useState(30);
  const toast = useToast();
  const [AdminBtn , setAdmBtn] = useState(false)

  const [nextBtn, setNextBtn] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const PostForSignUp = async (data1) => {
    try {
      let res = await axios.post(
        "https://nice-ruby-tortoise.cyclic.app/user/login",
        data1
      )
        console.log(res);
      if (res.data.msg === "login successful") {
        toast({
          position: "top",
          title: "User Is Logged in.",
          description: "Status Success",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      console.log("user", res)
      

        let obj = {
          name,
          user: email,
          token: res.data.token,
        };

        localStorage.setItem("StyleLifeUserData", JSON.stringify(obj));

        navigation("/");
        onClose();
      }
    else if(res.data.msg === "Admin login successful"){
        toast({
          position: "top",
          title: "Admin Login",
          description: "Admin Login successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      setAdmin("Admin")

        let obj = {
          name,
          user: email,
          token: res.data.token,
        };
        console.log(obj,"obj");
        localStorage.setItem("StyleLifeAdminData", JSON.stringify(obj));
        setAdmBtn(true);
        navigation("/");
        onClose();
      }
      else {
        toast({
          position: "top",
          title: "Wrong Credentials",
          description: "Please Try Agin",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.log(err, "errr");
      toast({
        position: "top",
        title: "Something Went Wrong",
        description: "Please Try Agin",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
    };
    return cleanup;
  }, []);

  const nextButtonValue = (data) => {
    if (data === "yes") {
      setNextBtn(false);
    }
  };

  const HandelSubmit = () => {
    let obj = {
      email,
      password,
    };
    PostForSignUp(obj);
  };


  return (
    <Box className={style.mainBox} mt={"60px"}>
      <Box>
        <Heading color={"#666"} as="h4" size="xl">
          Login
        </Heading>
      </Box>

      <Box>
        <Box pb="15px">
          {" "}
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            borderRadius="0px"
            _hover="none"
            placeholder="Email"
            border="none"
            borderBottom={"1px solid black"}
          />
        </Box>
      </Box>

      <Box>
        <Box pb="15px">
          {" "}
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            borderRadius="0px"
            _hover="none"
            placeholder="Password"
            border="none"
            borderBottom={"1px solid black"}
          />
        </Box>
        <Text onClick={() => setPasswordForgate(false)} color={"#35A7FF"}>
          Forgot Password
        </Text>
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
          Login
        </button>
      </Box>
      <Box>
        <Button
          bg="#ef534e"
          borderRadius={"0px"}
          _hover={"none"}
          className={style.btnNextcolor}
          onClick={HandelChange}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
