import {
    Box,
    Flex,
    Heading,
    Stack,
    Button    
    } from '@chakra-ui/react';

import * as IconFeather from 'react-feather';
import CartItem from './cartitem.component';
import CartSummary from './cartsummary.component';
import { useCartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const handlerEmptyCart = () => {
    emptyCart();
  };

  const handlerReturnToPlants = () => {
    navigate('/plants')
  };

  const { cart, emptyCart, totalPlants } = useCartContext();

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
      <Heading fontSize="2xl" fontWeight="extrabold">
          My Cart ({totalPlants()} Plant/s)
        </Heading>
        <Button
        placeholder='Clear Cart'
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        onClick={handlerEmptyCart} >
         <IconFeather.Trash/> Empty Cart 
      </Button>
        <Stack spacing="6">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>    

      <Flex direction="column" align="center" flex="1">
        <CartSummary/>
        <Button mt={"5%"}
        placeholder='Return'
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        onClick={handlerReturnToPlants} >
         <IconFeather.ArrowLeft/> Return to Catalog
      </Button>
    
      </Flex>

      </Stack>      
      </Box>
 )    
}

export default Cart;