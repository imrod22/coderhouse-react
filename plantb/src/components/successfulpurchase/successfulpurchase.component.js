import {
    Flex,
    Box,
    chakra,
    Stack,
    Button
    } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SuccessfulPurchase = ({orderNumber}) => {
    const navigate = useNavigate();

    const handlerGoCatalog = () => {
        navigate('/plants')
      };

    const handlerGoToOrders = () => {
      navigate('/orders')
    };

    return (
      <Box    maxW={{ base: '3xl', lg: '7xl' }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}>

            <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    bg="gray.50"
    _dark={{
      bg: "gray.800",
    }}
  >
    <Box maxW="7xl" w={{md: "3xl", lg: "4xl"}} mx="auto" py={{ base: 12, lg: 16 }}
                                                         px={{
                                                           base: 4,
                                                           lg: 8,
                                                         }}
                                                         display={{
                                                           lg: "flex",
                                                         }}
                                                         alignItems={{
                                                           lg: "center",
                                                         }}
                                                         justifyContent={{
                                                           lg: "space-between",
                                                         }} >
            <chakra.h2
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="gray.900"
              _dark={{
                color: "gray.100",
              }}
            >
              <chakra.span
                display="block"
                color="brand.600"
                _dark={{
                  color: "gray.500",
                }}
              >
                Thanks! Our Order Number is: <Box color='green'>{orderNumber}</Box>
              </chakra.span>
            </chakra.h2>
                <Stack
                  direction={{
                    base: "column",
                    sm: "row",
                  }}
                  mt={{
                    base: 8,
                    lg: 0,
                  }}
                  flexShrink={{
                    lg: 0,
                  }}
                >

        <Flex display={"flex"} flexWrap = {"wrap"}>
        <Button onClick={handlerGoCatalog} colorScheme="green"  width="full" variant="outline" mt={4}>
                Go to Catalog
        </Button> 
        <Button onClick={handlerGoToOrders} colorScheme="green"  width="full" variant="outline" mt={4}>
                Go My Orders
        </Button> 


        </Flex>
        

      </Stack>
    </Box>
  </Box>
</Flex>
</Box>     

    );
};

export default SuccessfulPurchase;