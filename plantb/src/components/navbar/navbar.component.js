import { Flex, Icon, Spacer, Text, Menu, MenuButton, Link, MenuList } from '@chakra-ui/react';
import MenuLinks from './menulink.component';
import { ReactComponent as Logo } from '../../assets/plantb-logo.svg';
import CartWidget from '../cart/cartwidget.component';
import { Link as RouteLink } from "react-router-dom";
import { useSessionContext } from '../../context/session.context';
import { useNavigate } from "react-router-dom";
import MenuItem from './menuitem.component';

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
          <Menu autoSelect={false} isLazy >
            <>
              <MenuButton _hover={{fontWeight: 1000}}>
                <Flex alignItems="center" >
                  <Text>Hello {user.name}</Text>
                </Flex>
              </MenuButton>
              <MenuList
                zIndex={5}
                display={"flex"}
                alignItems= {"stretch"}
                flexDirection= {"column"}
                flexWrap= {"wrap"}
                alignContent= {"space-between"}
                bg="#bfd1ba" 
                border={'1px solid'}
              >
                <MenuItem pagepath="/orders" setMargin='15%' section="Orders"></MenuItem>
                <Link ml="5%"_hover={{fontWeight: 1000}} onClick={handlerExit}>
                    <Text>Exit</Text>
                </Link>
                
              </MenuList>
            </>
        </Menu>
      }          
        <CartWidget/>   
      </Flex>     
    );
  };
  
  export default NavBar;