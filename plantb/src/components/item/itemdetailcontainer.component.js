import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./itemdetail.component";
import { useFirebase } from "../../context/firebase.context";
import { doc, getDoc } from 'firebase/firestore/lite';

import {
    Flex,
    Spinner
  } from '@chakra-ui/react'

export const ItemDetailContainer = () => {
    const [plant, setPlant] = useState(null);
    const firebase = useFirebase();
    const { id } = useParams();
    
    useEffect(() => {
        const selectedPlant = doc(firebase, 'plants', id);

        getDoc(selectedPlant).then((p) => {
            setPlant({...p.data(), id: p.id})
        })

    },[firebase, id]);

return (
        <>
        {
            plant ? <ItemDetail key={plant.id} plant={plant} /> : 
            <Flex   display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="inherit">
            <Spinner    thickness='5px'
                        speed='0.35s'
                        emptyColor='gray.200'
                        color='green.300'
                        size='xl'
                        marginTop="10%" />
            </Flex>
        } 
        </>
    )
}