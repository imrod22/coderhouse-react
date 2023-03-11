import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Text
    } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.configuration';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { useSessionContext } from '../../context/session.context';
import PlantOrderContainer from './plantordercontainer.component';

const ShopOrder = () => {
    const { user } = useSessionContext();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const ordersQuery = query(collection(db, 'orders'), where('user.id', '==', user.id));
    
        getDocs(ordersQuery).then(
            (orderDatabase) => {
                const order = orderDatabase.docs.map((orderDocument) => {                   

                    return {
                        ...orderDocument.data(),
                        id: orderDocument.ref.id
                    }
                })
                setMyOrders(order);
            });
        },[user]);

    return (

    <Box    maxW={{ base: '3xl', lg: '7xl' }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}>

        {
            myOrders.length === 0 ?

            <Box>

            </Box>

            :

            <Accordion defaultIndex={[0]} allowMultiple>
                {myOrders.map((currentOrder, index) =>
                <AccordionItem key={index.toString()}>                    
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                          Order Number: {currentOrder.id}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {currentOrder.order.map((item) => (
                    <PlantOrderContainer key={item.id} {...item} />
                  ))}
                  </AccordionPanel>
                  <Text display={"flex"} justifyContent={"space-evenly"}>Total Cost: {currentOrder.total}</Text>  
                </AccordionItem> 
                
                )}   
                           
          </Accordion>
        }        
    </Box>
        
    )
}

export default ShopOrder;

