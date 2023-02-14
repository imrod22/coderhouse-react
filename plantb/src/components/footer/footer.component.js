import {
    Flex,
    HStack,
    IconButton,
    Spacer,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  import * as IconFeather from 'react-feather';
  
  export const Footer = () => {
    const bg = useColorModeValue('gray.100', 'gray.800')
  
    return (
        <Flex direction={['column', 'column', 'row']} position='absolute'
                left={0}
                bottom={0}
                right={0} px={6} align="center" bg={bg}
                marginTop='auto'
                >
          
          <Spacer />
          <Text fontSize="sm">Copyright &copy; {new Date().getFullYear()} Plant B - Imanol Rodriguez Morales.</Text>
          <Spacer />
          <HStack spacing={1}>
            <IconButton aria-label="Facebook" icon={<IconFeather.Twitter/>}></IconButton>
            <IconButton aria-label="Twitter" icon={<IconFeather.Facebook/>}></IconButton>
            <IconButton aria-label="LinkedIn" icon={<IconFeather.Instagram/>}></IconButton>
            <IconButton aria-label="Github" icon={<IconFeather.GitHub/>}></IconButton>
          </HStack>
        </Flex>
      
    )
  }
  export default Footer