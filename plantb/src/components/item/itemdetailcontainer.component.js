import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPlantDetail } from "../../data/plantinformation";
import { ItemDetail } from "./itemdetail.component";
import {
    Flex,
    Spinner
  } from '@chakra-ui/react'

export const ItemDetailContainer = () => {
    const [plant, setPlant] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        getPlantDetail(id)
            .then((result) => {
                setPlant(result)
            })
    }, []);

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