import { createContext, useContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init);

    const addPlantToCart = (plant) => {
        if(!existsProduct(plant)) {
            plant.quantity = 1;          
            setCart([...cart, plant]);
        }
        else {
            cart.find(p => p.name === plant.name && p.type === plant.type).quantity++;
            setCart(cart);
        }
    }

    const removePlantInCart = (plant) => {

        setCart(cart.map(p => {
            if(p.id === plant.id && p.name === plant.name){
                p.quantity--;
            }
            return p;           
        }))            
    }

    const removeAllPlantInCart = (plant) => {
        const currentShop = cart.filter(p => !(p.id === plant.id && p.name === plant.name));
        setCart(currentShop);
    }

    const existsProduct = (plant) => {
        return (cart.some(p => p.name === plant.name && p.type === plant.type));
    }

    const totalPlants = () => {
        return(cart.reduce((total, plant) => total + plant.quantity, 0));
    }

    const totalExpend = () => {
        console.log(cart.reduce((tot, current) => tot + (current.price * current.quantity), 0));

        return cart.reduce((tot, current) => tot + (current.price * current.quantity), 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    return (
        <CartContext.Provider value={{ 
            addPlantToCart,
            removePlantInCart,
            removeAllPlantInCart,
            existsProduct,
            totalPlants,
            totalExpend,
            emptyCart,
            cart
        }}>
            {children}
        </CartContext.Provider>
)
}