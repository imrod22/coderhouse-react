import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navbar/navbar.component';
import theme from './assets/themes/font.theme';
import ItemListContainer from './components/greeting/itemlistcontainer.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <NavBar></NavBar>
        <ItemListContainer greeting="Welcome to Plant-B grow shop online."></ItemListContainer>
      </div>
    </ChakraProvider>    
  );
}

export default App;
