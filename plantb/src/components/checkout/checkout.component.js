import { db } from '../../firebase/firebase.configuration';
import { useCartContext } from '../../context/cart.context';
import { useSessionContext } from '../../context/session.context';
import { useState } from 'react';
import { addDoc, collection, where, query, getDocs, documentId, writeBatch } from 'firebase/firestore/lite';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Text
    } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SuccessfulPurchase from '../successfulpurchase/successfulpurchase.component';

const Checkout = () => {
  const navigate = useNavigate();  
  const Joi = require('joi');
  const { user } = useSessionContext();
  const { cart, emptyCart, totalExpend, totalPlants } = useCartContext();
  const [errors, setErrors] = useState({});
  const [purchase, setPurchase] = useState(false);
  const [orderNumber, setOrderNumber] = useState();
  const [notStock, setNotStock] = useState([]);
  
  const [contact, setContact] = useState({
  firstName:user.name,
  lastName:user.lastname,
  address:'',
  phone:'',
  email:'',
  anotheremail:''
  });

  const schema = Joi.object({
    firstName: Joi.string().min(5).max(20),
    lastName: Joi.string().min(5).max(20),
    address: Joi.string().min(8).max(20).required(), 
    phone: Joi.string().required(),       
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    anotheremail: Joi.string().email({ tlds: { allow: false } }).required(),
  });

  const notHaveStock = async () => {
    const notStocks = [];

    const databasePlants = collection(db, 'plants');
    const queryPlants = query(databasePlants, where( documentId(), 'in', cart.map(c => c.id) ));       
    const currentPlants = await getDocs(queryPlants);  
    console.log("🚀 ~ file: checkout.component.js:55 ~ notHaveStock ~ currentPlants:", currentPlants)
    
    currentPlants.docs.forEach( plant => {
      const currentPlant = cart.find(cp => cp.id === plant.id);
      console.log("🚀 ~ file: checkout.component.js:59 ~ notHaveStock ~ currentPlant:", currentPlant)

      if(plant.data().storage < currentPlant.quantity)
        notStocks.push(currentPlant);
        console.log("🚀 ~ file: checkout.component.js:63 ~ notHaveStock ~ notStocks:", notStocks)
    });

    setNotStock(notStocks);
    return notStocks.length;
  };

  const updateStock = async () => {
    const batch = writeBatch(db);
    const databasePlants = collection(db, 'plants');
    const queryPlants = query(databasePlants, where( documentId(), 'in', cart.map(c => c.id) ));       
    const currentPlants = await getDocs(queryPlants);

    currentPlants.docs.forEach( plant => {
      console.log("🚀 ~ file: checkout.component.js:77 ~ updateStock ~ plant:", plant.data().storage)
      const currentPlant = cart.find(cp => cp.id === plant.id);
      console.log("🚀 ~ file: checkout.component.js:78 ~ updateStock ~ currentPlant:", currentPlant.quantity)
      batch.update(plant.ref, {
        storage: (plant.data().storage - currentPlant.quantity)
      })
    });

    batch.commit();
  };

  const handlerValidateData = async (event) => {
    event.preventDefault();
    if(totalPlants() === 0){
      toast.error('Must select at least a Plant before buy!');
      navigate('/');
    }

    setPurchase(true);
    setErrors({});
    const result = schema.validate(contact, { abortEarly: false });
    const { error } = result;
    const errorData = {};

    if (!error) {
      if(user.email !== contact.email)
      {
        setPurchase(false);
        toast.error("To confirm the transaction enter account email.")
        return
      }
      else {
        setPurchase(false);
        if(contact.email !== contact.anotheremail){
          toast.error("Emails are not the same.")
          return 
      }
      else {

        if(notHaveStock() > 0)
          return;
        
        updateStock();

        const currentOrden = {
          user: {
              id: user.id,
              email: user.email,
              address: contact.address,
              phone:  contact.phone
          },
          order: cart,
          date: new Date(Date.now()).toLocaleString(),
          status: 'Generated',
          total: totalExpend()
      };

      await addDoc(collection(db, 'orders'), currentOrden).then( (doc) =>
        {
          console.log(doc.id);
          setOrderNumber(doc.id);          
          emptyCart();
        });
      
      }
    }
    } else {
      setPurchase(false);
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      return errorData;
    }
  };

  if(orderNumber){
    return(
      <SuccessfulPurchase orderNumber={orderNumber} />
    )
  }

  const handlerSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateInfoContact(event);

    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      errorData[name] = null;
    }
    let contactData = { ...contact };

    contactData[name] = value;
    setContact(contactData);
    setErrors(errorData);
  };

  const joiSubSchema = (base, field) => {
    const rule = base.extract(field);
    return Joi.object(
      { [field]: rule })
  };

  const validateInfoContact = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };

    const subScheme = joiSubSchema(schema, name);
    const result = subScheme.validate(obj, {allowUnknown: true});

    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const handlerReturnCart = () => {
      navigate('/cart');
  }

    return(
      notStock.length > 0 ?
      <Stack direction="row" spacing="5" width="full">  
      <Heading>Plants Not Availables:</Heading>    
      {
        notStock.map((nostockplant, index) => 
          <Box pt="4">
            <Stack spacing="0.5">
              <Text key={index.toString()} fontWeight="medium">{nostockplant.name}</Text>
            </Stack>          
          </Box>
        )        
      }      
      <Button onClick={handlerReturnCart} colorScheme="green" variant="outline" width="full" mt={4}>
          Return to Cart
      </Button>
      </Stack>

      :
        <Flex width="full" align="center" justifyContent="center" m="2%">
          <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
              <Heading>Shipment Information</Heading>
            </Box>
  
          <Box my={4} textAlign="left">
  
         <form >
         <FormControl isRequired>
          <FormLabel>Receiver First Name</FormLabel>
            <Input type="text" placeholder="John" size="lg" value={contact.firstName}  onChange={handlerSave} readOnly/>
  
            {errors.firstName && 
            (
              <Box mt={"5%"} mb={"5%"} className="alert alert-danger">
                {errors.firstName}
              </Box>
            )}
        </FormControl>
      
        <FormControl isRequired>
          <FormLabel>Receiver Last Name</FormLabel>
            <Input type="text" placeholder="Doe" size="lg" value={contact.lastName} onChange={handlerSave} readOnly/>
              <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
                {errors.lastName}
              </Box>
        </FormControl>
      
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
            <Input type="number" name='phone' placeholder="55555555" size="lg" value={contact.phone} onChange={handlerSave}/>
          <Box mt={"5%"} mb={"5%"} color="red" className="alert alert-danger">
            {errors.phone}
          </Box>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Input type="text" name='address' placeholder="home 123" size="lg" value={contact.address}
        onChange={handlerSave}/>
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
                onChange={handlerSave}/>
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
      {
        purchase ?
        <Button disabled="true" colorScheme="green" variant="outline" width="full" mt={4}>
             Calculating shipment...
        </Button>        
       :
       <Button type="submit" onClick={handlerValidateData} colorScheme="green" variant="outline" width="full" mt={4}>
          Purchase
        </Button>
      }
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