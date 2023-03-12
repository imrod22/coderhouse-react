import {
    Box,
    Image,
    Stack,
    Flex,
    Text
  } from '@chakra-ui/react';

const PlantOrder = ({plant}) => {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">                 
            <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>                        
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
            </Flex>
    </Flex> )
}

export default PlantOrder;




