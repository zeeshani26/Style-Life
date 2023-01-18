import React from 'react'
import  "../Navbar/Navbar.css";
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Spacer, useDisclosure} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon} from '@chakra-ui/icons'
import log from "../logo/logo.jpg"

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
 
 <Box> <Button bg={"none"}> <Link to="/mens">MENS</Link> </Button></Box>
 <Spacer />
 <Box> <Button bg={"none"}> <Link to="/womens">WOMENS</Link> </Button></Box>
 <Spacer />
   <Box><Button bg={"none"}> <Link to="/kids">KIDS</Link> </Button></Box>
   <Spacer />
  <Box><Button bg={"none"}> <Link to="/home">HOME&LIVING</Link> </Button></Box>

  <Spacer />
  <Box><Button bg={"none"}> <Link to="/beauty">BEAUTY</Link> </Button></Box>

  

  <Spacer />
  <Input placeholder='Search for products,Brands and more'  width={"18%"}  size='sm' variant='filled'/>

  <Spacer />

   <Box className={"flex"} >
    < >
    <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    />
    <Spacer />
    <Button bg={"none"}> <Link to="/login">Profile</Link> </Button>
    </>
   </Box>

   <Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/978/882/png-transparent-wishlist-save-save-for-later-shopping-ecommerce-favorite-add-to-wishlist-ecommerce-online-shopping-icon-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />
 <Button bg={"none"}> <Link to="/login">Wishlist</Link> </Button>
 </>
</Box>

<Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />
 <Button bg={"none"}> <Link to="/login">Bag</Link> </Button>
 </>
</Box>
  

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
    <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    />
   
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
