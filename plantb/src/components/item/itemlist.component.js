import { SimpleGrid } from '@chakra-ui/react';
import { Item } from "./item.component";

export const ItemList = ({plants = []}) => {
    return (       
        <SimpleGrid
        columnGap={{ base: '4', md: '6' }}
        rowGap={{ base: '8', md: '10' }}  display= 'inline-flex' justifyContent= 'center' flexDirection= 'row'
         flexWrap= 'wrap'
         alignContent= 'flex-end'
         alignItems= 'flex-start'>
            {
                plants.length > 0 ? plants.map((plant) => <Item key={plant.id} plant={plant}  />) : <h3> Not found</h3> 
            }

        </SimpleGrid>
            
        // </Box>
    )
}