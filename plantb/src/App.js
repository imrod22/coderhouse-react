import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './assets/themes/font.theme';
import { CartProvider } from './context/cart.context';
import { db } from './firebase/firebase.configuration';
import { FirebaseContext } from './context/firebase.context';
import { SessionProvider } from './context/session.context';
import { PlantBRouter } from './routes/router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FirebaseContext.Provider value={db}>      
      <CartProvider>
      <SessionProvider>
      <PlantBRouter/>
      </SessionProvider>
      </CartProvider>      
      </FirebaseContext.Provider>   
    </ChakraProvider>    
  );
}

export default App;
