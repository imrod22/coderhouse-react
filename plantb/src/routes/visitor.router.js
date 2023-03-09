import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  
import Greeting from '../components/greeting/greeting.component';
import { ItemListContainer } from '../components/item/itemlistcontainer.component';
import SignIn from '../session/signin';
import AboutUs from '../pages/aboutus/aboutus';
import SignUp from '../session/signup';

const VisitorRoute = () => {

    return (
        <Routes>
            <Route path="/" element={<Greeting greeting="Plants have many health benefits as they purify the air, connect you with nature and boost your creativity. In our site you will find a wide variety of Indoor and Outdoor Plants and fruit trees."/>} />
            <Route path="/plants" element={<ItemListContainer/>} />
            <Route path="/plants/category/:category" element={<ItemListContainer/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path='*' element={ <Navigate to="/signin"/> } />
        </Routes>
    )
}

export default VisitorRoute