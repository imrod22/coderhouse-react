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
          <MenuItem to="/indoor" section="Indoor"/>
          <MenuItem to="/outdoor" section="Outdoor"/>
          <MenuItem to="/fruit-trees" section="Frutales"/>
          <MenuItem to="/about" section="About"/>
        </Stack>
      </Box>);     
};

export default MenuLinks;