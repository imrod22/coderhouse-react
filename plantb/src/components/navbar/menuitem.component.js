import React from "react";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ section, pagepath="/"}) => {

    return (
      <NavLink      
        to={pagepath}>
        <Text _hover={{fontWeight: 1000}} display="block">
          {section}
        </Text>
      </NavLink>
    );
  };

  export default MenuItem;