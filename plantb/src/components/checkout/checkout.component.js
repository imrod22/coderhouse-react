import { addDoc, collection, doc, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore/lite";
import { useFirebase } from "../../context/firebase.context";
import { useCartContext } from '../../context/cart.context';
import toast, { Toaster } from 'react-hot-toast';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
    } from '@chakra-ui/react';

    import { useState, useContext, useEffect } from 'react';
    

const Checkout = () => {
    const [ordenNumber, setOrdenNumber] = useState();
    const firebase = useFirebase();
    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();
    const [address, setAdress] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [otheremail, setOtherEmail] = useState();

    // useEffect(() => {
    //     getDoc(userReference)
    //         .then((res) => {
    //             const { firstname, lastname } = res.data();
    //             setUserData({
    //                 name: firstname,
    //                 lastname: lastname,
    //                 address: address,
    //                 phone: phone,
    //                 email: email
    //             });
    //         })
    // }, [])
    
    // const createOrder = async() => {

    //     if(totalPlants() === 0)
    //     {
    //         toast.error('Purchase cant be processed!');
    //         return
    //     }
        
    //     const firebasePlants = collection(firebase, 'plants');
    //     const firebaseOrders = collection(firebase, 'orders');
    //     const batch = writeBatch(firebase);

    //     const order = {
    //         order: cart,
    //         date: Date.now(),
    //         status: 'Created',
    //         total: totalExpend()
    //     }

    //     const queryfirebasePlants = await getDocs(firebasePlants, where( documentId(), 'IN', cart.map(c => c.id) ));
    //     const currentPlants = await getDocs(queryfirebasePlants);

    //     currentPlants.docs.forEach(plant => {
    //         const cartPlant = cart.find(cp => cp.id === plant.id);
    //         batch.update(plant.ref,{
    //             storage: (plant.data().storage - cartPlant.quantity)
    //         })
    //     });

    //     batch.commit()
    //             .then(() => {
    //                 addDoc(firebaseOrders, order)
    //                     .then((doc) => {
    //                         setOrdenNumber(doc.id);
    //                         toast.success('Transaction purchased succesfully with order number: '+ ordenNumber);
    //                         emptyCart();
    //                     }).catch((error) => console.error(error))
    //             })

    // }

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
        <Input type="text" placeholder="John" size="lg"
              onChange={event => setfirstName(event.currentTarget.value)}/>
      </FormControl>
   <FormControl isRequired>
        <FormLabel>Receiver Last Name</FormLabel>
        <Input type="text" placeholder="Doe" size="lg"
              onChange={event => setlastName(event.currentTarget.value)}/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Phone</FormLabel>
        <Input type="number" placeholder="(555)555-555" size="lg"
              onChange={event => setPhone(event.currentTarget.value)}/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Adress</FormLabel>
        <Input type="text" placeholder="home 123" size="lg"
              onChange={event => setAdress(event.currentTarget.value)}/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="mail@domain.com" size="lg"
              onChange={event => setEmail(event.currentTarget.value)}/>
      </FormControl>
      
      <FormControl mt={6} isRequired>
        <FormLabel>Re-Enter Email</FormLabel>
        <Input type="email" name='anotheremail' 
        onChange={event => setOtherEmail(event.currentTarget.value)}/>
      </FormControl>      
      <Button type="submit" colorScheme="green" variant="outline" width="full" mt={4}>
        Purchase
      </Button>
      <Button colorScheme="green" variant="outline" width="full" mt={4}>
        Return
      </Button>
    </form>
  </Box>
</Box>
</Flex>

    )
    
}

export default Checkout;