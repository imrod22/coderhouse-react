import { 
       Badge, 
      AspectRatio,
      Box,
      Button,
      HStack,
      Image,
      Skeleton,
      Stack,
      Text,
      useColorModeValue, 
    } 
    from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function stylingPlantType(aType) {
    switch (aType) {
        case 'dry':
            return  <Badge variant='subtle' border={"1px"} colorScheme="yellow">{aType}</Badge>
        case 'heat':
            return  <Badge variant='subtle' border={"1px"} colorScheme="red">{aType}</Badge>
        case 'swamp':
            return  <Badge variant='subtle' border={"1px"} colorScheme="purple">{aType}</Badge>
        case 'cold':
            return  <Badge variant='subtle' border={"1px"} colorScheme="blue">{aType}</Badge>
        default:
            return  <Badge variant='subtle' border={"1px"} colorScheme="green">{aType}</Badge>
    }
}

export const Item = ({ plant }) => {
    const { id, name, type, image } = plant;
    const navigate = useNavigate();

    const viewDetailPlan = () => {
        navigate(`/plants/detail/${id}`);  
    }

        return (
<Box w="300px" m={10} border="1px" borderRadius={"md"} padding="1%">
<Stack spacing={{ base: '4', md: '5' }}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={require(`../../assets/images/${image}`)}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: 'md', md: 'xl' }}
          />
        </AspectRatio>
      </Box>
      <Stack>
      <HStack>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          {stylingPlantType(type)}
          </Text>
        </HStack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {name}
          </Text>
        </Stack>
        
      </Stack>
      <Stack  align="center" 
              display= "flex"
              justifyContent= "flex-end"
              alignItems= "inherit">
      <Button variant="solid" color="#ffffff" bg={"#639502"}
            size="sm" _hover={{
              transform: 'translateY(2px)'}} onClick={viewDetailPlan}>
              Details
          </Button>
      </Stack>
    </Stack>
</Box>
    )
}