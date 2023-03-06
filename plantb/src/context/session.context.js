import { createContext, useContext, useState, useEffect } from 'react';
import { useFirebase } from '../context/firebase.context';
import { useCartContext } from '../context/cart.context';
import { collection, getDocs, query, where } from "firebase/firestore/lite";

const userActive = JSON.parse(localStorage.getItem('user')) || {
    id: null,
    email: null,
    name: null,
    active: false,
    error: null
};

export const SessionContext = createContext();

export const useSessionContext = () => {
    return useContext(SessionContext)
}

export const SessionProvider = ({children}) => {
    const firebase = useFirebase();
    
    const [user, setUser] = useState(userActive);
    const { emptyCart } = useCartContext();

    const login = (values) => {
        const userReference = collection(firebase, 'users');
        const queryUsers = query(userReference, where('email', '==', values.email), where('password', '==', values.password));
        getDocs(queryUsers)
        .then((users) => {
                if(users.docs.length > 0){
                    const data = users.docs[0].data()
                    setUser({
                        id: users.docs[0].id,
                        email: data.email,
                        name: data.name,
                        active: true,
                        error: null
                    })
                }else{
                    setUser({
                        id: null,
                        email: null,
                        name: null,
                        active: false,
                        error: 'User Invalid!'
                    })
                }
                })
    }

    const logout = () => {
        emptyCart();
        setUser({
            id: null,
            email: null,
            name: null,
            active: false,
            error: null
        })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);

    return (
        <SessionContext.Provider value={{user, login, logout}}>
            {children}
        </SessionContext.Provider>
    )
};