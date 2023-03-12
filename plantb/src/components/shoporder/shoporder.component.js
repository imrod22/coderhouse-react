import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Link,
    Stack,
    chakra,
    Flex,
    Text,
    Heading
    } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.configuration';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { useSessionContext } from '../../context/session.context';
import PlantOrderContainer from './plantordercontainer.component';
import { useNavigate } from "react-router-dom";


const ShopOrder = () => {
    const { user } = useSessionContext();
    const [myOrders, setMyOrders] = useState([]);

    const navigate = useNavigate();

    const handlerCatalog = () => {
      navigate('/plants');
    } 

    useEffect(() => {
        const ordersQuery = query(collection(db, 'orders'), where('user.id', '==', user.id));
    
        getDocs(ordersQuery).then(
            (orderDatabase) => {
                let order = orderDatabase.docs.map((orderDocument) => {                   

                    return {
                        ...orderDocument.data(),
                        id: orderDocument.ref.id
                    }
                })

              order =  order.sort(function(a,b) {
                  a = Date.parse(a.date);
                  b = Date.parse(b.date);
                  return a < b ? 1 : a > b ? -1 : 0;
                })

                setMyOrders(order);
            });
        },[user]);

    return (

    <Box    maxW={{ base: '3xl', lg: '7xl' }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}>
              <Heading mb={"5%"} fontSize="2xl" fontWeight="extrabold">
                My Orders
              </Heading>

        {
            myOrders.length === 0 ?

            <Flex   bg="#edf3f8"
                    _dark={{
                      bg: "#3e3e3e",
                    }}
                    p={50}
                    w="full"
                    alignItems="center"
                    justifyContent="center">
              <Box
                bg="gray.50"
                _dark={{
                  bg: "gray.800",
                }}>
                <Box
                  maxW="7xl"
                  w={{
                    md: "3xl",
                    lg: "4xl",
                  }}
                  mx="auto"
                  py={{
                    base: 12,
                    lg: 16,
                  }}
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
                  }}>
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
                      color: "gray.200",
                    }}
                  >
                    <chakra.span
                      display="block"
                      color="brand.600"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      You dont have any orders yet.
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
                    <Link
                      w={["full", "auto"]}
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="bold"
                      rounded="md"
                      shadow="md"
                      color="brand.600"
                      bg="white"
                      _hover={{
                        bg: "brand.50",
                      }}
                      onClick={handlerCatalog}
                    >
                      Return to Catalog
                    </Link>
                  </Stack>
                </Box>
            </Box>
          </Flex> :
          
            <Accordion defaultIndex={[0]} allowMultiple>
                {myOrders.map((currentOrder, index) =>
                <AccordionItem borderColor={"black"} key={index.toString()}>                    
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                          Order Number: {currentOrder.id}
                      </Box>
                      <Box as="span" flex='1' textAlign='right' mr="10%">
                          Purchase Date: {currentOrder.date}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {currentOrder.order.map((item) => (
                    <PlantOrderContainer key={item.id} {...item} />
                  ))}
                  </AccordionPanel>
                  <Text display={"flex"} justifyContent={"space-evenly"}>Total Cost: $ {currentOrder.total}</Text>  
                </AccordionItem> 
                
                )}   
                           
          </Accordion>
        }        
    </Box>
        
    )
}

export default ShopOrder;

