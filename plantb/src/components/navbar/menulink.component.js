import React from "react";
import MenuItem from './menuitem.component';
import { Box, Stack } from "@chakra-ui/react";

const MenuLinks = () => {
    return( <Box
        flexBasis={{ base: "30%", md: "40%" }}
      >
        <Stack
          spacing={10}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem pagepath="/plants" section="All"/>
          <MenuItem pagepath="/plants/category/indoor" section="Indoor"/>
          <MenuItem pagepath="/plants/category/outdoor" section="Outdoor"/>
          <MenuItem pagepath="/plants/category/fruittree" section="Fruit-Trees"/>
          <MenuItem pagepath="/about" section="Us"/>
        </Stack>
      </Box>);     
};

export default MenuLinks;