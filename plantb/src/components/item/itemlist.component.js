import { Box } from '@chakra-ui/react';
import { Item } from "./item.component";

export const ItemList = ({plants = []}) => {
    return (        
        <Box display= 'inline-flex'
        flexDirection= 'row'
        flexWrap= 'wrap'
        alignContent= 'flex-end'
        alignItems= 'flex-start'
        justifyContent= 'center'
         >
            {
                plants.length > 0 ? plants.map((plant) => <Item key={plant.id} plant={plant}  />) : <h3> Not found</h3> 
            }
        </Box>
    )
}