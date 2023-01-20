import React from 'react'
import  "../Navbar/Navbar.css";
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon,ChevronDownIcon} from '@chakra-ui/icons'
import log from "../logo/logo.jpg"
import ModalLogin from "../Login/Modal"
import loc from "../logo/location.png"

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (

    <>
    <div className="mobilenav">
    
     <Box >
  <Image src={log} alt='Dan Abramov' style={{height:"40px"}} />
 
</Box>
         <Spacer />
 
 <Box className='checkbox'>
    <Box className='locationbox'>
        <Image src={loc} alt="location" w={"20px"} />
        <p>Select Location</p>
    </Box>
 <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Lucknow
  </MenuButton>
  <MenuList>
    <MenuItem>Mumbai</MenuItem>
    <MenuItem>Banglore </MenuItem>
    <MenuItem>Delhi</MenuItem>
    <MenuItem>Noida</MenuItem>
    <MenuItem>Kolkata</MenuItem>
  </MenuList>
</Menu>
 </Box>

  

  <Spacer />
  <Input placeholder='Search Resturent,spa,events'  width={"38%"}  size='sm' variant='filled'/>
 <button className='searchbtn'>Search</button>
  <Spacer />

   

   <Spacer />

  <div className='rightsidebox'>
  <Box className={"flex"} >
    < >
    <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    />
    <Spacer />
    <Button bg={"none"}> <ModalLogin title={"Login"}/></Button>
    <Button bg={"none"}> <Link to="/login">Login/signup</Link> </Button>
    </>
   </Box>
  
  </div>
  

   </div>

   <div className='drawer'>
  
  <Box className='drawer-btn'>
  <Button ref={btnRef} colorScheme='transparent' onClick={onOpen} >
   <HamburgerIcon style={{ color:"black",height:"60px",width:"30px"}} />
    </Button>
  </Box>
     <Box className='drawer-logo'>
     <Image src={log} alt="logo" s/>
    
     </Box>
         
         <Box id='drawer-flex'>
         <Box className={"flex"} >
    < >
    {/* <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    /> */}

    <ModalLogin title={"yes"} />
   
    </>
   </Box>

   <Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/978/882/png-transparent-wishlist-save-save-for-later-shopping-ecommerce-favorite-add-to-wishlist-ecommerce-online-shopping-icon-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />

 </>
</Box>

<Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />

 </>
</Box>
         </Box>



       <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box >
  <Image src='https://i0.wp.com/fashionmostwanted.com/wp-content/uploads/2022/02/0c3b9-myntra-logo.jpeg?fit=1200%2C706&ssl=1' alt='Dan Abramov'  />
</Box>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </div>

   </>
  )
}

export default Navbar
