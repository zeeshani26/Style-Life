import { Box, Button, ButtonGroup, Flex, Grid, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import './AdminHome.scss';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { AddHealth, AddRestro, AddSpa, getAllHealth, getAllRestro, getAllSpa, getAllUser } from '../../Redux/Admin/AdminTypes';
import { useState } from 'react';
import AdminSpa from './AdminSpa/AdminSpa';
import AdminRestro from './AdminRestro.jsx/AdminRestro';
import AdminHealth from './AdminHealth/AdminHealth';
import Loader from '../../Components/Loader/Loader';
import AdminUser from './AdminUser/AdminUser';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';

const AdminHome = () => {
    const {spa,restro,health,AdminLoading,user} = useSelector(store=>store.admin);
    const { isOpen:isRestroOpen, onOpen:OnRestroOpen, onClose:onRestroClose } = useDisclosure();
    const { isOpen:isSpaOpen, onOpen:OnSpaOpen, onClose:onSpaClose } = useDisclosure();
    const { isOpen:isHealthOpen, onOpen:OnHealthOpen, onClose:onHealthClose } = useDisclosure();
    const [restValue, setRestValue] = useState(true);
    const [spaValue, setSpaValue] = useState(false);
    const [healthValue, setHealthValue] = useState(false);
    const [userValue, setUserValue] = useState(false);
    const [restroAddName, setRestroAddName] = useState("");
    const [restroAddAdress, setRestroAddAddress] = useState("");
    const [restroAddOffers, setRestroAddOffers] = useState("");
    const [restroAddImg, setRestroAddImg] = useState("");
    const [spaAddName,   setSpaAddName] = useState("");
    const [spaAddAdress, setSpaAddAddress] = useState("");
    const [spaAddOffers, setSpaAddOffers] = useState("");
    const [spaAddImg,    setSpaAddImg] = useState("");
    const [healthAddName,   setHealthAddName] = useState("");
    const [healthAddAdress, setHealthAddAddress] = useState("");
    const [healthAddOffers, setHealthAddOffers] = useState("");
    const [healthAddImg,    setHealthAddImg] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllRestro())
    },[]);

    const handleUser = ()=>{
      setRestValue(false);
      setSpaValue(false);
      setHealthValue(false);
      setUserValue(true);
      dispatch(getAllUser ())
    }


const handleRestroPost = (e)=>{
  e.preventDefault();
  const payload={
    img_src:restroAddImg,
    name:restroAddName,
    offers:restroAddOffers,
    address:restroAddAdress
  };
  dispatch(AddRestro(payload))
}
const handleSpaPost = (e)=>{
  e.preventDefault();
  const payload={
    img_src:spaAddImg,
    name:spaAddName,
    category:spaAddOffers,
    address: spaAddAdress
  };
  dispatch(AddSpa(payload))
}

const handleHealthPost = (e)=>{
  e.preventDefault();
  const payload={
    img:healthAddImg,
    name:healthAddName,
    category:healthAddOffers,
    address: healthAddAdress
  };
  dispatch(AddHealth( payload))
}

  return (
    <Flex className='maindiv'>
    <Box w='25%' h='100vh' className='sidebar'>
    <Text fontWeight={'bold'} fontSize='lg' mb='2rem'>DashBoard</Text>
    <Box display={'flex'} flexDirection='column'>
       
        <ButtonGroup w={"100%"}  isAttached variant='outline' >
        <Button  className='admin_categories' fontSize={{base:"xx-small",sm:"sm",md:"md"}} onClick={()=>{
          setRestValue(true);
          dispatch(getAllRestro ());
          setSpaValue(false);
          setHealthValue(false);
        }}>Restaurants</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={OnRestroOpen} />
</ButtonGroup>

<ButtonGroup  w={"100%"} isAttached variant='outline'>
<Button className='admin_categories' fontSize={{base:"xx-small",sm:"sm",md:"md"}} onClick={()=>{
               setRestValue(false);
               setSpaValue(true);
               dispatch(getAllSpa());
               setHealthValue(false);
        }}>Spa</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={OnSpaOpen}/>
</ButtonGroup>
    

<ButtonGroup w={"100%"} isAttached variant='outline'>
<Button className='admin_categories' fontSize={{base:"xx-small",sm:"sm",md:"md"}} onClick={()=>{
               setRestValue(false);
               setSpaValue(false);
               setHealthValue(true);
               dispatch(getAllHealth())
        }}>Health</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={OnHealthOpen} />
</ButtonGroup>
       
<ButtonGroup w={"100%"} isAttached variant='outline'>
<Button className='admin_categories' fontSize={{base:"xx-small",sm:"sm",md:"md"}} onClick={handleUser}>Users</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={OnHealthOpen} />
</ButtonGroup>

<ButtonGroup w={"100%"} isAttached variant='outline'>
<Button className='admin_categories' fontSize={{base:"xx-small",sm:"sm",md:"md"}}>Stats</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={OnHealthOpen} />
</ButtonGroup>
        
        
    </Box>
    </Box>
    {AdminLoading ? <Loader/> : <Box w='72%' m='auto' className='rightbar'>
    <Text fontSize={'lg'} fontWeight='bold' fontStyle={'italic'}>{restValue ? "Restaurants" : spaValue ? "Spa" : "Health"}</Text>
    <Grid className='divide-section' w='full' templateColumns={{sm:"repeat(2,1fr)",md:"repeat(3,1fr)"}} gap='1rem' padding='1rem' >

    {
      restValue ? restro?.map((el,ind)=><AdminRestro key={ind} Data={el} />)
    : spaValue ? spa?.map((el,ind)=><AdminSpa Data={el} key={ind}/>)
    : healthValue ? health?.map((el,ind)=><AdminHealth key={ind} Data={el}/>)
    : user.map((el,ind)=><AdminUser key={ind} Data={el}/>)

    }

    </Grid>
    </Box>}
    {/* for restro adding */}
    <Modal isOpen={isRestroOpen} onClose={onRestroClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Restaurant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem   count={2} /> */}
            Fill the required Details which you want to update
            <form action="" style={{display:'flex',flexDirection:'column'}} onSubmit={handleRestroPost}>
              <label htmlFor="">Name</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setRestroAddName(e.target.value)} />
              <label htmlFor="">Address</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setRestroAddAddress(e.target.value)} />
              <label htmlFor="">Image</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setRestroAddImg(e.target.value)} />
              <label htmlFor="">Offers</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setRestroAddOffers(e.target.value)} />
              <Input type={'submit'}  />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onRestroClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onRestroClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* for spa posting */}
      <Modal isOpen={isSpaOpen} onClose={onSpaClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Spa/Massage Center</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem   count={2} /> */}
            Fill the required Details which you want to update
            <form action="" style={{display:'flex',flexDirection:'column'}} onSubmit={handleSpaPost}>
              <label htmlFor="">Name</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setSpaAddName(e.target.value)} />
              <label htmlFor="">Address</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setSpaAddAddress(e.target.value)} />
              <label htmlFor="">Image</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setSpaAddImg(e.target.value)} />
              <label htmlFor="">Category</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setSpaAddOffers(e.target.value)} />
              <Input type={'submit'}  />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onSpaClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onSpaClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* for health posting */}
      <Modal isOpen={isHealthOpen} onClose={onHealthClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Spa/Massage Center</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem   count={2} /> */}
            Fill the required Details which you want to update
            <form action="" style={{display:'flex',flexDirection:'column'}} onSubmit={handleHealthPost  }>
              <label htmlFor="">Name</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setHealthAddName(e.target.value)} />
              <label htmlFor="">Address</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setHealthAddAddress(e.target.value)} />
              <label htmlFor="">Image</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setHealthAddImg(e.target.value)} />
              <label htmlFor="">Category</label>
              <Input type="text" placeholder='name' required onChange={(e)=>setHealthAddOffers(e.target.value)} />
              <Input type={'submit'} value='Add' colorScheme={'green'} w='50%' mt='1rem' ml='auto' mr='auto' bg={'green.400'} />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onHealthClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default AdminHome