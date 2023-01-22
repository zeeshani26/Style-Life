import { Box, Button, Flex, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeType, DelSpa , UpdateSpa } from '../../../Redux/Admin/AdminTypes'
import "./AdminUser.scss"
const AdminUser = ({Data}) => {
  const { isOpen:isDeleteOpen, onOpen:OnDeleteOpen, onClose:onDeleteClose } = useDisclosure(); 
  const dispatch = useDispatch();

  return (
    <>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change the User?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Lorem   count={2} /> */}
          Are you sure you want to Change the User to Admin?
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onDeleteClose}>
            Close
          </Button>
          <Button colorScheme='blue' mr={3} onClick={()=>{
            onDeleteClose();
            console.log(Data);
            dispatch(ChangeType(Data._id))  
          }}>
            Change
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
        <Box className="flip-card" w='100%'>
    <Box className="flip-card-inner">
        <Box className="flip-card-front">
        <Flex flexDirection={'column'}>
        <Box w='70%' m='auto' >

        <Image src={Data.type==='user' ? "https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png" :"https://icon-library.com/images/head-admin-icon-ts3/head-admin-icon-ts3-13.jpg"} alt=""  />
        </Box>
        <h3>{Data.name}</h3>
        <h3>{Data.email}</h3>
        <h3>{Data.type}</h3>
      </Flex>


        </Box>
        <Box className="flip-card-back">
          
            {Data.type==='user' ? 
            <Button mb='1rem' ml='auto' mr='auto' w='50%' colorScheme={'telegram'} onClick={OnDeleteOpen}>Update</Button>
           : <Image src='https://www.onlygfx.com/wp-content/uploads/2016/09/green-approved-stamp-1-1024x772.png'/>}
        </Box>
    </Box>
</Box>
    </>
  )
}

export default AdminUser