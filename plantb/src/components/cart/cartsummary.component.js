import {
    Button,
    Flex,
    Heading,
    Stack,
    Text
  } from '@chakra-ui/react';

  import { useCartContext } from "../../context/cart.context";

const CartSummary = () => {
    const { totalExpend } = useCartContext();

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>  
        <Stack spacing="6">          
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Cost Total :  {Math.ceil(totalExpend())}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="green" size="lg" fontSize="md">
          Checkout
        </Button>
      </Stack>
    )
  }

  export default CartSummary;