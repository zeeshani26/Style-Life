import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const ModalLogin = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [UserLogin, setUserLogin] = useState(false);
  const [Admin, setAdmin] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("StyleLifeUserData")) || "";
    token = token.token;
    if (token == undefined) {
      setUserLogin(true);
    } else {
      setUserLogin(false);
    }
  });

  const HandelLogOut = () => {
    setUserLogin(true);
    localStorage.removeItem("StyleLifeUserData");
    localStorage.removeItem("StyleLifeAdminData");

    navigate("/")
  };

  return (
   <>
    <Button>
      {UserLogin ? (
        <>
          <Button bg="none" w="auto" onClick={()=>{
            onOpen();
           
          }}>
            {title == "yes" ? (
              <Image
                src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png"
                alt="acntlogo"
                style={{ height: "25px" }}
              />
            ) : (
            title
            )}
          </Button>
       
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              m="3.5rem"
              pl="0px"
              pb="10px"
              pr={["10px", "720px"]}
              w={["25rem", "80rem"]}
            >
              <ModalCloseButton />
              <ModalBody>
               
                <Login setAdmin={setAdmin} onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
       <Button>
        <Button onClick={HandelLogOut}>Logout</Button>
       
        </Button>
      )}
    </Button>
   <Button display={Admin=="" ? 'none' : 'block'} onClick={()=>navigate("/admin")}>{Admin == "" ? "" :  Admin}</Button>
   </>
  );
};

export default ModalLogin;
