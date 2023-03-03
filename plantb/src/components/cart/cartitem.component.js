import { Flex, CloseButton } from '@chakra-ui/react'
import CounterPlants from '../counter/counter.component';
import CartItemDetail from '../cart/cartitemdetail.component';
import { useCartContext } from "../../context/cart.context";
import { toast } from 'react-hot-toast';

const CartItem = (plant) => {

const { removeAllPlantInCart } = useCartContext();

const handlerRemovePlant = () => {
      const {id, name, price, family, image, quantity, storage} = plant;
      
      const plantSelected = {
          id,
          image,
          name,
          price,
          family,
          quantity,
          storage
      }

      removeAllPlantInCart(plantSelected);
      toast.success('Plant Removed!');
}

 return (
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <CartItemDetail plant={plant}/>      
            <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
                  <CounterPlants plant={plant}/>
                  <CloseButton onClick={handlerRemovePlant}/>
            </Flex>
      </Flex>
 )}

 export default CartItem;
