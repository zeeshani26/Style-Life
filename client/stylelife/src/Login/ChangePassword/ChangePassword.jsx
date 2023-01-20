import { Box, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ReCapture from "../pages/reCapture/reCapture";
import style from "./style/ChangePassword.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const ChangePassword = ({email, name, onClose, setRoute_forgate_Chgange }) => {
  const [nextBtn, setNextBtn] = useState(true);
  const navigation = useNavigate();
  const [NewPassword, setNewPassword] = useState("");
  const toast = useToast();

  const PostForSignUp = async (data) => {
    try {
      let res = await axios.post(
        "https://glorious-bass-poncho.cyclic.app/user/changepassword",
       data
      );
      toast({
        position: "top",
        title: `User ${name} Password Is Changed.`,
        description: "Status Success",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigation("/");
      onClose();
    } catch (err) {
      console.log(err, "err");
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

  const nextButtonValue = (data) => {
    if (data === "yes") {
      setNextBtn(false);
    }
  };

  const HandelSubmit = () => {
    let data  = {email, NewPassword}
    PostForSignUp(data);
  };

  return (
    <Box className={style.mainBox}>
      <Box>
        <Heading color={"#666"} as="h4" size="xl">
          Enter New Password{" "}
        </Heading>
      </Box>

      <Box>
        <Box pb="15px">
          <Input
            type="NewPassword"
            value={NewPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            borderRadius="0px"
            _hover="none"
            placeholder="New Password"
            border="none"
            borderBottom={"1px solid black"}
          />
        </Box>
        <Text color={"#35A7FF"}>Try To Create Strong Password</Text>
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
          Submit
        </button>
      </Box>

      <Box justifyContent={"start"} display="grid">
        <button
          onClick={() => setRoute_forgate_Chgange(true)}
          className={style.btnNextcolor}
        >
          Back
        </button>
      </Box>
    </Box>
  );
};

export default ChangePassword;
