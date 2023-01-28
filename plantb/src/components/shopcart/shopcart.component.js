import { Box, Circle } from "@chakra-ui/react";
import * as IconFeather from 'react-feather';

const ShopCart = (props) => {
    return (
        <Box w={100} paddingLeft={0.5} cursor="pointer">        
           <IconFeather.ShoppingCart></IconFeather.ShoppingCart>
        <Circle size='20px'zIndex={9999} top={'35px'} right={'60px'} fontSize={'0.8rem'} position={'absolute'} bg='tomato' color='white'>{props.counter}</Circle>
        </Box>
    );
};

export default ShopCart;