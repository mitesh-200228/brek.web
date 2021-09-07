import React from 'react'
import DatePicker from 'react-date-picker'
import { ChakraProvider, HStack, Box, Flex, Spacer, Image, Button, VStack, Text, theme, FormControl, FormLabel, Input, InputGroup, InputRightElement, handleClick, InputLeftAddon, show } from '@chakra-ui/react';
import logo from '../images/logo_vector.png';
import '../styles/home.css';
import { useHistory } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react"
import SignUpPage from '../components/SignUpPage';
import SignInPage from '../components/SignInPage';
import Slide4 from '../images/slide4.svg';

const HomePage = () => {
    return (
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
                                                        <Input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" ref={initialRef} placeholder="E-Mail" />
                                                        <FormLabel mt={4}>Password</FormLabel>
                                                        <Input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                                                    </FormControl>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button type="submit" onClick={loginUser} colorScheme="blue" mr={3}>
                                                        Sign In
                                                    </Button>
                                                    <Button onClick={onClose}>Cancel</Button>
                                                </ModalFooter>
                                            </TabPanel>

                                            <TabPanel>
                                                <ModalBody pb={6}>
                                                    <FormControl>
                                                        <FormLabel mt={4}>Full name</FormLabel>
                                                        <Input name="FullName" type="text" onChange={handleInput} value={user.FullName} placeholder="Your Name" />
                                                        <FormLabel mt={4}>brek.username</FormLabel>
                                                        <InputGroup>
                                                            <InputLeftAddon children="brek." opacity='0.7' />
                                                            <Input name="phone" onChange={handleInput} value={user.phone} type="tel" placeholder="Phone Number" />
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
                                                    <Button onClick={PostData} type="submit" colorScheme="green" mr={3}>Sign Up</Button>
                                                    <Button onClick={onClose}>Cancel</Button>
                                                </ModalFooter>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                    {/*Both signup signin ends */}
                                </Box>
                                <ModalCloseButton />
                            </ModalContent>
                        </Modal>
                    </Flex>
                </HStack>

                <Box className="sand" width="100%" height="80vh">
                    <VStack>
                        <Text fontSize="40px" paddingTop="50px" color="#5A4012" fontWeight="700">
                            <h2 className="text1">we make free, custom</h2>
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
                                    <FormControl onSubmit={submitTravelData}>
                                        <FormLabel mt={4}>Full name</FormLabel>
                                        <Input name="FullName" type="text" value={user.FullName} placeholder="Your Name" />
                                        <FormLabel mt={4}>Phone Number</FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon children="+91" opacity='0.7' />
                                            <Input value={user.phone} name="phone" type="tel" placeholder="Phone Number" />
                                        </InputGroup>
                                        <FormLabel mt={4}>E-Mail</FormLabel>
                                        <Input name="email" value={user.email} type="text" placeholder="E-Mail" />
                                        <FormLabel mt={4}>Current Location</FormLabel>
                                        <Input name="currentLocation" value={user.travelDestination} type="text" placeholder="Your City" />
                                        <FormLabel mt={4}>Travel Destinantion</FormLabel>
                                        <Input name="destinantion" type="text" ref={initialRef} placeholder="Travel To..." />
                                        <FormLabel mt={4}>Travel Start</FormLabel>
                                        <DatePicker color="#000" />
                                    </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="submit" colorScheme="blue" mr={3}>Confirm Travel</Button>
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
                            <Text color="#15233E" fontWeight="650" fontSize="60px">we take your brek</Text>
                        </Flex>
                        <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center">
                            <Text color="#15233E" fontWeight="650" fontSize="60px" mt="-5px">seriously.</Text>
                        </Flex>
                        <Flex flexWrap="wrap" justifyContent="center" width="100%" textAlign="center">
                            <Text color="#15233E" fontWeight="650" width="28vw" className="lasttext" fontSize="19px">we at brek.club understand how hectic and tiresome planning an entire trip can be. Therefore we decided to do it for you</Text>
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
    )
}

export default HomePage
