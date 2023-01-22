import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentSucces = () => {
  const [timer, setTimer] = useState(5);
  const [IMage, setIMage] = useState(
    "https://www.cashlesso.com/wp-content/uploads/2020/03/19-March-Final-animation.gif"
  );
  const navigate = useNavigate();

  useEffect(() => {
    let id;
    id = setInterval(() => {
      setTimer((ele) => {
        if (ele <= 1) {
          setIMage(
            "https://service-isib.ru/design/builds/static/img/check-circle.gif"
          );

          localStorage.removeItem("cartData");
          if (ele < -1) {
            navigate("/");
            clearInterval(id);
          }
        }
        return ele - 1;
      });
    }, 1000);

    const cleanup = () => {
      clearInterval(id);
    };
    return cleanup;
  }, []);

  return (
    <Box justifyContent={"center"} pt="1rem" display="grid" pb="10rem">
      <Image src={IMage} />{" "}
    </Box>
  );
};
