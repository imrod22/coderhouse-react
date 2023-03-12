import { SimpleGrid, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { where, limit, orderBy } from 'firebase/firestore/lite';
import { Item } from '../item/item.component';
import { useFirebase } from '../../context/firebase.context';
import { collection, getDocs, query } from 'firebase/firestore/lite';

const LastProducts = () => {
    const firebase = useFirebase();
    const [newPlants, setNewPlants] = useState([]);

    useEffect(() => {

        const getLastPlants = async() => {
            const q = query(collection(firebase, 'plants'), where('storage','>', 0), orderBy('storage', 'desc'),limit(5));
            const querySnapshot = await getDocs(q);

            const docs = [];
            querySnapshot.forEach((doc) => {

            docs.push({ ...doc.data(), id: doc.id, quantity: 0 });
          });

          setNewPlants(docs);
        };

        getLastPlants();
    },[firebase]);



    return(
        
        <SimpleGrid
        display= 'flex'
        columnGap={{ base: '4', md: '6' }}
        rowGap={{ base: '8', md: '10' }}
         flexWrap= 'nowrap'
         justifyItems={'center'}
         alignContent= 'flex-end'
         alignItems= 'flex-start'>
        <Heading ml= {"5%"} mb={'5%'} mt={"5%"} fontSize='2xl' fontWeight='extrabold'>
                Last Products in Stock
              </Heading>
            {
                newPlants.map((plant) => <Item key={plant.id} plant={plant}  />)
            }
        </SimpleGrid>
    )

}

export default LastProducts;