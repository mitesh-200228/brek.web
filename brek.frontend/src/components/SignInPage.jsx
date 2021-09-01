import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button, FormControl, Input,handleClick,show, FormLabel, InputLeftAddon, InputRightElement, InputGroup, } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"

const SignInPage = () => {

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
            history.push("/");
        }
    }

    const initialRef = React.useRef();
    const finalRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef1 = React.useRef();
    const finalRef1 = React.useRef();

    return (
        <>
            <Modal
                initialFocusRef={initialRef1}
                finalFocusRef={finalRef1}
                isOpen={isOpen}
                onClose={onClose}
                isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel mt={4}>Full name</FormLabel>
                            <Input placeholder="Your Name" />
                            <FormLabel mt={4}>Phone Number</FormLabel>
                            <InputLeftAddon children="+91" />
                            <Input type="tel" placeholder="Phone Number" />
                            <FormLabel mt={4}>Usename</FormLabel>
                            <Input placeholder="Make a brek.username" />
                            <FormLabel>E-Mail</FormLabel>
                            <Input ref={initialRef} placeholder="E-Mail" />
                            <FormLabel mt={4}>Password</FormLabel>
                            <InputGroup size="md">
                                <Input
                                    pr="4.5rem"
                                    type={show
                                        ? "text"
                                        : "password"}
                                    placeholder="Enter password" />
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
                                    type={show
                                        ? "text"
                                        : "password"}
                                    placeholder="Confirm password" />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                                        {show
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
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

        // <div>

        //     <form method="POST">
        //         <input value={email} type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}></input>
        //         <input value={password} type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}></input>
        //         <button onClick={loginUser} type="submit" >SignIn</button>
        //     </form>
        // </div>
    );
}

export default SignInPage