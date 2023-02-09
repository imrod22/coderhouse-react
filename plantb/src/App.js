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
import FruitTree from './pages/fruit-tree/fuit-tree.page';
import AboutUs from './pages/aboutus/aboutus';
import Outdoor from './pages/outdoor/outdoor';
import Indoor from './pages/indoor/indoor';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Greeting greeting="Welcome to Plant-B grow shop online."/>} />
            <Route path="/indoor" element={<Indoor/>} />
            <Route path="/outdoor" element={<Outdoor/>} />
            <Route path="/fruit-trees" element={<FruitTree/>} />
            <Route path="/about" element={<AboutUs/>} />
        </Routes>             
        
      </div>
      </Router>
      
    </ChakraProvider>    
  );
}

export default App;
