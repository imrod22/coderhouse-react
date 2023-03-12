import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import CartAddItem from '../cart/cartadditem.component';

export const ItemDetail = ({ plant }) => {
    const { name, image, description, family, price, storage } = plant;
   
    return (
      
          <Container maxW={'7xl'}>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}>
              <Flex>
                <Image
                  rounded={'md'}
                  alt={'product image'}
                  src={require(`../../assets/images/${image}`)}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={{ base: '100%', sm: '400px', lg: '500px' }}
                />
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={'header'}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    {name}
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.900', 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'}>
                    $ {price}
                  </Text>
                </Box>
      
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={'column'}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue('gray.200', 'gray.600')}
                    />
                  }>
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <Text
                      color={useColorModeValue('gray.500', 'gray.400')}
                      fontSize={'2xl'}
                      fontWeight={'300'}>
                      {family}
                    </Text>
                    <Text fontSize={'lg'}>
                    {description}
                    </Text>
                  </VStack>
                </Stack>
                  <CartAddItem plant={plant}></CartAddItem> 
                  <Stack direction="row" alignItems="center" justifyContent={'center'}>
                  <Text fontSize={'lg'}>
                    stock: {storage}
                    </Text>
                  </Stack>                
                
              </Stack>
            </SimpleGrid>
          </Container>
    
    )
}