import {
    Button,
    Flex,
    Heading,
    Stack,
    Text
  } from '@chakra-ui/react';

  import { useCartContext } from "../../context/cart.context";
  import { useNavigate } from 'react-router-dom';
  import toast, { Toaster } from 'react-hot-toast';

const CartSummary = () => {
  const { totalExpend, totalPlants } = useCartContext();    
  const navigate = useNavigate();

const handlerCheckout = () =>{
  if(totalPlants() > 0)
    navigate('/checkout');
  else
    toast.error('Your cart its empty!')

}

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>  
        <Stack spacing="6">          
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Cost Total : $ {Number((totalExpend()).toFixed(2))}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="green" size="lg" fontSize="md" onClick={handlerCheckout}>
          Checkout
        </Button>
        <Toaster/>
      </Stack>
    )
  }

  export default CartSummary;