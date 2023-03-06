import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navbar/navbar.component';
import theme from './assets/themes/font.theme';
import Greeting from './components/greeting/greeting.component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AboutUs from './pages/aboutus/aboutus';
import Footer from './components/footer/footer.component';
import { ItemListContainer } from './components/item/itemlistcontainer.component';
import { ItemDetailContainer } from './components/item/itemdetailcontainer.component';
import { CartProvider } from './context/cart.context';
import { db } from './firebase/firebase.configuration';
import { FirebaseContext } from './context/firebase.context';
import Cart from './components/cart/cart.component';
import NonFound from './pages/not-found/notfound';
import { SessionProvider } from './context/session.context';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FirebaseContext.Provider value={db}>      
      <CartProvider>
      <SessionProvider>
      <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Greeting greeting="Plants have many health benefits as they purify the air, connect you with nature and boost your creativity. In our site you will find a wide variety of Indoor and Outdoor Plants and fruit trees."/>} />
            <Route path="/plants" element={<ItemListContainer/>} />
            <Route path="/plants/category/:category" element={<ItemListContainer/>} />
            <Route path="/plants/detail/:id" element={<ItemDetailContainer/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/cart" element={ <Cart/>} />
            <Route path="/error" element={<NonFound/>} />
            <Route path='*' element={ <Navigate to="/error"/> } />
        </Routes>        
      </Router>
      <Footer/>
      </SessionProvider>
      </CartProvider>
      
      </FirebaseContext.Provider>   
    </ChakraProvider>    
  );
}

export default App;
