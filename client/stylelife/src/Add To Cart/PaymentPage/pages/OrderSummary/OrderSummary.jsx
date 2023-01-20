import {
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import style from "./styles/OrderSummary.module.css";

const OrderSummary = () => {
  let obj = {
    imgUrl: "https://img4.nbstatic.in/tr:w-350/5ffed18ac2e889000b575bed.jpg",
    rating: 4.6,
    title: "Lotus Cafe - JW Marriott Mumbai Juhu",
    text: "Juhu Road, Juhu",
    bougth: 1158,
    dealse: { text: "Buffet Offer", price: 2558 },
    address: "Juhu Road, JW Marriott, Juhu Tara Road, Mumbai",
    phoneNo: "+91 7715098322, +91 9833710363",
    singlePageImage: [
      "https://img4.nbstatic.in/tr:w-500/5ffed18ac2e889000b575bed.jpg",
      "https://img4.nbstatic.in/tr:w-500/5ffecfb6c2e889000b575be9.jpg",
      "https://img4.nbstatic.in/tr:w-500/5ffed1b2e1ecca000b032b78.jpg",
      "https://img4.nbstatic.in/tr:w-500/5ffd323bc2e889000b5756b1.jpg",
    ],
    id: 9099433416907.688,
  };

  return (
    <>
      <Box
        className={style.summaryBox}
        m="1rem"
        p="1rem"
        bg="white"
        borderRadius={"3px"}
      >
        <Box>
          <Heading
            justifyContent={"flex-start"}
            display="flex"
            as="h3"
            size="lg"
          >
            Order summary
          </Heading>
        </Box>

        <Divider mb="8px" />

        <Box>
          {" "}
          <Flex>
            <Box>
              <Image w="50px" src={obj.imgUrl} />
            </Box>
            <Box>
              <Text>{obj.title}</Text>
              <Text>{obj.address}</Text>
            </Box>
          </Flex>
        </Box>
        <Divider mb="8px" />

        <Box className={style.summaryBox}>
          <Box>
            {" "}
            <Text display={"flex"} justifyContent={"flex-start"}>
              {obj.dealse.text}
            </Text>
          </Box>
          <Flex>
            <Box>Qty 1</Box>
            <Spacer />
            <Box>$ 750</Box>
          </Flex>
        </Box>
      </Box>

      <Box className={style.summaryBox} m="1rem" p="1rem" bg="white" borderRadius={"3px"}>
        <Flex>
          <Box>
            <Text>Subtotal (Qty. 1)</Text>
          </Box>
          <Spacer />
          <Box>$ 750</Box>
        </Flex>

        <Divider mb="8px" />

        <Flex>
          <Box>
            <Text>Convenience Fees</Text>
          </Box>
          <Spacer />
          <Box>$ 20</Box>
        </Flex>

        <Divider mb="8px" />

        <Box justifyContent={"flex-start"} display="grid">
          <Text color="red">View & Apply promo code</Text>
        </Box>

        <Divider mb="8px" />

        <Flex>
          <Box>Total</Box>
          <Spacer />
          <Box>
            <Text>$ 770</Text>
            <Text color="blue.500" >You save 900</Text>
            <Text color="blue.500">Inclusive of all taxes</Text>
          </Box>
        </Flex>

      </Box>
    </>
  );
};

export default OrderSummary;
