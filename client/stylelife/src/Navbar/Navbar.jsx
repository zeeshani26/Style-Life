import React from 'react'
import  "../Navbar/Navbar.css";
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure,Text, ListItem, UnorderedList} from "@chakra-ui/react"
import {Link, NavLink} from "react-router-dom"
import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon,ChevronDownIcon} from '@chakra-ui/icons'
import log from "../logo/logo.jpg"
import loc from "../logo/location.png"
import {useNavigate} from "react-router-dom"
import styles from "../Homepage/css/Nav.css"

const links=[
  {path:"/resturent",title:`Resturent`,logo:"https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png"},{path:"/buffet",title:"Buffet",logo:"https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png"},{path:"/saloon",title:"Saloon",logo:"https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png"},{path:"/spa",title:"Spa",logo:"https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png"},{path:"/activities",title:"Activities",logo:"https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png"},{path:"/gift",title:"Gift",logo:"https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png"}
]

const Navbar = () => {
  const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (

    <>
    <div className="mobilenav">
    
     <Box className='logobox' >
  <Image src={log} alt='Dan Abramov' style={{height:"40px"}} onClick={()=>navigate("/")} />
 
</Box>
         <Spacer />
 
 <Box className='checkbox'>
    <Box className='locationbox'>
        <Image src={loc} alt="location" w={"20px"} />
        <p>Select Location</p>
    </Box>
 <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Mumbai
  </MenuButton>
  <MenuList>
    <MenuItem>Lucknow</MenuItem>
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
    <Button bg={"none"}> <Link to="/signup">Login/signup</Link> </Button>
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

 
 <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Mumbai
  </MenuButton>
  <MenuList>
    <MenuItem>Lucknow</MenuItem>
    <MenuItem>Banglore </MenuItem>
    <MenuItem>Delhi</MenuItem>
    <MenuItem>Noida</MenuItem>
    <MenuItem>Kolkata</MenuItem>
  </MenuList>
</Menu>
 

     <Box className='drawer-logo'>
     <Image src={log} alt="logo" onClick={()=>navigate("/")}/>
    
     </Box>
         
         <Box id='drawer-flex'>
         <Box className={"flex"} >
    < >
    <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    />
    <Button bg={"none"}> <Link to="/login">Login</Link> </Button>
    </>
   </Box>

   <Spacer />


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
  <Image src={log} alt='Dan Abramov' onClick={()=>navigate("/")} />
</Box>

          <DrawerBody>
          <Box >
          {links.map((el)=>{
            return (
             <Box className='drawernavbar'>
               <UnorderedList>
                 <ListItem key={el.title} className="navlink" onClick={()=>navigate(`${el.path}`)}>{el.title} </ListItem>
              </UnorderedList>
              <Image src={el.logo} alt="logo"  h={"30px"} />
             </Box>
            )
        })}

           </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button  colorScheme='red' mr={3} onClick={onClose}>
              Cancel
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </div>

   </>
  )
}

export default Navbar
