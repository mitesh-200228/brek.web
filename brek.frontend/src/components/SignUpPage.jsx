import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button, FormControl, Input,handleClick,show, FormLabel, InputLeftAddon, InputRightElement, InputGroup, } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
const SignUpPage = () => {

    const [user, setUser] = React.useState({
        FirstName: "", LastName: "", email: "", phone: "", username: "", password: "", confirmPassword: ""
    });
    const history = useHistory();
    let name, value;

    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { FirstName, LastName, email, phone, username, password, confirmPassword } = user;

        const res = await fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                FirstName, LastName, email, phone, username, password, confirmPassword
            })
        });

        const y = await res.json();
        console.log(y);
        if(y.status === 422 || !y){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successful");
            history.push("/signin");
        }
    }

    const initialRef = React.useRef();
    const finalRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef1 = React.useRef();
    const finalRef1 = React.useRef();

    return (

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


        // <div>
        //     <form method="POST">
        //         <input name="email" type="email" onChange={handleInput} value={user.email} placeholder="Enter your email"></input>
        //         <br />
        //         <input name="password" type="password" onChange={handleInput} value={user.password} placeholder="Enter your password"></input>
        //         <br />
        //         <input name="FirstName" type="text" onChange={handleInput} value={user.FirstName} placeholder="FirstName" />
        //         <br />
        //         <input name="LastName" type="text" onChange={handleInput} value={user.LastName} placeholder="LastName" />
        //         <br />
        //         <input name="username" type="text" onChange={handleInput} value={user.username} placeholder="username" />
        //         <br />
        //         <input name="confirmPassword" type="password" onChange={handleInput} value={user.confirmPassword} placeholder="confirmPassword" />
        //         <br />
        //         <input name="phone" type="number" onChange={handleInput} value={user.phone} placeholder="Phone" />
        //         <br />
        //         <button type="submit" onClick={PostData} >SignUp</button>
        //     </form>
        // </div>
    )
}

export default SignUpPage
