import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init);

    const addPlantToCart = (plant) => {
        if(firstProduct(plant)) {
            plant.quantity = 1;
            setCart([...cart, plant]);
        }
        else {
            cart.find(p => p.name === plant.name && p.type === plant.type).quantity++;
            setCart(cart);
        }
    }

    const firstProduct = (plant) => {
        return !(cart.some(p => p.name === plant.name && p.type === plant.type));
    }

    const totalPlants = () => {
        return cart.reduce((total, plant) => total + plant.quantity, 0)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    return (
        <CartContext.Provider value={{ 
            addPlantToCart,
            totalPlants
        }}>
            {children}
        </CartContext.Provider>
)
}