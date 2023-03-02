import {
    Box,
    Flex,
    Stack,
    Button    
    } from '@chakra-ui/react';

import * as IconFeather from 'react-feather';
import CartItem from './cartitem.component';
import { useCartContext } from "../../context/cart.context";

const Cart = () => {

  const handlerEmptyCart = () => {
    emptyCart();
  }

    const { cart, emptyCart } = useCartContext();

 return (
    
    <Box
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '8', md: '16' }}
    >
      <Stack spacing={{ base: '8', md: '10' }} flex="2">

        <Stack spacing="6">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>      

      <Flex direction="row" display="flex" alignContent="flex-end" justifyContent="flex-end" padding="1%" align="center" flex="1">
      <Button
        placeholder='Return'
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        onClick={handlerEmptyCart} >
        <IconFeather.ArrowLeft/>
      </Button>
      <Button
        placeholder='Clear Cart'
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        onClick={handlerEmptyCart} >
        <IconFeather.Trash/>
      </Button>
      </Flex>      
      </Stack>      
      </Box>
 )
    
}

export default Cart;