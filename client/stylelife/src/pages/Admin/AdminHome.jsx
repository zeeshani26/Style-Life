import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import './AdminHome.scss';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getAllHealth, getAllRestro, getAllSpa } from '../../Redux/Admin/AdminTypes';
import { useState } from 'react';

const AdminHome = () => {
    const {spa,restro,health,AdminLoading} = useSelector(store=>store.admin);
    const [restValue, setRestValue] = useState(true);
    const [spaValue, setSpaValue] = useState(false);
    const [healthValue, setHealthValue] = useState(false);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
      dispatch(getAllRestro())
    },[]);

    const handleUpdate = ()=>{

    }
    console.log(health);
  return (
    <Flex>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update the deal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem   count={2} /> */}
            Fill the required Details which you want to update
            <form action="" style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor="">Name</label>
              <input type="text" placeholder='name' />
              <label htmlFor="">Address</label>
              <input type="text" placeholder='name' />
              <label htmlFor="">Offers</label>
              <input type="text" placeholder='name' />
              <label htmlFor="">Ratings</label>
              <input type="text" placeholder='name' />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <Box w='25%' border={'1px solid black'} h='100vh' className='sidebar'>
    <Text fontWeight={'bold'} fontSize='lg' mb='2rem'>DashBoard</Text>
    <Box>
        <Box className='admin_categories' onClick={()=>{
          setRestValue(true);
          dispatch(getAllRestro ());
          setSpaValue(false);
          setHealthValue(false);
        }}>Restaurants</Box>
        <Box className='admin_categories' onClick={()=>{
               setRestValue(false);
               setSpaValue(true);
               dispatch(getAllSpa());
               setHealthValue(false);
        }}>Spa</Box>
        <Box className='admin_categories' onClick={()=>{
               setRestValue(false);
               setSpaValue(false);
               setHealthValue(true);
               dispatch(getAllHealth())
        }}>Health</Box>
        <Box className='admin_categories'>Users</Box>
        <Box className='admin_categories'>Stats</Box>
    </Box>
    </Box>
    <Box w='72%' border={'1px solid black'} m='auto'>
    <Text fontSize={'lg'} fontWeight='bold' fontStyle={'italic'}>{restValue ? "Restaurants" : spaValue ? "Spa" : "Health"}</Text>
    <Box display={'flex'}  flexWrap={'wrap'} border='1px solid blue' mt='2rem' >

    {
      restValue && restro?.map((el,ind)=>{
        return <Flex key={ind} flexDirection='column' w='33%' border='1px solid red' padding={'1rem'} m='auto'>
          <Box w='90%' m='auto' border='1px solid green'>

          <Image src={el.img_src} alt=""  />
          </Box>
          <h3>{el.name}</h3>
          <h3>{el.address}</h3>
          <h3>{el.offers}</h3>
          <h3>{el.rating}</h3>
          <Flex justifyContent='space-evenly'>
          <Button onClick={onOpen}>Update</Button>
          <Button>Delete</Button>
          </Flex>
        </Flex>
      })
    }
    {
      spaValue && spa?.map((el,ind)=>{
        return <Flex key={ind} flexDirection='column' w='33%' border='1px solid red' padding={'1rem'} m='auto'>
          <Box w='90%' m='auto' border='1px solid green'>

          <Image src={el.img_src} alt=""  />
          </Box>
          <h3>{el.name}</h3>
          <h3>{el.address}</h3>
          <h3>{el.rating}</h3>
          <h3>{el.bought}</h3>
        </Flex>
      })
    }
    {
      healthValue && health?.map((el,ind)=>{
        return <Flex key={ind} flexDirection='column' w='33%' border='1px solid red' padding={'1rem'} m='auto'>
          <Box w='90%' m='auto' border='1px solid green'>

          <Image src={el.img} alt={el.name} />
          </Box>
          <h3>{el.name}</h3>
          <h3>{el.address}</h3>
          <h3>{el.category}</h3>
          <h3>{el.rating}</h3>
        </Flex>
      })
    }

    </Box>
    </Box>
    </Flex>
  )
}

export default AdminHome