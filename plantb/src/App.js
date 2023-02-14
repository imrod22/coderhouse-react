import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navbar/navbar.component';
import theme from './assets/themes/font.theme';
import Greeting from './components/greeting/greeting.component';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './pages/aboutus/aboutus';
import SmallWithLogoLeft from './components/footer/footer.component';
import { ItemListContainer } from './components/item/itemlistcontainer.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Greeting greeting="Welcome to Plant-B grow shop online."/>} />
            <Route path="/plants" element={<ItemListContainer/>} />
            <Route path="/plants/category/:category" element={<ItemListContainer/>} />
            <Route path="/about" element={<AboutUs/>} />
        </Routes>             
        
      </div>
      </Router>
      <SmallWithLogoLeft/>
    </ChakraProvider>    
  );
}

export default App;
