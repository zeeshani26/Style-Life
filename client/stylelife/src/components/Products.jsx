import React from "react";
import "./Products.css";
import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Heading,
  Image,
  Progress,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import Header from "./sidebar/Header";
import Sidebar from "./sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterdata, getdata } from "../Redux/products/Prodaction";
import { StarIcon } from "@chakra-ui/icons";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

const Products = ({ category }) => {
  const [page, setpage] = useState(1);
  const [sort, setsort] = useState("");
  const [order, setorder] = useState(false);
  const [filtval, setfiltval] = useState("");
  const [normal, setnormal] = useState(false);

  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const products = useSelector((store) => store.prodManager);

  const dispatch = useDispatch();

  const tognormal = (val) => {
    setnormal(true);
    setfiltval(val);
  };

  const norm = () => {
    setnormal(false);
  };

  useEffect(() => {
    if (normal === false) {
      dispatch(getdata(page, sort, order, category));
    } else {
      dispatch(filterdata(filtval, page, sort, order, category));
    }
  }, [page, sort, order, category]);

  const sortorder = (val) => {
    if (val === "pop") {
      setsort("pop");
      setpage(1);
    } else {
      setsort("false");
      setorder(!order);
      setpage(1);
    }
  };

  const tolocal = (el) => {
    localStorage.setItem("product", JSON.stringify(el));
    navigate("/ProductDetails");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom={"2%"}
        marginTop={"2%"}
        backgroundColor="#E1E9EC"
      >
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          page={page}
          sort
          order={order}
          tognormal={tognormal}
          norm={norm}
          category={category}
        />
        <Box width="100%">
          <Header
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
            count={10}
            page={page}
            updateCurrentPage={(pan) => setpage(pan)}
            sortorder={sortorder}
            category={category}
          />

          <Divider />

          {products.loading && (
            <Box>
              <Heading>Loading ....</Heading>
              <Progress size="xs" isIndeterminate />
            </Box>
          )}

          {products.data.length === 0 && products.loading == false && (
            <Box>
              {/* <Image
                boxSize="400px"
                m="auto"
                src="https://upload.wikimedia.org/wikipedia/commons/2/22/Sad.gif"
              /> */}
              <Heading>
                Results not found for this Location. Please Select Another
              </Heading>
            </Box>
          )}

          <Grid
            p={6}
            templateColumns={{
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap="20px"
          >
            {products.data?.map((el) => (
              <Box
                backgroundColor={"white"}
                key={el._id}
                onClick={() => tolocal(el)}
              >
                {/* <Link to={`/${el._id}`}> */}
                <Box className="eldiv" textAlign="center" pr="20px" pl="20px">
                  <Image
                    m="auto"
                    mt="18px"
                    src={el.img_src}
                    width="100%"
                    height="160px"
                    alt="title"
                  />
                  <Text
                    color={"RGB(51, 51, 51)"}
                    fontSize="17px"
                    mt={2}
                    textAlign="left"
                    fontFamily={"Open Sans"}
                    fontWeight="700"
                  >
                    {el.name}
                  </Text>
                  <Text
                    className="subtitle"
                    textAlign="left"
                    fontFamily={"Open Sans"}
                    fontSize="13px"
                    fontWeight={"400"}
                    color="RGB(153, 153, 153)"
                  >
                    {el.address}
                  </Text>
                  <Box
                    display="flex"
                    w="fit-content"
                    m="left"
                    mt={2}
                    mb={2}
                    alignItems="center"
                    border={"1px solid #eeeee4"}
                    padding="2px"
                    borderRadius={"8px"}
                    pl="10px"
                    pr="10px"
                  >
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={
                            i < Math.floor(el.rating)
                              ? "yellow.400"
                              : "gray.300"
                          }
                          boxSize={2.5}
                        />
                      ))}
                    <Box
                      as="span"
                      ml="2"
                      mt="3px"
                      color="black"
                      fontSize="10px"
                      fontFamily={"Open Sans"}
                      fontWeight="bold"
                      alignItems="center"
                    >
                      <Text>{el.rating}</Text>
                    </Box>
                  </Box>

                  <Box
                    className="price"
                    height={"fit-content"}
                    alignItems="center"
                  >
                    <Text
                      backgroundColor={"RGB(244, 123, 88)"}
                      color="white"
                      fontSize={"10px"}
                      padding="2.5px"
                      borderRadius={"6px"}
                      fontWeight="500"
                      fontFamily={"Open Sans"}
                    >
                      DEALS
                    </Text>
                    <Text
                      fontWeight="500"
                      fontFamily={"Open Sans"}
                      fontSize={"14px"}
                    >
                      &emsp;{el.offers}
                    </Text>
                  </Box>
                </Box>
                <Box
                  backgroundColor={"#F6F6F6"}
                  pt="4px"
                  mt="20px"
                  pb="4px"
                  textAlign={"left"}
                  color={"gray.600"}
                >
                  <Text>&emsp;&emsp;{el.bought}</Text>
                </Box>
                {/* </Link> */}
              </Box>
            ))}
          </Grid>

          <Box>
            <Box
              mt="15px"
              width={{ sm: "100%", md: "50%", lg: "40%" }}
              m="auto"
            >
              <Pagination
                count={10}
                currentPage={page}
                updateCurrentPage={(pan) => setpage(pan)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;
