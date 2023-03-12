import { useState } from 'react';
import { useSessionContext } from '../context/session.context';
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
  } from '@chakra-ui/react';

const SignIn = () => {

    const { login, user } = useSessionContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();    

    const handleSubmit = async event => {
      event.preventDefault();
      login({email, password});
    }

    const handlerGoToSignUp = () => {
      navigate('/signup');
    }

    return (
        <Flex width="full" align="center" justifyContent="center" m="2%">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Welcome Again!</Heading>
        </Box>
        <Box my={4} textAlign="left">
        
         <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="mail@domain.com" size="lg"
                    onChange={event => setEmail(event.currentTarget.value)}/>
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' placeholder="*******" 
              onChange={event => setPassword(event.currentTarget.value)}/>
            </FormControl>
            {user.error && <FormLabel colorScheme="red">{user.error}</FormLabel>}
            <Button type="submit" colorScheme="green" variant="outline" width="full" mt={4}>
              Sign In
            </Button>
            <Button onClick={handlerGoToSignUp} colorScheme="green" variant="outline" width="full" mt={4}>
              New User?
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
    )};

export default SignIn;