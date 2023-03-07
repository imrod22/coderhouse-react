import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from '../firebase/firebase.configuration';

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
  } from '@chakra-ui/react';

const SignUp = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const createNewUser = async event => {
        event.preventDefault();
                
        const docRef = await addDoc(collection(db, 'users'), {
            firstName,
            lastName,
            email,
            password
          });

          if(docRef.id) {
            navigate('/signin');
          }
      }
      
    const handlerReturnToSignIn = () => {
        navigate('/signin');
    }

return (
<Flex width="full" align="center" justifyContent="center" m="2%">
<Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
  <Box textAlign="center">
    <Heading>Register</Heading>
  </Box>
  <Box my={4} textAlign="left">
  
   <form onSubmit={createNewUser}>
   <FormControl isRequired>
        <FormLabel>First Name</FormLabel>
        <Input type="text" placeholder="John" size="lg"
              onChange={event => setfirstName(event.currentTarget.value)}/>
      </FormControl>
   <FormControl isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" placeholder="Doe" size="lg"
              onChange={event => setlastName(event.currentTarget.value)}/>
      </FormControl>
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
      <Button type="submit" colorScheme="green" variant="outline" width="full" mt={4}>
        Sign Up
      </Button>
      <Button onClick={handlerReturnToSignIn} colorScheme="green" variant="outline" width="full" mt={4}>
        Already member?
      </Button>
    </form>
  </Box>
</Box>
</Flex>)};

export default SignUp;