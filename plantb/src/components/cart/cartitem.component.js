import { Flex } from '@chakra-ui/react'
import CounterPlants from '../counter/counter.component';


const CartItem = (props) => {
 return (
<Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      {props.name}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
      <CounterPlants plant = {props}></CounterPlants>
      </Flex>
</Flex>

 )}

 export default CartItem;
