import React from 'react'
import { useHistory } from 'react-router-dom';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal
} from "@chakra-ui/react"

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

    return (

        <>
            <Popover>
                <PopoverTrigger>
                    <Button>Trigger</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Button colorScheme="blue">Button</Button>
                        </PopoverBody>
                        <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover>
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