import { Box, Text, Flex } from "@chakra-ui/react";
import { FaListUl } from "react-icons/fa";
import { useState } from "react";
import "./Header.css";

const Header = ({ showSidebarButton = true, onShowSidebar, sortorder }) => {
  const [pop, setpop] = useState("white");
  const [hl, sethl] = useState("white");
  const [lh, setlh] = useState("white");

  const handleAsc = () => {
    setlh("#EF534E");
    setpop("white");
    sethl("white");
    sortorder("desc");
  };
  const handleDesc = () => {
    setlh("white");
    setpop("white");
    sethl("#EF534E");
    sortorder("asc");
  };
  const handlePop = () => {
    setlh("white");
    setpop("#EF534E");
    sethl("white");
    sortorder("pop");
  };

  return (
    <Flex p={3} mt="40px">
      <Box>
        {showSidebarButton && (
          <Flex gap={1} onClick={onShowSidebar} cursor="pointer">
            <Text>Filter</Text>
            <Box mt="5px">
              <FaListUl />
            </Box>
          </Flex>
        )}
      </Box>

      <Box className="sortsec">
        <Text
          color="RGB(51, 51, 51)"
          fontFamily={"Open Sans"}
          fontSize={{ base: "10px", sm: "12px", md: "15px" }}
          fontWeight={600}
        >
          All in Mumbai
          {/* Category here */}
        </Text>
        <Box
          width={{ base: "40px", sm: "60px", md: "100px", lg: "120px" }}
          color={pop == "#EF534E" ? "white" : "#666666"}
          fontSize="10px"
          display={"flex"}
          alignItems="center"
          pr={"2px"}
          pl="2px"
          pt={"5px"}
          pb={"5px"}
          border="1px solid #f2f2f2"
          borderRadius={"8px"}
          height="fit-content"
          onClick={handlePop}
          backgroundColor={pop}
          className="buttons"
          fontWeight="bold"
        >
          <Text
            textAlign={"center"}
            margin="auto"
            alignItems={"center"}
            fontSize={{ base: "8px", sm: "10px", md: "12px" }}
          >
            Popular
          </Text>
        </Box>
        <Box
          width={{ base: "40px", sm: "60px", md: "100px", lg: "120px" }}
          color={hl == "#EF534E" ? "white" : "#666666"}
          fontSize="10px"
          display={"flex"}
          alignItems="center"
          pr={"2px"}
          pl="2px"
          pt={"5px"}
          pb={"5px"}
          border="1px solid #f2f2f2"
          borderRadius={"8px"}
          height="fit-content"
          onClick={handleDesc}
          backgroundColor={hl}
          className="buttons"
        >
          <Text
            textAlign={"center"}
            margin="auto"
            alignItems={"center"}
            fontSize={{ base: "8px", sm: "10px", md: "12px" }}
            fontWeight="bold"
          >
            Name (A-Z)
          </Text>
        </Box>
        <Box
          width={{ base: "40px", sm: "60px", md: "100px", lg: "120px" }}
          backgroundColor={lh}
          color={lh == "#EF534E" ? "white" : "#666666"}
          fontSize="0px"
          display={"flex"}
          alignItems="center"
          pt={"5px"}
          pb={"5px"}
          border="1px solid #f2f2f2"
          borderRadius={"8px"}
          height="fit-content"
          onClick={handleAsc}
          className="buttons"
        >
          <Text
            fontSize={{ base: "8px", sm: "10px", md: "12px" }}
            textAlign={"center"}
            margin="auto"
            alignItems={"center"}
            fontWeight="bold"
          >
            Name (Z-A)
          </Text>
        </Box>
      </Box>
      <Box />
    </Flex>
  );
};

export default Header;  