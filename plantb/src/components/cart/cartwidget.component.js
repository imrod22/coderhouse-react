import { Box, Circle } from "@chakra-ui/react";
import * as IconFeather from 'react-feather';
import { useCartContext } from "../../context/cart.context";
import { Link as RouteLink } from "react-router-dom";

const CartWidget = () => {
    const { totalPlants } = useCartContext();
    return (
        <Box w={100} paddingLeft={0.5} cursor="pointer">  
        <RouteLink to="/cart">
        <IconFeather.ShoppingCart></IconFeather.ShoppingCart>
        <Circle size='20px'zIndex={9999} top={'35px'} right={'60px'} fontSize={'0.8rem'} position={'absolute'} bg='tomato' color='white'>{totalPlants()}</Circle>
    
        </RouteLink>      
         </Box>
    );
};

export default CartWidget;