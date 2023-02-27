import StatContainer from "../../components/greeting/statcontainer.component";

import {
  Container,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

const AboutUs = () => {
    return (

      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mt="5%">
        <Heading fontSize={'3xl'}>We believe that a world full of plants is a better world.</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          The impact of CO2 is real: this gas is the product of industrial activity and emissions from cars. The excess of CO2 increases the retention of heat in the atmosphere, increasing the levels of global warming.
          Together we can make a difference and help reduce CO2 levels in our cities, helping to avoid climate change that can destroy our planet. How can you contribute? Whether your home has just one plant or a jungle: more green will help in the fight to reduce the amounts of toxic gases.
          Orders have a maximum period of 48 hours to be dispatched once the payment has been completed.
        </Text>
        <StatContainer></StatContainer>

      </Stack>


     
    
    )}

export default AboutUs;