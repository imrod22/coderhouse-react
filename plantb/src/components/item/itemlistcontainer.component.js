import { useEffect, useState } from "react";
import { getPlantsByCategory, getAllPlants } from "../../data/plantinformation";
import { ItemList } from "../item/itemlist.component";
import {
    Flex,
    Heading,
    Spinner,
    Divider
  } from '@chakra-ui/react'
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [plants, setPlants] = useState([]);
    const [categoryplant, setCategoryPlant] = useState("");
    const {category} = useParams();

    useEffect(() => {
        if(category){
            setCategoryPlant(category)
            getPlantsByCategory(category)
            .then((res) => {          
                setPlants(res);
            })
        }
        else{
            setCategoryPlant("All Categories")
            getAllPlants()
                .then((res) => {
                    setPlants(res)
                })
        }
    }, [category])


    return (
        <>
            <Flex      
      align="center"
      minH="15vh"
      px={10}
    >
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.5"
          fontWeight="normal"
          border={"1px"}
          borderColor={"grey"}
          p={"2rem"}
        >
          {categoryplant}
        </Heading>    
    </Flex>
    <Divider />
            {               
                plants.length > 0 
                ? <ItemList plants={plants} />
                :  <Flex    display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="inherit">
                        <Spinner thickness='5px'
                            speed='0.35s'
                            emptyColor='gray.200'
                            color='green.300'
                            size='xl'
                            marginTop="5%" />
                    </Flex>
                
            }
        </>
    )
}