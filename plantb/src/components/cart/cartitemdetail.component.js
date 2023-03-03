import {
    Box,
    Image,
    Stack,
    Text
  } from '@chakra-ui/react';  
  
const CartItemDetail = ({plant}) => {
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={require(`../../assets/images/${plant.image}`)}
          alt={plant.name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{plant.name}</Text>
          </Stack>          
        </Box>
      </Stack>
    )
  }

  export default CartItemDetail;