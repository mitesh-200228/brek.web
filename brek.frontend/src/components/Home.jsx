import React from 'react'
import { ChakraProvider, HStack, Box, Flex, Spacer, Image, Button, VStack, Text, theme, FormControl, FormLabel, Input, InputGroup, InputRightElement, handleClick, InputLeftAddon, show } from '@chakra-ui/react';
import logo from '../images/logo_vector.png';
import '../styles/home.css';
import { useHistory } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import Slide4 from '../images/slide4.svg';


const Home = () => {

  //Login System Connection -------------------------------------------------------
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });

    const y = res;
    console.log(y);
    if (y.status === 400 || !y) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      history.push("/another");
    }
  }

  //Signup System connection
  const [user, setUser] = React.useState({
    FullName:"", email: "", phone: "", username: "", password: "", confirmPassword: ""
  });
  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { FullName, email, phone, username, password, confirmPassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FullName, email, phone, username, password, confirmPassword
      })
    });

    const y = await res.json();
    console.log(y);
    if (y.status === 422 || !y) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      history.push("/");
    }
  }

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure()

  const initialRef1 = React.useRef();
  const finalRef1 = React.useRef();
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [show1, setShow1] = React.useState(false)
  const handleClick1 = () => setShow1(!show1)

  const login = () => {
    <SignInPage />
  }

  return (
    <ChakraProvider>
      <Box bg="#E3EFEE" width="100%" height="200vh">
        <Box width="100%" height="100vh" paddingTop="40px">
          <HStack>
            <Image src={logo} className="logo" alt=""></Image>
            <Spacer />
            <Flex flexWrap="wrap" marginRight="20px">
              <Button className="btn1" color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="transparent" height="50px" width="150px">Contact Us</Button>
              <Button className="btn1" color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="transparent" height="50px" width="150px" onClick={onOpen}>Sign In</Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Sign In</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel >E-Mail</FormLabel>
                      <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" ref={initialRef} placeholder="E-Mail" />
                      <FormLabel mt={4}>Password</FormLabel>
                      <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button type="submit" onClick={loginUser} colorScheme="blue" mr={3}>
                      Sign In
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </HStack>

          <Box className="sand" height="85vh">
            <VStack>
              <Text fontSize="40px" paddingTop="50px" color="#5A4012" fontWeight="700">
                <h2 className="text1">we make free, custom</h2>
              </Text>
              <Text fontSize="40px" color="#5A4012" fontWeight="700">
                <h2 className="text1">itineraries for you</h2>
              </Text>
              <Text fontSize="15px" letterSpacing="3px" color="#5A4012" fontWeight="700" paddingBottom="20px"> <h2 clssName="text2">transparent. flexible. yours.</h2></Text>
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
            </VStack>
          </Box>

          {/* Page-2 */}

          <Box className="secondSlide" width="100%" height="123vh">
            <Modal
              initialFocusRef={initialRef1}
              finalFocusRef={finalRef1}
              isOpen={isOpen1}
              onClose={onClose1}
              isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel mt={4}>Full name</FormLabel>
                    <Input name="FullName" type="text" onChange={handleInput} value={user.FullName} placeholder="Your Name" />
                    <FormLabel mt={4}>Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+91" />
                      <Input name="phone" onChange={handleInput} value={user.phone} type="tel" placeholder="Phone Number" />
                    </InputGroup>
                    <FormLabel mt={4}>Usename</FormLabel>
                    <Input name="username" type="text" onChange={handleInput} value={user.username} placeholder="Make a brek.username" />
                    <FormLabel mt={4}>E-Mail</FormLabel>
                    <Input name="email" type="email" onChange={handleInput} value={user.email} ref={initialRef} placeholder="E-Mail" />
                    <FormLabel mt={4}>Password</FormLabel>
                    <InputGroup size="md">
                      <Input pr="4.5rem" type={show ? "text" : "password"} name="password" onChange={handleInput} value={user.password} placeholder="Enter password" />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}> {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormLabel mt={4}>Confirm Password</FormLabel>
                    <InputGroup size="md">
                      <Input pr="4.5rem" type={show1 ? "text" : "password"} placeholder="Confirm password" name="confirmPassword" onChange={handleInput} value={user.confirmPassword} />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick1}> {show1 ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={PostData} type="submit" colorScheme="blue" mr={3}>
                    Sign Up
                  </Button>
                  <Button onClick={onClose1}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

          {/* Page-3 */}

          <Box width="100%" className="mountain" height="120vh">
            <Box width="100%">
              <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center" paddingTop="80px">
                <Text color="#15233E" fontWeight="650" fontSize="50px">we take your brek</Text>
              </Flex>
              <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center">
                <Text color="#15233E" fontWeight="650" fontSize="50px">seriously.</Text>
              </Flex>
              <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center">
                <Text color="#15233E" fontWeight="650" width="28vw" className="lasttext" fontSize="12px">we at brek.club understand how hectic and tiresome planning an entire trip can be. Therefore we decided to do it for you,</Text>
              </Flex>
            </Box>
          </Box>

          {/* Page-4 */}

          <Box className="slide4" width="100%" height="130vh">

          </Box>

          {/* Page-5 */}

          <Box width="100%" height="30vh">

          </Box>

        </Box>
      </Box>
    </ChakraProvider>
  )
}
export default Home;