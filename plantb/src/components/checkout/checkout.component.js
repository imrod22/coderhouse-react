import { addDoc, collection, doc, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore/lite";
import { useFirebase } from "../../context/firebase.context";
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
    const { cart, totalExpend, emptyCart, totalPlants} = useContext(CartContext);
    const [ordenNumber, setOrdenNumber] = useState();
    const firebase = useFirebase();

    useEffect(() => {
        getDoc(userReference)
            .then((res) => {
                const { firstname, lastname } = res.data();
                setUserData({
                    name: firstname,
                    lastname: lastname,
                    //address: address,
                    //zipcode: Number(zipcode)
                });
            })
    }, [])
    
    const createOrder = async() => {

        if(totalPlants() === 0)
        {
            toast.error('Purchase cant be processed!');
            return
        }
        
        const firebasePlants = collection(firebase, 'plants');
        const firebaseOrders = collection(firebase, 'orders');
        const batch = writeBatch(firebase);

        const order = {
            order: cart,
            date: Date.now(),
            status: 'Created',
            total: totalExpend()
        }

        const queryfirebasePlants = await getDocs(firebasePlants, where( documentId(), 'IN', cart.map(c => c.id) ));
        const currentPlants = await getDocs(queryfirebasePlants);

        currentPlants.docs.forEach(plant => {
            const cartPlant = cart.find(cp => cp.id === plant.id);
            batch.update(plant.ref,{
                storage: (plant.data().storage - cartPlant.quantity)
            })
        });

        batch.commit()
                .then(() => {
                    addDoc(firebaseOrders, orden)
                        .then((doc) => {
                            setOrdenNumber(doc.id);
                            toast.success('Transaction purchased succesfully with order number: '+ ordenNumber);
                            emptyCart();
                        }).catch((error) => console.error(error))
                })

    }
    
}

export default Checkout;