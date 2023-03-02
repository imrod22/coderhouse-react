import {
    Button,
    Flex,
    useColorModeValue
  } from '@chakra-ui/react';

  import { useCartContext } from "../../context/cart.context";
  import toast, { Toaster } from 'react-hot-toast';

const CartAddItem = ({disabled = false, plant}) => {

    const { existsProduct, addPlantToCart } = useCartContext();

    const handlerAddPlant = () => {
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

      if(!existsProduct(plantSelected))
      {
        addPlantToCart(plantSelected);
        toast.success('Add Plant to Cart!');
      }
      else{
        toast('Already Added')
      }
      
      
    }
    
    return (
     <Flex>
 <Button
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  size={'lg'}
                  py={'7'}
                  bg={"#639502"}
                  color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}
                  
                  onClick={handlerAddPlant} disabled={disabled}>
                  Add to cart
                </Button>

  <Toaster/>
     </Flex>
    )
}

export default CartAddItem;
