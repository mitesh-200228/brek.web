import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
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
        <img src={logo} alt=""/>
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
    const [emails,setEmail] = React.useState({
        email:""
    });
    const handler = (e) => {
        setEmail(e.target.value);
    }
    const trigger = async (e) => {
        const {email} = emails;
        e.preventDefault();
        const res = await fetch('/emailonly',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email})
        });
        const res2 = res.json(); 
        if(res.status !== 200){
            return; 
        }
        console.log(res2);
    }
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2021 brek.club  . All rights reserved
                        </Text>
                        <Stack paddingLeft="10%" direction={'row'} spacing={6}>
                            <SocialButton label={'YouTube'} href={'https://www.linkedin.com/company/75043346/admin/'}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'https://www.instagram.com/brek.club/'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Spacer/>
                    <Spacer/>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                type="text"
                                name="email"
                                value={emails.email}
                                onChange={handler}
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                onClick={trigger}
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}