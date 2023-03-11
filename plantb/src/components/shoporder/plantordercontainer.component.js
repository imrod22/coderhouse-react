import {
    Flex
  } from '@chakra-ui/react';

import CartItemDetail from '../cart/cartitemdetail.component';

const PlantOrderContainer = (item) => {

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <CartItemDetail plant={item}/>      
            <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
            Quantity: {item.quantity} - Cost : {item.quantity * item.price}
            </Flex>
      </Flex> 
            )
}

export default PlantOrderContainer;