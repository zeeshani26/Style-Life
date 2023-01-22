import { Box, Button, Heading, Image, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import "./SingleProduct.css";
import axios from "axios";

const SingleProduct = () => {
  const getCart = async () => {
    let res = await axios
      .get(`https://glorious-bass-poncho.cyclic.app/restro/cart`)
      .then((res) => {
        setCart([...cart, res.data]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const postCart = async (restroId, dealid) => {
    await axios
      .post(`https://glorious-bass-poncho.cyclic.app/restro/cart/add`, {
        restroId: restroId,
        dealId: dealid,
      })
      .then((res) => console.log("Adding to cart", res))
      .catch((err) => console.log(err));
  };
  const toast = useToast();
  const [cart, setCart] = useState([]);
  const [restroId, setRestroId] = useState("");
  const [dealid, setDealid] = useState("");
  const [total, setTotal] = useState(0);
  let product = JSON.parse(localStorage.getItem("product"));
  // console.log(product);
  useEffect(() => {
    product = JSON.parse(localStorage.getItem("product")) || {};
    setRestroId(product._id);
  }, [product, total]);

  const handleAdd = async (e) => {
    // console.log(e);
    setDealid(e._id);
    let pri = e.price.split(",").join("");
    e.price = Number(pri);
    toast({
      title: "Item Added.",
      description: "Use Cart to Checkout",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    postCart(restroId, dealid);
    getCart();
    // let res = await getCart();
    // console.log(res);
    // setCart(res);

    // setTotal(total + Number(pri));
  };
  console.log("DealID:", dealid, "RestroID:", restroId);
  console.log(cart);
  return (
    <Box className="main">
      <Box className="first">
        <Box textAlign={"left"}>
          <Text
            color={"RGB(153, 153, 153)"}
            fontSize={["8.5px", "11px"]}
            fontWeight={"700"}
          >
            Best Offers
          </Text>
          <Text
            color={"RGB(51, 51, 51)"}
            fontSize={{ base: "16px", md: "20px", lg: "28px" }}
            fontFamily={"Open Sans"}
            fontWeight="800"
          >
            {product.name}
          </Text>
          <Text
            color={"RGB(102, 102, 102)"}
            fontSize={{ base: "10px", md: "14px", lg: "18px" }}
            fontFamily={"Open Sans"}
            fontWeight="600"
          >
            {product.address}
          </Text>
        </Box>
        <Box
          boxSize={{ base: "35%", md: "30%" }}
          pr={{ base: "0px", md: "14px", lg: "18px" }}
        >
          <Image src={product.img_src} />
        </Box>
      </Box>
      <Box className="sec">
        <Box
          border={"1px solid #E0E0E0"}
          borderTop="4px solid #F47B58"
          width={"fit-content"}
          margin="left"
          backgroundColor={"white"}
        >
          <Heading
            color={"RGB(51, 51, 51)"}
            fontWeight="600"
            fontFamily={"Open Sans"}
            fontSize={{ base: "14px", md: "20px" }}
            padding={{ base: "18px 26px", md: "22px 34px" }}
          >
            Deals
          </Heading>
        </Box>
        <Box className="secmain">
          <Box
            className="dmain"
            display="flex"
            justifyContent={"space-between"}
            width="70%"
            border={"0px solid yellow"}
            backgroundColor="white"
          >
            <Box display={"flex"} flexDirection="column">
              {/* Start */}
              {product.deals.map((ele) => (
                <Box
                  display="flex"
                  flexDirection={"column"}
                  fontFamily="Open Sans"
                  key={ele._id}
                  mt="10px"
                >
                  <Box
                    className="dsingle"
                    padding={"30px 10px"}
                    border="0px solid green"
                  >
                    <Box textAlign={"left"}>
                      <Text
                        color={"RGB(153, 153, 153)"}
                        fontSize="13px"
                        fontWeight="600"
                      >
                        {Math.floor(Math.random() * 1000)} Bought
                      </Text>
                    </Box>
                    <Box>
                      <Box
                        display={"flex"}
                        border={"0px solid red"}
                        justifyContent="space-between"
                        width="100%"
                        mr={{
                          base: "0px",
                          sm: "100px",
                          md: "200px",
                          lg: "350px",
                        }}
                      >
                        <Box textAlign={"left"}>
                          <Text
                            color={"RGB(51, 51, 51)"}
                            fontSize={{ base: "10px", md: "14px", lg: "18px" }}
                            fontWeight="700"
                            mt={"12px"}
                          >
                            {ele.name}
                          </Text>
                          <Text
                            color={"RGB(52, 168, 83)"}
                            fontWeight="400"
                            fontSize={{ base: "8px", md: "10px", lg: "14px" }}
                            mt={"6px"}
                          >
                            Free Cancellation
                          </Text>
                          <Text
                            color={"RGB(102, 102, 102)"}
                            fontWeight="400"
                            fontSize={{ base: "9px", md: "12px", lg: "16px" }}
                            mt={"16px"}
                            pb="30px"
                          >
                            Valid for : 1 Person | Valid on : All Days | Timings
                            : 7 PM - 11 PM
                          </Text>
                        </Box>
                        <Box border={"0px solid green"} fontFamily="Open Sans">
                          <Text
                            backgroundColor={"#F6FFF7"}
                            color="RGB(52, 168, 83)"
                            border={"1px solid #34A853"}
                            fontSize="10px"
                            width={"fit-content"}
                            margin="0px auto"
                            padding={"2px 5px"}
                          >
                            {ele.discount}
                          </Text>
                          <Box
                            display={"flex"}
                            fontFamily="Open Sans"
                            mt="10px"
                            textAlign={"center"}
                            justifyContent={"space-evenly"}
                          >
                            <Text
                              textDecoration={"line-through"}
                              color="RGB(102, 102, 102)"
                              fontSize={{ base: "8px", md: "10px", lg: "13px" }}
                              fontWeight="400"
                              alignSelf={"center"}
                            >
                              {ele.discounted_price}
                            </Text>
                            <Text
                              color={"RGB(51, 51, 51)"}
                              fontSize={{
                                base: "10px",
                                md: "12px",
                                lg: "18px",
                              }}
                              fontWeight={"700"}
                            >
                              {ele.price}
                            </Text>
                          </Box>
                          <Text
                            fontSize={{ base: "8px", md: "10px", lg: "13px" }}
                            fontWeight="400"
                            color={"RGB(153, 153, 153)"}
                          >
                            Inc. of all taxes
                          </Text>
                          <Button
                            colorScheme={"red"}
                            mt={"20px"}
                            loadingText="Adding"
                            pl={{ base: "14px", md: "18px", lg: "25px" }}
                            pr={{ base: "14px", md: "18px", lg: "25px" }}
                            fontSize={{
                              base: "12px",
                              sm: "14px",
                              md: "15px",
                              lg: "16px",
                            }}
                            onClick={() => handleAdd(ele)}
                          >
                            ADD +
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    border={"1px solid #ECECEC"}
                    width="95%"
                    margin={"auto"}
                  ></Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            className="cart"
            border={"0px solid blue"}
            fontFamily="Open Sans"
            width={"28.5%"}
          >
            <Box>
              <Box
                backgroundColor={"#dbdbdb"}
                padding={{ base: "3px", md: "6px", lg: "10px" }}
                borderTopRadius="5px"
              >
                <Text
                  fontWeight={"700"}
                  fontSize={{ base: "13px", md: "15px", lg: "17px" }}
                  color="RGB(51, 51, 51)"
                >
                  Your order
                </Text>
              </Box>
              <Box
                backgroundColor={"white"}
                p={{ base: "10px", lg: "14px" }}
                pb={{ base: "24px", lg: "34px" }}
                fontFamily="Open Sans"
              >
                <Box display={"flex"} flexDirection="column" p={"14px 0px"}>
                  {/* Map starts here */}
                  {cart.length != 0 ? (
                    cart.map((e) => (
                      <Box display={"flex"} justifyContent="space-between">
                        <Box
                          className="itemName"
                          fontSize={"13px"}
                          fontWeight="400"
                          color="RGB(51, 51, 51)"
                        >
                          {e.name}
                        </Box>
                        <Box
                          className="itemQty"
                          fontSize={"14px"}
                          fontWeight="400"
                          color={"RGB(51, 51, 51)"}
                        >
                          x 1
                        </Box>
                        <Box
                          className="itemPrice"
                          fontSize={"14px"}
                          fontWeight="700"
                          color={"#515151"}
                        >
                          ₹{e.price}
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <Text>Add Items</Text>
                  )}
                </Box>
                <Box width="80%" margin="auto" border="1px solid #dbdbdb"></Box>
                <Box
                  className="total"
                  display={"flex"}
                  justifyContent="space-between"
                  pt="20px"
                  pb="26px"
                >
                  <Box textAlign={"left"} border="0px solid black">
                    <Text
                      color={"RGB(102, 102, 102)"}
                      fontSize="16px"
                      fontWeight={"semibold"}
                    >
                      Total
                    </Text>
                    <Text
                      color="RGB(102, 102, 102)"
                      fontSize={"12px"}
                      fontWeight="400"
                    >
                      Inc. of all taxes
                    </Text>
                  </Box>
                  <Box
                    color="RGB(51, 51, 51)"
                    fontSize={"16px"}
                    fontWeight="700"
                  >
                    ₹{total}
                  </Box>
                </Box>
                <Button
                  colorScheme={"red"}
                  loadingText="Moving"
                  pl={{ base: "0%", md: "30%", lg: "39%" }}
                  pr={{ base: "0%", md: "30%", lg: "39%" }}
                  fontWeight={"700"}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "15px",
                    lg: "16px",
                  }}
                  fontFamily={"Open Sans sans-serif"}
                  borderRadius="3px"
                >
                  BUY NOW
                </Button>
                <Text
                  fontFamily={"Open Sans"}
                  fontSize="14px"
                  fontWeight={"400"}
                  color="RGB(102, 102, 102)"
                  mt="16px"
                >
                  Say Hi to Savings !
                </Text>
              </Box>
            </Box>
            <Box
              backgroundColor={"white"}
              padding="16px"
              pb="20px"
              mt="50px"
              textAlign={"left"}
              border="1px solid #dbdbdb"
            >
              <Text
                fontFamily="Open Sans"
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="700"
              >
                Win Rs 500 instant off code
              </Text>
              <Text
                mt={"30px"}
                fontSize={{ base: "8px", md: "10px", lg: "14px" }}
                fontFamily={"Open Sans"}
                fontWeight="600"
                lineHeight={"18px"}
              >
                Valid on all prepaid deals | No minimum purchase
              </Text>
              <Box
                border={"1px dotted black"}
                width={"fit-content"}
                pl="4px"
                mt="10px"
              >
                <Flex justifyContent={"space-between"} alignItems="center">
                  <Text
                    fontWeight={600}
                    fontSize={{
                      base: "8px",
                      sm: "10px",
                      md: "12px",
                      lg: "14px",
                    }}
                    color={"#5FA6DB"}
                    fontFamily="Open Sans"
                  >
                    NBLUCKY
                  </Text>
                  <Text
                    fontSize={{
                      base: "8px",
                      sm: "10px",
                      md: "12px",
                      lg: "14px",
                    }}
                    fontWeight="light"
                    backgroundColor={"#E1E9EC"}
                    fontFamily="Open Sans"
                    pr="4px"
                    pl="4px"
                  >
                    Copy
                  </Text>
                </Flex>
              </Box>
              <Box
                width="100%"
                margin="auto"
                mt={"14px"}
                border="1px solid #dbdbdb"
              ></Box>
              <Flex justifyContent={"space-between"} mt="14px">
                <Text
                  color={"RGB(102, 102, 102)"}
                  fontSize="12px"
                  fontWeight={"600"}
                >
                  Valid till 02 Feb 2023
                </Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="600"
                  color={"RGB(239, 83, 78)"}
                >
                  Know more
                </Text>
              </Flex>
            </Box>
          </Box>
          {/* nOT HERE */}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
