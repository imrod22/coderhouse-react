import { Box, Image, Badge, Text, Stack, 
    useColorMode, Button, Flex, Spacer } 
    from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function stylingPlantType(aType) {
    switch (aType) {
        case 'dry':
            return  <Badge variant='subtle' colorScheme="yellow">{aType}</Badge>
        case 'heat':
            return  <Badge variant='subtle' colorScheme="red">{aType}</Badge>
        case 'swamp':
            return  <Badge variant='subtle' colorScheme="purple">{aType}</Badge>
        case 'cold':
            return  <Badge variant='subtle' colorScheme="blue">{aType}</Badge>
        default:
            return  <Badge variant='subtle' colorScheme="green">{aType}</Badge>
    }
}


export const Item = ({ plant }) => {
    const { id, name, price, type, image, description } = plant;
    const navigate = useNavigate();
        return (
        //     <Box
        //     p={4}
        //     display={{ md: "flex" }}
        //     maxWidth="32rem"
        //     borderWidth={1}
        //     margin={2}
        //   >
        //     <AspectRatio ratio={1 / 1}>
        //       <Image
        //         maxWidth="100px"
        //         margin="auto"
        //         src={require(`../../assets/images/${image}`)}
        //       />
        //     </AspectRatio>
        //     <Stack
        //       align={{ base: "center", md: "stretch" }}
        //       textAlign={{ base: "center", md: "left" }}
        //       mt={{ base: 4, md: 0 }}
        //       ml={{ md: 6 }}
        //     >
        //       <Text
        //         fontWeight="bold"
        //         textTransform="uppercase"
        //         fontSize="lg"
        //         letterSpacing="wide"
        //         color="teal.600"
        //       >
        //         {name}
        //       </Text>
        //       <Link
        //         my={1}
        //         display="block"
        //         fontSize="md"
        //         lineHeight="normal"
        //         fontWeight="semibold"
        //         href="#"
        //       >
        //         {price}
        //       </Link>
        //       <Text my={2} color="gray.500">
        //         {description}
        //       </Text>
        //       <Stack direction='row'>
        //       {stylingPlantType(type)}
        //       </Stack>
              
        //     </Stack>
        //   </Box>
        <Box w="300px" rounded="20px" m={10} border={"1px"} 
        borderColor={"grey"}
        overflow="hidden" mt={10}>
     <Image src={require(`../../assets/images/${image}`)}
            alt="Card Image" boxSize="300px">
     </Image>
     <Box p={5}>
     <Stack direction='row'>
              {stylingPlantType(type)}
      </Stack>
       <Stack align="center">
       <Text
                 fontWeight="bold"
                 textTransform="uppercase"
                 fontSize="lg"
                 letterSpacing="wide"
                 color="teal.600"
               >
                 {name}
               </Text>
         <Text fontWeight="light">
           
         </Text>
       </Stack>
       <Flex>  
         <Spacer />
         <Button variant="solid" 
           colorScheme="green" size="sm">
             Details
         </Button>
       </Flex>
     </Box>
   </Box>          
    )
}