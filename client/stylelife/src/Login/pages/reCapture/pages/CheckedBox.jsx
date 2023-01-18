import {
    Box,
    Checkbox,
  } from "@chakra-ui/react";
  
const CheckedBox = ({nextButtonValue, setLoading, changeState}) => {
  return (
    <Box display={"grid"} alignContent={"center"}>
    {" "}
    <Checkbox
      onChange={() => {
        nextButtonValue();
        setLoading(false);
        changeState()
      }}
      size="lg"
      border={"1px solid"}
      ml="8px"
      colorScheme="green"
    ></Checkbox>{" "}
  </Box>
  )
}

export default CheckedBox
