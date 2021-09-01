import React from 'react'
import {
  ChakraProvider,
  HStack,
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  VStack,
  Text,
  theme,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  handleClick,
  InputLeftAddon,
} from '@chakra-ui/react';
import logo from '../images/logo_vector.png';
import '../styles/home.css';
import sand from '../images/sand.svg';
import family from '../images/family.png';
import {useHistory} from 'react-router-dom';
import mountain from '../images/mountain.svg';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

const Home = () => {
  const history = useHistory();
  const startRegister = () => {
    history.push('/signup');
  }
  const startSignIn = () => {
    history.push('/signin');
  }

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const {isOpen: isOpen, onOpen: onOpen, onClose: onClose} = useDisclosure()

  const initialRef1 = React.useRef();
  const finalRef1 = React.useRef();
  const {isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1} = useDisclosure()

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [show1, setShow1] = React.useState(false)
  const handleClick1 = () => setShow1(!show1)


  return (
    <ChakraProvider>
      <Box bg="#E3EFEE" width="100vw" height="100vh">
        <Box width="100vw" height="20vh" paddingTop="40px">

          <HStack>
            <Image src={logo} className="logo" alt=""></Image>
            <Spacer/>
            <Flex flexWrap="wrap" marginRight="20px">
              <Button
                className="btn1"
                color="#5A4012"
                border="none"
                borderRadius="50px"
                fontSize="17px"
                bg="transparent"
                height="50px"
                width="150px">Contact Us</Button>
              <Button
                className="btn1"
                color="#5A4012"
                border="none"
                borderRadius="50px"
                fontSize="17px"
                bg="transparent"
                height="50px"
                width="150px"
                onClick={onOpen}>Sign In</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered>
                <ModalOverlay/>
                <ModalContent>
                  <ModalHeader>Sign In</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel >E-Mail</FormLabel>
                      <Input ref={initialRef} placeholder="E-Mail"/>
                      <FormLabel mt={4}>Password</FormLabel>
                      <Input placeholder="Password"/>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Sign In
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

            </Flex>
          </HStack>

          <Box className="sand" height="80vh">
            <VStack>
              <Text fontSize="40px" paddingTop="50px" color="#5A4012" fontWeight="700">
                <h2 className="text1">we make free, custom</h2>
              </Text>
              <Text fontSize="40px" color="#5A4012" fontWeight="700">
                <h2 className="text1">itineraries for you</h2>
              </Text>
              <Text
                fontSize="15px"
                letterSpacing="3px"
                color="#5A4012"
                fontWeight="700"
                paddingBottom="20px">
                <h2 clssName="text2">transparent. flexible. yours.</h2>
              </Text>

              <Button
                marginTop="2px"
                onClick={onOpen1}
                className="btn2"
                color="#5A4012"
                border="none"
                borderRadius="50px"
                fontSize="17px"
                bg="#C6EAE7"
                height="50px"
                width="170px">Travel Now</Button>
              <Modal
                initialFocusRef={initialRef1}
                finalFocusRef={finalRef1}
                isOpen={isOpen1}
                onClose={onClose1}
                isCentered>
                <ModalOverlay/>
                <ModalContent>
                  <ModalHeader>Sign Up</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel mt={4}>Full name</FormLabel>
                      <Input placeholder="Your Name"/>
                      <FormLabel mt={4}>Phone Number</FormLabel>
                      <InputGroup>
                      <InputLeftAddon children="+91"/>
                      <Input type="tel" placeholder="Phone Number"/>
                      </InputGroup>
                      <FormLabel mt={4}>Usename</FormLabel>
                      <Input placeholder="Make a brek.username"/>

                      <FormLabel mt={4}>E-Mail</FormLabel>
                      <Input ref={initialRef} placeholder="E-Mail"/>
                      <FormLabel mt={4}>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show
                          ? "text"
                          : "password"}
                          placeholder="Enter password"/>
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show
                              ? "Hide"
                              : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormLabel mt={4}>Confirm Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show1
                          ? "text"
                          : "password"}
                          placeholder="Confirm password"/>
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick1}>
                            {show1
                              ? "Hide"
                              : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Sign Up
                    </Button>
                    <Button onClick={onClose1}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

            </VStack>
          </Box>
          <Box width="100vw" bg="#E3EFEE" height="100vh"></Box>
          <Box className="mountain" height="100vh">
            <Flex flexWrap="wrap" justifyContent="center" width="50vw" paddingTop="80px">
              <Text fontSize="27px" paddingBottom="5px" color="#15233E">
                <h2>we take your brek seriously.</h2>
              </Text><br/>
              <Text fontSize="7px" color="#15233E" width="50%" textAlign="center">
                <h2>we at brek.club understand how hectic and tiresome planning an entire trip
                  can be. Therefore we decided to do it for you,</h2>
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
export default Home;