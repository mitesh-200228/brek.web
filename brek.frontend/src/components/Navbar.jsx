import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Flex,
    Input,
    Spacer,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import logo from '../images/logo_vector.png';
import { sendSignInLinkToEmail } from '@firebase/auth';

const Logo = (props: any) => {
    return (
        <img src={logo} alt="" />
    );
};
const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithNewsletter() {
    const [emails, setEmail] = React.useState({
        email: ""
    });
    const handler = (e) => {
        setEmail(e.target.value);
    }
    const trigger = async (e) => {
        const { email } = emails;
        e.preventDefault();
        const res = await fetch('/emailonly', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        const res2 = res.json();
        if (res.status !== 200) {
            return;
        }
        console.log(res2);
    }
    return (
        <Flex width="100%" height="35vh" justifyContent="center">
            <Stack spacing={6}>
                <Box>
                    {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                </Box>
                <Text fontSize={'sm'}>
                    © 2021 brek.club  . All rights reserved
                </Text>
                <Flex justifyContent="center" paddingLeft="10%" direction={'row'} spacing={6}>
                    <SocialButton label={'YouTube'} href={'https://www.linkedin.com/company/75043346/admin/'}>
                        <FaLinkedin />
                    </SocialButton>
                    <Spacer/>
                    <SocialButton label={'YouTube'} href={'https://twitter.com/BrekClub'}>
                        <FaTwitter />
                    </SocialButton>
                    <Spacer/>

                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/brek.club/'}>
                        <FaInstagram />
                    </SocialButton>
                </Flex>
            </Stack>
        </Flex>
    );
}