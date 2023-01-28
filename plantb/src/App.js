import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navbar/navbar.component';
import theme from './assets/themes/font.theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <NavBar>
        </NavBar>
      </div>
    </ChakraProvider>    
  );
}

export default App;
