import React from 'react'
import { ChakraProvider, HStack, Box, Flex, Spacer, Image, Button, VStack, Text, theme } from '@chakra-ui/react';
import logo from '../images/logo_vector.png';
import '../styles/home.css';
import sand from '../images/sand.svg';
import family from '../images/family.png';
import { useHistory } from 'react-router-dom';
import mountain from '../images/mountain.svg';
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   Portal,
// } from "@chakra-ui/react"

const Home = () => {
  const history = useHistory();
  const startRegister = () => {
    history.push('/signup');
  }
  const startSignIn = () => {
    history.push('/signin');
  }


  return (
    <>
      <Box bg="#E3EFEE" width="100vw" height="100vh">
        <Box width="100vw" height="20vh" paddingTop="40px">
          <HStack>
            <Image src={logo} className="logo" alt=""></Image>
            <Spacer />
            <Flex flexWrap="wrap" marginRight="20px">
              <Button className="btn1" color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="transparent" height="50px" width="150px">Contact Us</Button>
              <Button onClick={startSignIn} className="btn1"  color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="transparent" height="50px" width="150px">Sign In</Button>
              <Button colorScheme='blue' >Button</Button>
            </Flex>
          </HStack>
          <Box className="sand" height="80vh">
            <VStack>
              <Text  fontSize="40px" paddingTop="50px" color="#5A4012" fontWeight="700"><h2 className="text1">we make free, custom</h2></Text>
              <Text fontSize="40px" color="#5A4012" fontWeight="700"><h2 className="text1">itineraries for you</h2></Text>
              <Text fontSize="15px" letterSpacing="3px" color="#5A4012" fontWeight="700" paddingBottom="20px"><h2 clssName="text2">transparent. flexible. yours.</h2></Text>
              <Button marginTop="2px" onClick={startRegister} className="btn2" color="#5A4012" border="none" borderRadius="50px" fontSize="17px" bg="#C6EAE7" height="50px" width="170px">Register Now</Button>
            </VStack>
          </Box>
          <Box width="100vw" bg="#E3EFEE" height="100vh">

          </Box>
          <Box className="mountain" height="100vh">
            <Flex flexWrap="wrap" justifyContent="center" width="50vw" paddingTop="80px">
              <Text fontSize="27px" paddingBottom="5px" color="#15233E"><h2>we take your brek seriously.</h2></Text><br/>
              <Text fontSize="7px" color="#15233E" width="50%" textAlign="center"><h2>we at brek.club understand how hectic and tiresome planning an entire trip can be. Therefore we decided to do it for you,</h2></Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
