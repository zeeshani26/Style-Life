import { Box, Button, Flex, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DelRestro, UpdateRestro } from '../../../Redux/Admin/AdminTypes'
import "./AdminRestro.scss"
const AdminRestro = ({Data}) => {
    const { isOpen:isUpdateOpen, onOpen:OnUpdateOpen, onClose:onUpdateClose } = useDisclosure()
    const { isOpen:isDeleteOpen, onOpen:OnDeleteOpen, onClose:onDeleteClose } = useDisclosure();
    const [updateName, setUpdateName] = useState("");
    const [updateAddress, setUpdateAddress] = useState("")
    const [updateOffers, setUpdateOffers] = useState("")
    const [updateImage, setUpdateImage] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (id)=>{
      const payload = {
        name:updateName,
        address:updateAddress,
        offers:updateOffers,
        img_url:updateImage
      }
      dispatch(UpdateRestro(payload,id));
    }    
  return (
    <>
     <Modal isOpen={isUpdateOpen} onClose={onUpdateClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update the deal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem   count={2} /> */}
            Fill the required Details which you want to update
            <form action="" style={{display:'flex',flexDirection:'column'}} onSubmit={(e)=>{
              e.preventDefault();
              onUpdateClose();
              handleSubmit(Data._id)
            }}>
              <label htmlFor="">Name</label>
              <Input onChange={(e)=>setUpdateName(e.target.value)} type="text" placeholder='name' />
              <label htmlFor="">Address</label>
              <Input onChange={(e)=>setUpdateAddress(e.target.value)} type="text" placeholder='name' />
              <label htmlFor="">Offers</label>
              <Input onChange={(e)=>setUpdateOffers(e.target.value)} type="text" placeholder='name' />
              <label htmlFor="">Image</label>
              <Input onChange={(e)=>setUpdateImage(e.target.value)} type="text" placeholder='name' />
              <Input type={'submit'} value='Update'/>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onUpdateClose}>
              Close
            </Button>
            {/* <Button colorScheme='blue' mr={3} onClick={()=>{
              onUpdateClose();
              handleUpdateRestro(Date._id)
            }}>
              Update
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* for deleting the restros */}
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete the Restaurant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem   count={2} /> */}
            Are you sure you want to Delete the Restaurant?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onDeleteClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={()=>{
              onDeleteClose();
              console.log(Data);
              dispatch(DelRestro(Data._id))  
            }}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Box className="flip-card" w='100%' >
    <Box className="flip-card-inner">
        <Box className="flip-card-front">
        <Flex flexDirection={'column'}>
        <Box w='90%' m='auto' border='1px solid green'>

        <Image src={Data.img_src} alt="" m='auto'  />
        </Box>
        <h3>{Data.name}</h3>
        <h3>{Data.address}</h3>
        <h3>{Data.rating}</h3>
        <h3>{Data.bought}</h3>
      </Flex>


        </Box>
        <div className="flip-card-back">
            <Button onClick={OnUpdateOpen} mb='1rem' ml='auto' mr='auto' w='50%' colorScheme={'telegram'}>Update</Button>
            <Button onClick={OnDeleteOpen} mb='1rem' ml='auto' mr='auto' w='50%' colorScheme={'telegram'}>Delete</Button>
        </div>
    </Box>
</Box>
    </>
  )
}

export default AdminRestro