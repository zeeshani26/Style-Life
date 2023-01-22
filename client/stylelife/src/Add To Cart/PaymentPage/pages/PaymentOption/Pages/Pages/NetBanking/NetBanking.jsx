import {
  Box,
  Flex,
  Radio,
  Image,
  Spacer,
  Select,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import style from "./style/NetBanking.module.css";

export const NetBanking = ({setOrderPlace}) => {
  let imagesBank1 = [
    "https://1.bp.blogspot.com/-WNdzxIDrBVM/XtX6Jpc6OkI/AAAAAAAABjg/-xNlUdkYlvUqS78GV97b-A_ZcNjvjfe0ACEwYBhgLKtQDAL1Ocqz_9xt-xc1J-AoZE8ZgyQ0QSg8Nuil8zv4nezVzFlrfhQdDO6d58YstTKDVlD3JV4Cwb8ksJ0vHKrgZVItm16PCM190tL4mFbg3qWDjqm-XCmyKEUjeLtMGXBKdS-V_HkKPlpVeVT8etjF1ZymOSKx-cpjXgzlHNubhaAOxDjY9clQLjOg7Cgpl5in4LhXQh23xAiiD8B8KdpQEQ4S1nnxVMOvXRo7IrUSsjyPhZfTPEW2TeZhw2CVDPDTDiqe8LLvw-EiOmOw_I6HAlEIEsXNB-xJGowUf22HAcQZ0ot_2DTs-q7mVy9m8xgTrSlYQR0krNPa4DLevEZDdm97YZKDvnuqckM150BPMOM9ofAtExIYqPBhahQSR7B8a1sGxmqZDarikWzKGjQmnL5PZ7Ss_ny9jXYCi9taAVVJKB_-YUJZPK4ddxHdDcDYiG_jH5kiCoj_zvMQ7s26kkr-C3GcAw1HEUxngczqW445xfWp6tzguL4pycr6UfNLZtT-vXP9mU1i4qpYXubkr8JQKwADxGgfNbmCYst8Sm8Cc4a0VJ7EG3gFPfnLSUIMqzDYN7WoVuUPFU1KH6GxhWnYT_DHq7TdDiL8IFvXc_aJDGvfIMNj51_YF/s1600/kioab1.jpeg",
    "https://th.bing.com/th/id/OIP.0ZVH74eMZj6jjjsLep3iNwHaEK?pid=ImgDet&rs=1",
    "https://static.businessworld.in/article/article_extra_large_image/1584450345_yDoXEg_ICICI_Bank_Logo.jpg",
  ];

  let imagesBank2 = [
    "https://th.bing.com/th/id/R.8135e1496d67f0d4129e5a4aa3134d7a?rik=IBNh0Gkt%2b%2fvcoQ&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f06%2fKotak_Mahindra_Bank_logo.png&ehk=k0WUozxJUQueiZNYeNIDglhsmWufnVTTYn0iBnWItJc%3d&risl=&pid=ImgRaw&r=0",
    "https://1.bp.blogspot.com/-QRORsk0LHqU/V6C6dco0SPI/AAAAAAAAK7o/AWe0eotpcFElnFKYupnjWX4fKvdT28J0ACLcB/s1600/sbi-bank.png",
    "https://th.bing.com/th/id/R.7e6cb234fafae69a58b7cd00712578e8?rik=QB3kDsyO8WiyGg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f06%2fYes_Bank_logo.png&ehk=8PHqelTg6dAn4v2Ee2BdZo6yP7R25CiDdhtLCapkpog%3d&risl=&pid=ImgRaw&r=0",
  ];

  const selectoption = [
    "Cosmos Bank",
    "Union Bank of India",
    "Indian Bank",
    "Canara Bank",
    "UCO Bank",
    "Saraswat Bank",
    "SVC Co-operative Bank Ltd.",
    "State Bank of India",
    "PhonePe/BHIM UPI",
    "AXIS Bank",
    "UPI",
    "Union Bank OLT - Corporate Banking",
    "ICICI Bank",
    "South Indian Bank",
  ];
  return (
    <Box className={style.mainBox}>
      <Box justifyContent={"flex-start"} display="grid">
        <Text>Popular Banks</Text>
      </Box>
      <Flex>
        {imagesBank1.map((ele) => {
          return (
            <Box mr='1' w="15rem">
              <Flex border={"1px solid"}>
                <Box pl="2" pr="2" justifyContent={"center"} display="grid">
                  {" "}
                  <Radio value="1">First</Radio>
                </Box>

                <Box pl="2" pr="2" alignContent={"center"} display="grid">
                  <Image h="70" src={ele} />
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>

      <Flex>
        {imagesBank2.map((ele) => {
          return (
            <Box mr="1"  w="15rem">
              <Flex border={"1px solid"}>
                <Box pl="2" pr="2" justifyContent={"center"} display="grid">
                  {" "}
                  <Radio value="1">First</Radio>
                </Box>

                <Spacer />

                <Box
                  h="70"
                  pl="2"
                  pr="2"
                  alignContent={"center"}
                  display="grid"
                >
                  <Image w="15" src={ele} />
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>

      <Box justifyContent={"flex-start"} display="grid">
        <Text>All Bank</Text>
      </Box>

      <Box>
        <Select placeholder="Select option">
          {selectoption.map((ele) => {
            return <option value="option1">{ele}</option>;
          })}
        </Select>
      </Box>

      <Box justifyContent={"flex-start"} display="grid">
        <Text>
          We will redirect you to bank website to authorize the payment.
        </Text>
      </Box>

      <Box justifyContent={"flex-start"} display="grid">
        <Button  onClick={()=>setOrderPlace(true)} _hover={"none"} borderRadius={"0px"} bg="#ef534e">
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
