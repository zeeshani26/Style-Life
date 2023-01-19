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

  return (
    <>
      <Box
        mt={4}
        textAlign="left"
        fontSize="15px"
        cursor="pointer"
        marginTop="45px"
      >
        <Box backgroundColor={"white"} padding="10px" pb="2px">
          <Text fontFamily="Open Sans" fontSize={"20px"} fontWeight="700">
            Win Rs 500 instant off code
          </Text>
          <Text
            mt={"100px"}
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
                pr="2px"
                pl="2px"
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
        </Box>
        <Flex
          flexDirection="column"
          gap={2}
          backgroundColor={"white"}
          mt="20px"
        >
          <Accordion allowToggle>
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
                  <Checkbox
                    onChange={() => {
                      dispatch(getdata(1, "", "", category));
                      norm();
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      All
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val1, page, sort, order, category));
                      tognormal(val1);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val1}
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val2, page, sort, order, category));
                      tognormal(val2);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val2}
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val3, page, sort, order, category));
                      tognormal(val3);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val3}
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val3, page, sort, order, category));
                      tognormal(val3);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val3}
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val3, page, sort, order, category));
                      tognormal(val3);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val3}
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val3, page, sort, order, category));
                      tognormal(val3);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val3}
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(filterdata(val3, page, sort, order, category));
                      tognormal(val3);
                      onClick();
                    }}
                  >
                    <Text className="hovereffect" color="grey">
                      {val3}
                    </Text>
                  </Checkbox>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
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
                    Restaurants
                  </Text>
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
