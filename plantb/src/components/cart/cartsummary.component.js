import {
    Button,
    Flex,
    Heading,
    Stack,
    Text
  } from '@chakra-ui/react';

  import { useCartContext } from "../../context/cart.context";
  import { useNavigate } from 'react-router-dom';

 

const CartSummary = () => {
  const { totalExpend } = useCartContext();    
  const navigate = useNavigate();

const handlerCheckout = () =>{
  navigate('/checkout');
}

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>  
        <Stack spacing="6">          
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Cost Total :  {Math.ceil(totalExpend())}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="green" size="lg" fontSize="md" onClick={handlerCheckout}>
          Checkout
        </Button>
      </Stack>
    )
  }

  export default CartSummary;