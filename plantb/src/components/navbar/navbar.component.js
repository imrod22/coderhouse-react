import { Flex, Icon, Spacer, Button, Text, Box } from '@chakra-ui/react';
import MenuLinks from './menulink.component';
import { ReactComponent as Logo } from '../../assets/plantb-logo.svg';
import CartWidget from '../cart/cartwidget.component';
import { Link as RouteLink } from "react-router-dom";
import { useSessionContext } from '../../context/session.context';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const { logout, user } = useSessionContext();
    const navigate = useNavigate();

    const handlerExit = () => {
      logout();
      navigate('/');
    } 

    return (
      <Flex
        as="nav"
        align="center"
        justify={{ base: "flex-start" }}
        wrap="wrap"
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }} 
        boxShadow='lg'
        backgroundColor="#bfd1ba" 
      >

       <RouteLink to="/">
             <Icon as={Logo} cursor={'pointer'} w={150} h={100} paddingRight={0.5} transition="all .25s ease" _hover={{ transform: 'scale(1.33)' }}/>
        </RouteLink>
        <MenuLinks/> 
        <Spacer />
        {
          user.active &&
          <Box  alignItems= "center"
                alignContent= "space-between"
          display= "flex"
          justifyContent= "space-evenly"
          flexWrap= "wrap"
          flexDirection="row" >
            <Text _hover={{fontWeight: 1000}} display="block" mr={4}>
              Hello {user.name}
            </Text>
            <Button onClick={handlerExit} mr={4}>              
            Exit
            </Button>
          </Box>
          
          }   
        <CartWidget/>   
      </Flex>     
    );
  };
  
  export default NavBar;