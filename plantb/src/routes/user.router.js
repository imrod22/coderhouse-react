import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import AboutUs from '../pages/aboutus/aboutus';
import { ItemListContainer } from '../components/item/itemlistcontainer.component';
import { ItemDetailContainer } from '../components/item/itemdetailcontainer.component';
import Greeting from '../components/greeting/greeting.component';
import Cart from '../components/cart/cart.component';
import NonFound from '../pages/not-found/notfound';
import Checkout from '../components/checkout/checkout.component';
import ShopOrder from '../components/shoporder/shoporder.component';

const UserRouter = () => {
    return (
    
        <Routes>
            <Route path="/" element={<Greeting greeting="Plants have many health benefits as they purify the air, connect you with nature and boost your creativity. In our site you will find a wide variety of Indoor and Outdoor Plants and fruit trees."/>} />
            <Route path="/plants" element={<ItemListContainer/>} />
            <Route path="/plants/category/:category" element={<ItemListContainer/>} />
            <Route path="/plants/detail/:id" element={<ItemDetailContainer/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/cart" element={ <Cart/>} />
            <Route path="/signin" element={ <Navigate to="/" /> }/>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/orders" element={<ShopOrder/>} />
            <Route path="/error" element={<NonFound/>} />
            <Route path="*" element={ <Navigate to="/error"/> } />
        </Routes>  
    )
}

export default UserRouter