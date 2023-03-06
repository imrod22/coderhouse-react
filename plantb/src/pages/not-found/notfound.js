import {
    Container,
    Image,
    Stack,
  } from '@chakra-ui/react';
  
  const NonFound = () => {
      return (
  
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mt="5%">
            <Image
                h={[56, 72, 96, "full"]}
                w="full"
                fit="cover"
                src={require(`../../assets/images/error-404.jpg`)}
                alt=""
                loading="lazy"
          />    
        </Stack>   
      )}
  
  export default NonFound;