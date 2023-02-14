import { Flex, Heading } from '@chakra-ui/react';

const Greeting = (props) => {
return(
    
    <Flex      
      align="center"
      wrap="no-wrap"
      minH="30vh"
      px={10}
    >
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.5"
          fontWeight="normal"
          border={"1px"}
          borderColor={"grey"}
          p={"2rem"}
        >
          {props.greeting}
        </Heading>    
    </Flex>
)
};

export default Greeting;