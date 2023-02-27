import {
    Box,
    chakra,
    SimpleGrid,
  } from '@chakra-ui/react';

  import StatCard from "../../components/greeting/statcard.component";

  import * as IconFeather from 'react-feather';

const StatContainer = () => {
    return(
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
<chakra.h1
  textAlign={'center'}
  fontSize={'2xl'}
  py={10}
  fontWeight={'bold'}>
  Our shop continue expanding.
</chakra.h1>
<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} mb="30%">
  <StatCard
    title={'Clients'}
    stat={'~2,000'}
    icon={<IconFeather.UserCheck size={'3em'}/>}
  />
  <StatCard
    title={'Shipments'}
    stat={'+15,000'}
    icon={<IconFeather.Box size={'3em'}/>}
  />
  <StatCard
    title={'Countries'}
    stat={'5'}
    icon={<IconFeather.Map size={'3em'}/>}
  />
</SimpleGrid>
</Box>
)};

export default StatContainer;

