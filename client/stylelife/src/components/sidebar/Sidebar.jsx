import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Text,
  Divider,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
} from "@chakra-ui/react";

import { filterdata, getdata } from "../../Redux/products/Prodaction";

import { useDispatch } from "react-redux";

import "../Products.css";

const SidebarContent = ({
  onClick,
  show,
  dispatch,
  page,
  sort,
  order,
  tognormal,
  norm,
  category,
}) => {
  let val1 = "Andheri East";
  let val2 = "Andheri West";
  let val3 = "Borivali West";
  let val4 = "Ghatkopar East";
  let val5 = "Ghatkopar West";
  let val6 = "Bandra West";
  let val7 = "Charni Road";
  let cat;
  if (category === "spa") {
    cat = "Spa & Massage";
  } else if (category === "health") {
    cat = "Health & Wellness";
  } else {
    cat = "Restaurants";
  }

  return (
    <>
      <Box
        mt={4}
        textAlign="left"
        fontSize="15px"
        cursor="pointer"
        marginTop="45px"
      >
        <Box
          backgroundColor={"white"}
          padding="16px"
          pb="20px"
          mt="50px"
          textAlign={"left"}
          border="1px solid #dbdbdb"
        >
          <Text fontFamily="Open Sans" fontSize={"20px"} fontWeight="700">
            Win Rs 500 instant off code
          </Text>
          <Text
            mt={"30px"}
            fontSize="14px"
            fontFamily={"Open Sans"}
            fontWeight="600"
            lineHeight={"18px"}
          >
            Valid on all prepaid deals | No minimum purchase
          </Text>
          <Box border={"1px dotted black"} width="45%" pl="4px" mt="10px">
            <Flex justifyContent={"space-between"} alignItems="center">
              <Text
                fontWeight={600}
                fontSize={"14px"}
                color={"#5FA6DB"}
                fontFamily="Open Sans"
              >
                NBLUCKY
              </Text>
              <Text
                fontSize={"14px"}
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
            <Text fontSize={"12px"} fontWeight="600" color={"RGB(239, 83, 78)"}>
              Know more
            </Text>
          </Flex>
        </Box>
        <Flex
          flexDirection="column"
          gap={2}
          backgroundColor={"white"}
          mt="20px"
        >
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Categories
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column">
                  <Text className="hovereffect" color="grey">
                    {cat}
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Location
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column">
                  <Box
                    onClick={() => {
                      dispatch(getdata(1, "", "", category));
                      norm();
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      All
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val1, page, sort, order, category));
                      tognormal(val1);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val1}
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val2, page, sort, order, category));
                      tognormal(val2);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val2}
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val3, page, sort, order, category));
                      tognormal(val3);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val3}
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val4, page, sort, order, category));
                      tognormal(val4);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val4}
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val5, page, sort, order, category));
                      tognormal(val5);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val5}
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val6, page, sort, order, category));
                      tognormal(val6);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val6}
                    </Text>
                  </Box>
                  <Box
                    onClick={() => {
                      dispatch(filterdata(val7, page, sort, order, category));
                      tognormal(val7);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val7}
                    </Text>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Box>
    </>
  );
};

const Sidebar = ({
  isOpen,
  variant,
  onClose,
  page,
  sort,
  order,
  tognormal,
  norm,
  category,
}) => {
  const dispatch = useDispatch();

  return variant === "sidebar" ? (
    <Box left={0} p={5} w="400px" top={0} h="100%">
      {/* Coupon Box here */}
      <Divider mt="13px" />

      <SidebarContent
        onClick={onClose}
        show={variant}
        dispatch={dispatch}
        page={page}
        sort={sort}
        order={order}
        tognormal={tognormal}
        norm={norm}
        category={category}
      />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter </DrawerHeader>
          <DrawerBody>
            <SidebarContent
              onClick={onClose}
              show={variant}
              dispatch={dispatch}
              page={page}
              sort={sort}
              order={order}
              tognormal={tognormal}
              norm={norm}
              category={category}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
