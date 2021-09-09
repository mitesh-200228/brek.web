import React, { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker'
import { ChakraProvider, HStack, Box, Flex, Spacer, Image, Button, VStack, Text, theme, FormControl, FormLabel, Input, InputGroup, InputRightElement, handleClick, InputLeftAddon, show } from '@chakra-ui/react';
import logo from '../images/logo_vector.png';
import '../styles/home.css';
import { useHistory } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react"
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import Slide4 from '../images/slide4.svg';
import {FcGoogle} from 'react-icons/fc';

//Google Sign in/up
import {googleSignIn, currUser} from './firebase'


const Home = () => {

  const [signInBtnTxt, setSignInBtnTxt] = React.useState("Sign In");
  
  if (currUser != null){
    console.log("Cureenet user"+currUser)
    setSignInBtnTxt(currUser);
  }

  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection
  //--------------------------------------------------------------Signin System connection

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
      history.push("/userdata");
    }
  }

  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection
  //--------------------------------------------------------------Signup System connection

  const [user, setUser] = React.useState({
    FullName: "", email: "", phone: "", password: "", confirmPassword: ""
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
    const { FullName, email, phone, password, confirmPassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FullName, email, phone, password, confirmPassword
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
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission
  //----------------------------------------------------------------Travel Form Submission

  const [travel, setTravel] = React.useState({
    FullName: "", PhoneNumber: "", Email: "", CurrentLocation: "", TravelDestination: "", Date: ""
  });

  const seter = (e) => {
    value = e.target.value;
    name = e.target.name;
    setTravel({ ...travel, [name]: value });
  }

  const PostTravelData = async (e) => {
    e.preventDefault();
    const { FullName, PhoneNumber, Email, CurrentLocation, TravelDestination } = travel;

    const res = await fetch('userTravelData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FullName, PhoneNumber, Email, CurrentLocation, TravelDestination
      })
    });

    const y1 = await res.json();
    console.log(y1);
    if (y1.status === 422 || !y1) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      history.push("/");
    }
  }
  //----------------------------------------------------------------Getting User Data

  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff
  //----------------------------------------------------------------Chakra designing stuff


  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure()

  const initialRef1 = React.useRef();
  const finalRef1 = React.useRef();
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()

  const [show, setShow] = React.useState(false)
  const handleClickSignup = () => setShow(!show)

  const [show1, setShow1] = React.useState(false)
  const handleClickSignup1 = () => setShow1(!show1)

  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI
  //-----------------------------------------------------------------CHAKRA UI


  return (
    <ChakraProvider>
      <Box bg="#E3EFEE" width="100%" height="200vh">
        <Box width="100%" height="100vh" paddingTop="40px">
          <HStack>
            <Image src={logo} className="logo" alt=""></Image>
            <Spacer />
            <Flex flexWrap="wrap" marginRight="20px">
              <Button className="btn1" color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="transparent" height="50px" width="150px">Contact Us</Button>
              <Button className="btn1" color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="transparent" height="50px" width="150px" onClick={onOpen}>{signInBtnTxt}</Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered>
                <ModalOverlay />
                <ModalContent >
                  <Box m={4}>
                <Tabs variant="soft-rounded">
                  <ModalHeader><TabList ><Tab _selected={{ color: "white", bg: "blue.500" }}>Sign In</Tab><Tab _selected={{ color: "white", bg: "green.400" }}>Sign Up</Tab></TabList></ModalHeader>
                  
                  {/*Both Signup and Sign in inside one window*/}
                  <TabPanels>
                    <TabPanel>
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel >E-Mail</FormLabel>
                            <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" ref={initialRef} placeholder="E-Mail" />
                          <FormLabel mt={4}>Password</FormLabel>
                            <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                        </FormControl>
                      </ModalBody>
                      <ModalFooter>
                      <HStack>
                        <Button onClick={googleSignIn} colorScheme="cyan" leftIcon={<FcGoogle fontSize='20px'/>}>Google</Button>
                        <Button type="submit" onClick={loginUser} colorScheme="blue" mr={3}>
                          Sign In
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </HStack>
                      </ModalFooter>
                    </TabPanel>

                    <TabPanel>
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel mt={4}>Full name</FormLabel>
                            <Input name="FullName" type="text" onChange={handleInput} value={user.FullName} placeholder="Your Name" />
                          <FormLabel mt={4}>Phone Number</FormLabel>
                            <InputGroup>
                          <InputLeftAddon children="+91" opacity='0.7' />
                            <Input name="phone" onChange={handleInput} value={user.phone} type="number" placeholder="Phone Number" />
                        </InputGroup>
                        <FormLabel mt={4}>E-Mail</FormLabel>
                          <Input name="email" type="email" onChange={handleInput} value={user.email} ref={initialRef} placeholder="E-Mail" />
                          <FormLabel mt={4}>Password</FormLabel>
                        <InputGroup size="md">
                            <Input pr="4.5rem" type={show ? "text" : "password"} name="password" onChange={handleInput} value={user.password} placeholder="Enter password" />
                            <InputRightElement width="4.5rem">
                              <Button h="1.75rem" size="sm" onClick={handleClickSignup}> {show ? "Hide" : "Show"}</Button>
                            </InputRightElement>
                        </InputGroup>
                          <FormLabel mt={4}>Confirm Password</FormLabel>
                        <InputGroup size="md">
                            <Input pr="4.5rem" type={show1 ? "text" : "password"} placeholder="Confirm password" name="confirmPassword" onChange={handleInput} value={user.confirmPassword} />
                              <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClickSignup1}> {show1 ? "Hide" : "Show"}</Button>
                              </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      </ModalBody>
                      
                      <ModalFooter>
                      <HStack>
                        <Button onClick={googleSignIn} colorScheme="teal" leftIcon={<FcGoogle fontSize='20px'/>}>Google</Button>
                        <Button onClick={PostData} type="submit" colorScheme="green" mr={3}>Sign Up</Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </HStack>
                      </ModalFooter>
                    </TabPanel>
                  </TabPanels>
                  </Tabs>
                  {/*Both signup signin ends */}
                  </Box>
                  <ModalCloseButton />
                </ModalContent>
              </Modal>
              <Image />
            </Flex>
          </HStack>

          <Box className="sand" width="100%" height="70vh">
            <VStack>
              <Text fontSize="40px" color="#5A4012" fontWeight="700">
                <Text className="text1">we make free, custom</Text>
              </Text>
              <Text fontSize="40px" color="#5A4012" fontWeight="700">
                <h2 className="text1">itineraries for you</h2>
              </Text>
              <Text fontSize="15px" letterSpacing="3px" color="#5A4012" fontWeight="700" paddingBottom="20px"> <h2 clssName="text2">transparent. flexible. yours.</h2></Text>


              {/**Travel Now form here */}
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
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Travel Now</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel mt={4}>Full name</FormLabel>
                    <Input name="FullName" type="text"  onChange={seter} value={travel.FullName} placeholder="Your Name" />
                    <FormLabel mt={4}>Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+91" opacity='0.7' />
                      <Input name="PhoneNumber" type="number" onChange={seter} placeholder="Phone Number" value={travel.PhoneNumber} />
                    </InputGroup>
                    <FormLabel mt={4}>E-Mail</FormLabel>
                    <Input name="Email" type="text"  onChange={seter} placeholder="E-Mail" value={travel.Email}/>
                    <FormLabel mt={4}>Current Location</FormLabel>
                    <Input name="CurrentLocation" type="text"  onChange={seter} value={travel.CurrentLocation} placeholder="Your City"/>
                    <FormLabel mt={4}>Travel Destinantion</FormLabel>
                    <Input name="TravelDestination" type="text"  onChange={seter} value={travel.TravelDestination} ref={initialRef} placeholder="Travel To..." />
                    <FormLabel mt={4}>Travel Start</FormLabel>
                    <DatePicker color="#000"/>
                    <FormLabel mt={4}>Travel End</FormLabel>
                    <DatePicker color="#000"/>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={PostTravelData} type="submit" colorScheme="blue" mr={3}>Confirm Travel</Button>
                  <Button onClick={onClose1}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            {/**Travel Now form ends */}


            </VStack>
          </Box>

          <Box height="100px" color='white' />
          {/* Page-2 */}

          <Box className="secondSlide" width="100%" height="120vh">
          </Box>

          {/* Page-3 */}

          <Box width="100%" className="mountain" height="120vh">
            <Box width="100%">
              <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center" paddingTop="80px">
                <Text color="#15233E" className="slide44" fontWeight="650" fontSize="60px">we take your brek</Text>
              </Flex>
              <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center">
                <Text color="#15233E" fontWeight="650" fontSize="60px" mt="-5px">seriously.</Text>
              </Flex>
              <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center">
                <Text color="#15233E" fontWeight="650" width="42vw" className="lasttext" fontSize="19px">we at brek.club understand how hectic and tiresome planning an entire trip can be. Therefore we decided to do it for you</Text>
              </Flex>
            </Box>
          </Box>

          {/* Page-4 */}

          <Box className="slide4" width="100%" height="130vh">
            <Flex>
              <Text className="pop" paddingLeft="40px" paddingTop="50px" color="#15233E" width="30%" fontSize="55px" fontWeight="750">a team that cares</Text>
            </Flex>
            <Flex>
              <Text className="pop" paddingLeft="40px" paddingTop="50px" color="#15233E" width="60%" fontSize="25px" fontWeight="750">we are a group of students presently pursuing our engineering from IIT Madras, who love travelling. We understand that everyone right now is mentally exhausted and this is our small way to spread joy and give you a brek you really deserve</Text>
            </Flex>
          </Box>


          {/* Footer */}
          <LargeWithNewsletter/>
          
        </Box>
      </Box>
    </ChakraProvider>
  )
}
export default Home;