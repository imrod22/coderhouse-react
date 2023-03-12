import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex
  } from '@chakra-ui/react';

import { useCartContext } from '../../context/cart.context';
import toast from 'react-hot-toast';

const  CounterPlant = ({plant})  => {  

  const { addPlantToCart, removePlantInCart, plantQuantity } = useCartContext();

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

      if(plantSelected.storage === 0 || plantQuantity(plantSelected) >= plantSelected.storage)
      {
        toast.error('No More Stock Available!');
      }
      else
      {
        addPlantToCart(plantSelected);
        toast.success('Add Plant to Cart!');
      }

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
      </Flex>      
    )
  }

export default CounterPlant;