import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, 
    Image,
useDisclosure} from '@chakra-ui/react'
import React from 'react'
import Login from './Login'

const ModalLogin = ({title}) => {

      const { isOpen, onOpen, onClose } = useDisclosure();

  return (
          <>
            <Button bg="none" w="auto" onClick={onOpen}>{title == "yes" ? <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo"  style={{height:"25px"}}/> : title}</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}  >
              <ModalOverlay  />
              <ModalContent m="3.5rem"  pl="0px" pb="10px" pr={["10px", "720px"]}  w={["25rem", "80rem"]}  >
                <ModalCloseButton />
                <ModalBody>
                <Login onClose={onClose}/>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
  )
}

export default ModalLogin
