import React from "react";
import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ section, to="/"}) => {
    return (
      <Link 
      _hover={{fontWeight: 1000}}
        href={to}>
        <Text display="block">
          {section}
        </Text>
      </Link>
    );
  };

  export default MenuItem;