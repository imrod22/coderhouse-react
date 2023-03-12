import React from "react";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ section, pagepath="/", setMargin="0" }) => {

    return (
      <NavLink      
        to={pagepath}>
        <Text _hover={{fontWeight: 1000}} ml={setMargin} display="flex">
          {section}
        </Text>
      </NavLink>
    );
  };

  export default MenuItem;