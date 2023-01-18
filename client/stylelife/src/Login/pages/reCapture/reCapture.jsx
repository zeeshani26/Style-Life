import {
  Box,
  Icon,
  Checkbox,
  CircularProgress,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./style/reCapture.module.css";
import { CheckIcon } from "@chakra-ui/icons";

import CheckedBox from "./pages/CheckedBox";
import ReCapImageBox from "./pages/ReCapImageBox"

const ReCapture = ({ nextButtonValue }) => {
  const [state, setstate] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [cheackedIcon, setcheackedIcon] = useState(false);

  const changeState = () => {
    let id;
    id = setTimeout(() => {
      setcheackedIcon(true);
    }, 3000);
  };

  return (
    <Box className={style.mainBox}>
      {state && <div>Verification expired. Check the checkbox again.</div>}

        <Box display={"flex"} className={style.reCaptchBox}>
          <Box display={"flex"}>
            {cheackedIcon ? (
              <Box display={"grid"} alignContent={"center"}>
                {" "}
                <Icon as={CheckIcon} w={8} h={8} color="red.500" />{" "}
              </Box>
            ) : Loading ? (
              <CheckedBox
                nextButtonValue={nextButtonValue}
                setLoading={setLoading}
                changeState={changeState}
              />
            ) : (
              <Box display={"grid"} alignContent={"center"}>
                <CircularProgress
                  isIndeterminate
                  color="green.300"
                  size="30px"
                />{" "}
              </Box>
            )}
            <Box  pl="20px" justifyContent={"flex-start"}>
              I'am not a robot
            </Box>
          </Box>

          <Spacer />


          <ReCapImageBox />



        </Box>


    </Box>
  );
};

export default ReCapture;
