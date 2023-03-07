import { 
  Image,
  chakra,
  Box,
  Icon,
} from '@chakra-ui/react';

const Greeting = (props) => {
return(

<Box pos="relative" overflow="hidden" bg={"#8d858517"} mt={10}>
<Box maxW="7xl" mx="auto">
  <Box
    pos="relative"
    pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
    maxW={{ lg: "2xl" }}
    w={{ lg: "full" }}
    zIndex={1}
    bg={"#ffffff"}
    border="solid 1px transparent"
  >
    <Icon
      display={{ base: "none", lg: "block" }}
      position="absolute"
      right={0}
      top={0}
      bottom={0}
      h="full"
      w={48}
      color={"#ffffff"}
      transform="translateX(50%)"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </Icon>
    <Box
      mx="auto"
      maxW={{ base: "7xl" }}
      px={{ base: 4, sm: 6, lg: 8 }}
      mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
    >
      <Box
        w="full"
        textAlign={{ sm: "center", lg: "left" }}
        justifyContent="center"
        alignItems="center"
      >
        <chakra.h1
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          letterSpacing="tight"
          lineHeight="short"
          fontWeight="extrabold"
          color="gray.900"
          _dark={{ color: "white" }}
        >
          <chakra.span display={{ base: "block"}}>
          Welcome to Plant-B
          </chakra.span>
          <chakra.span
            display={{ base: "contents", xs: "inline" }}
            color="brand.200"
            fontSize={"xx-large"}
            _dark={{ color: "brand.400" }}
          >
            Grow shop online
          </chakra.span>
        </chakra.h1>
        <chakra.p
          mt={{ base: 3, sm: 5, md: 5 }}
          fontSize={{ sm: "lg", md: "xl" }}
          maxW={{ sm: "xl" }}
          mx={{ sm: "auto", lg: 0 }}
          color="gray.500"
        >
          {props.greeting}
        </chakra.p>
        <Box
          mt={{ base: 5, sm: 8 }}
          display={{ sm: "flex" }}
          justifyContent={{ sm: "center", lg: "start" }}
          fontWeight="extrabold"
        >
        </Box>
      </Box>
    </Box>
  </Box>
</Box>
<Box
  position={{ lg: "absolute" }}
  top={{ lg: 0 }}
  bottom={{ lg: 0 }}
  right={{ lg: 0 }}
  w={{ lg: "50%" }}
  border="solid 1px transparent"
>
  <Image
    h={[56, 72, 96, "full"]}
    w="full"
    fit="cover"
    src={require(`../../assets/images/homeflowersimage.jpg`)}
    alt=""
    loading="lazy"
  />
</Box>
</Box>
);

};

export default Greeting;