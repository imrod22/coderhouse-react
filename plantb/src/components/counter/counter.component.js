import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex
  } from '@chakra-ui/react'

const  CounterPlants = ({plant})  => {  

    return (
      <Flex>
        <NumberInput maxW='100px' mr='2rem' defaultValue={plant.quantity} max={plant.storage} min={0} >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        
      </Flex>
    )
  }

export default CounterPlants;