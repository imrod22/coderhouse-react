

const UserRouter = () => {
    return (
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
    )
}

export default UserRouter