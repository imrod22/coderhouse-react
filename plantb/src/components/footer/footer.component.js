import {
    Flex,
    chakra
  } from '@chakra-ui/react'
  
  import * as IconFeather from 'react-feather';
  
 const Footer = () => {  
    return (


<Flex
  w="full"
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  alignItems="center"
  justifyContent="center"
  mt={"2%"}
>
  <Flex
    w="full"
    as="footer"
    flexDir={{
      base: "column",
      sm: "row",
    }}
    align="center"
    justify="space-between"
    px="6"
    py="4"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
  >
    <chakra.a
      href="#"
      fontSize="xl"
      fontWeight="bold"
      color="gray.600"
      _dark={{
        color: "white",
        _hover: {
          color: "gray.300",
        },
      }}
      _hover={{
        color: "gray.700",
      }}
    >
      Imanol Rodriguez Morales
    </chakra.a>

    <chakra.p
      py={{
        base: "2",
        sm: "0",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
    >
      Plant B Grow Shop - copyright &copy; {new Date().getFullYear()}
    </chakra.p>

    <Flex mx="-2" >
      <chakra.a
        href="#"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Reddit"
      >
        <IconFeather.Instagram/>
      </chakra.a>

      <chakra.a
        href="#"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Facebook"
      >
        <IconFeather.Facebook/>
      </chakra.a>

      <chakra.a
        href="#"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Github"
      >
        <IconFeather.GitHub/>
      </chakra.a>
    </Flex>
  </Flex>
</Flex>
    )
  }
  export default Footer