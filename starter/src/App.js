import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";



function App() {
   const {cartItems} = useSelector((store) => store.cart)
   const {isOpen} = useSelector((store) => store.modal)
   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(calculateTotals())
   }, [cartItems, dispatch])
  return (
    <main>
    {isOpen &&<Modal />}
    <Navbar />
    <CartContainer />
    </main>
  )
}
export default App;
