import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

const VisitorRoute = () => {

    return (
        <Routes>
            <Route path="/" element={<Greeting greeting="Plants have many health benefits as they purify the air, connect you with nature and boost your creativity. In our site you will find a wide variety of Indoor and Outdoor Plants and fruit trees."/>} />
            <Route path="/plants" element={<ItemListContainer/>} />
            <Route path="/plants/category/:category" element={<ItemListContainer/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path='*' element={ <Navigate to="/signin"/> } />
        </Routes>
    )
}

export default VisitorRoute