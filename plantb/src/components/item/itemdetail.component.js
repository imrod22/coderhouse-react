import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

import * as IconFeather from 'react-feather';

export const ItemDetail = ({ plant }) => {
    const { name, image, description, family, price, arrived } = plant;
   
    return (
        
        <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={require(`../../assets/images/${image}`)}
              alt="Card Image" boxSize="100%"
            />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {family}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>
              {description}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <IconFeather.CheckCircle></IconFeather.CheckCircle>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{price}</Text>
              <Text color={'gray.500'}>Available from {arrived}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    
    )
}