import { useFirebase } from '../../context/firebase.context';
import { useCartContext } from '../../context/cart.context';
import { useSessionContext } from '../../context/session.context';
import { useState, useContext, useEffect } from 'react';
import { addDoc, collection, doc, documentId, getDoc, getDocs, query, where, writeBatch } from 'firebase/firestore/lite';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
    } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';
import Joi from 'joi-browser';
import { useNavigate } from 'react-router-dom'; 

const Checkout = () => {
  const navigate = useNavigate();  
  const firebase = useFirebase();

  const { user } = useSessionContext();

  const [errors, setErrors] = useState({});
  
  const [contact, setContact] = useState({
  firstName:user.name,
  lastName:user.lastname,
  address:'',
  phone:'',
  email:'',
  anotheremail:''
  });

  const schema = {
    firstName: Joi.string().min(5).max(20).required(),
    lastName: Joi.string().min(5).max(20).required(),
    address: Joi.string().min(8).max(20).required(), 
    phone: Joi.string().min(8).max(20).required(),
       
    email: Joi.string().email().required(),
    anotheremail: Joi.string().email().required(),
  };

  const handlerValidateData = (event) => {
    event.preventDefault();

    setErrors({});
    const result = Joi.validate(contact, 
        schema, { abortEarly: false });
    const { error } = result;
    const errorData = {};

    if (!error) {
      if(user.email !== contact.email)
      {
        toast.error("To confirm the transaction enter account email.")
        return
      }
      else {
        if(contact.email !== contact.anotheremail){
          toast.error("Emails are not the same.")
          return 
      }
      else {
        toast.success("Calculating shipment...")
      }
    }
    } else {
      
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      return errorData;
    }
  };

  const validateInfoContact = (event) => {
    const { name, value } = event.target;

    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(subSchema, obj);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const handlerSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateInfoContact(event);    

    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let contactData = { ...contact };

    contactData[name] = value;
    setContact(contactData);
    setErrors(errorData);
  }


  const handlerReturnCart = () => {
      navigate('/cart');
  }

    return(
        <Flex width="full" align="center" justifyContent="center" m="2%">
<Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
  <Box textAlign="center">
    <Heading>Shipment Information</Heading>
  </Box>
  <Box my={4} textAlign="left">
  
   <form >
   <FormControl isRequired>
        <FormLabel>Receiver First Name</FormLabel>
        <Input type="text" placeholder="John" size="lg" value={contact.firstName}
        onChange={handlerSave}
              /* onChange={event => setfirstName(event.currentTarget.value)} */ readOnly/>
      {errors.firstName && (
          <Box mt={"5%"} mb={"5%"} className="alert alert-danger">
            {errors.firstName}
          </Box>
        )}
      </FormControl>
   <FormControl isRequired>
        <FormLabel>Receiver Last Name</FormLabel>
        <Input type="text" placeholder="Doe" size="lg" value={contact.lastName}
          onChange={handlerSave} readOnly/>
        <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
            {errors.lastName}
          </Box>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Phone</FormLabel>
        <Input type="text" name='phone' placeholder="55555555" size="lg" value={contact.phone}
          onChange={handlerSave}
              /* onChange={event => setPhone(event.currentTarget.value)} *//>
          <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
            {errors.phone}
          </Box>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Input type="text" name='address' placeholder="home 123" size="lg" value={contact.address}
        onChange={handlerSave}
              /* onChange={event => setAdress(event.currentTarget.value)} *//>
              <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
            {errors.address}
          </Box>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input  type="email" name='email' 
                placeholder="mail@domain.com" 
                size="lg" 
                value={contact.email}
                onChange={handlerSave}
              /* onChange={event => setEmail(event.currentTarget.value)} *//>
        <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
            {errors.email}
          </Box>
      </FormControl>
      
      
      <FormControl mt={6} isRequired>
        <FormLabel>Re-Enter Email</FormLabel>
        <Input type="email" name='anotheremail' value={contact.anotheremail}
        onChange={handlerSave}
        /* onChange={event => setOtherEmail(event.currentTarget.value)} *//>
        <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
            {errors.anotheremail}
          </Box>
      </FormControl>      
      <Button type="submit" onClick={handlerValidateData} colorScheme="green" variant="outline" width="full" mt={4}>
        Purchase
      </Button>
      <Button onClick={handlerReturnCart} colorScheme="green" variant="outline" width="full" mt={4}>
        Return
      </Button>
    </form>
  </Box>
</Box>
<Toaster/>
</Flex>

    )
    
}

export default Checkout;