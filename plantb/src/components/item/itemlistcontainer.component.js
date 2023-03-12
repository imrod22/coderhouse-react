import { useEffect, useState } from "react";
import { ItemList } from "../item/itemlist.component";
import {
    Flex,
    Heading,
    Spinner,
    Divider
  } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { useFirebase } from "../../context/firebase.context";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const ItemListContainer = () => {
    const firebase = useFirebase();
    const [plants, setPlants] = useState([]);
    const [ categoryplant, setCategoryPlant ] = useState("");
    const { category } = useParams();

    useEffect(() => {
        
            const currentPlants = collection(firebase, 'plants');           

            const getPlants = async() => {
                const q = query(
                    currentPlants
                );

                const querySnapshot = await getDocs(q);

                const docs = [];
                querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id, quantity: 0 });
              });

              setPlants(docs);
            };

            const getPlantsByType = async(category) => {

                const q = query(
                    currentPlants,
                    where("category", "==", category)
                );

                const docs = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                  });   
                  setPlants(docs);
            };

            if(category){

            switch (category) {
                    case 'indoor':
                        setCategoryPlant('Indoor');
                        break;
                    case 'outdoor':
                        setCategoryPlant('Outdoor');
                        break;
                    case 'fruittree':
                        setCategoryPlant('Fruit Trees');
                        break;    
                
                    default: setCategoryPlant('All Categories');
                        break;

                }
                getPlantsByType(category);
            }
        
            else{
                setCategoryPlant("All Categories");
                getPlants();
            }         

    }, [firebase, category])


    return (
        <>
            <Flex align="center"
                  minH="15vh"
                  px={10}>
                <Heading
                  as="h1"
                  fontWeight="normal"
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