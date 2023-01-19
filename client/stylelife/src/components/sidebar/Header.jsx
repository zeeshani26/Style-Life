import { Box, Text, Flex, Select } from "@chakra-ui/react";
import { FaListUl } from "react-icons/fa";
import { useState } from "react";
import Pagination from "../Pagination";
import "../Products.css";

const Header = ({
  showSidebarButton = true,
  onShowSidebar,
  count,
  page,
  updateCurrentPage,
  sortorder,
  category,
}) => {
  const [pop, setpop] = useState("white");
  const [hl, sethl] = useState("white");
  const [lh, setlh] = useState("white");

  const handleAsc = () => {
    setlh("#EF534E");
    setpop("white");
    sethl("white");
    sortorder("asc");
  };
  const handleDesc = () => {
    setlh("white");
    setpop("white");
    sethl("#EF534E");
    sortorder("desc");
  };
  const handlePop = () => {
    setlh("white");
    setpop("#EF534E");
    sethl("white");
    sortorder("pop");
  };

  return (
    <Flex p={3}>
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
          fontSize={{ sm: "10px", md: "15px" }}
          fontWeight={600}
        >
          All in Mumbai
          {/* Category here */}
        </Text>
        <Box
          width={{ sm: "100px", md: "120px", base: "100px" }}
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
        >
          <Text
            textAlign={"center"}
            margin="auto"
            alignItems={"center"}
            fontSize={{ sm: "10px", md: "12px" }}
          >
            Popular
          </Text>
        </Box>
        <Box
          width={{ sm: "100px", md: "120px", base: "100px" }}
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
        >
          <Text
            textAlign={"center"}
            margin="auto"
            alignItems={"center"}
            fontSize={{ sm: "10px", md: "12px" }}
          >
            Price(High to Low)
          </Text>
        </Box>
        <Box
          width={{ sm: "100px", md: "120px", base: "100px" }}
          backgroundColor={lh}
          color={lh == "#EF534E" ? "white" : "#666666"}
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
          onClick={handleAsc}
          className="sortBtn"
        >
          <Text
            fontSize={{ sm: "10px", md: "12px" }}
            textAlign={"center"}
            margin="auto"
            alignItems={"center"}
          >
            Price(Low to High)
          </Text>
        </Box>
      </Box>
      <Box />
    </Flex>
  );
};

export default Header;
