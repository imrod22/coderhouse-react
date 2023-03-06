import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex
  } from '@chakra-ui/react';

import { useCartContext } from '../../context/cart.context';
import toast, { Toaster } from 'react-hot-toast';

const  CounterPlant = ({plant})  => {  

  const { addPlantToCart, removePlantInCart } = useCartContext();

  const handlerAddMoreQuantity = () => {
    const {id, name, price, family, image, quantity, storage, type} = plant;
      const plantSelected = {
          id,
          image,
          name,
          type,
          price,
          family,
          quantity,
          storage
      }

    addPlantToCart(plantSelected);
    toast.success(plantSelected.name + ' - Added One More to List!');
  };

  const handlerRemoveQuantity = () => {
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

    removePlantInCart(plantSelected);
    toast.success(plantSelected.name +' - Removed One from List!');
  };


    return (
      <Flex>
        <NumberInput maxW='100px' mr='2rem' defaultValue={plant.quantity} max={plant.storage} min={1} >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={handlerAddMoreQuantity}/>
            <NumberDecrementStepper onClick={handlerRemoveQuantity}/>
          </NumberInputStepper>
        </NumberInput>
        <Toaster/>
        
      </Flex>
      
    )
  }

export default CounterPlant;