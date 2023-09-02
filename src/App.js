import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import ReactLoading from 'react-loading';
import Model from "./components/Model";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "./features/cart/cartSlice";
function App() {
  const { isOpen } = useSelector((state)=> state.modal);
  const { isLoading } = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartItems());
  },[]);

  if(isLoading) {
    return (
      <div className="modal-container">
      {isLoading && (
       <ReactLoading type={'bars'} color={'#a29dff'} height={'auto'} width={'15%'} />
        )}
      </div>
    ) 
  }
  
  return (
    <main>
      {isOpen && <Model />}
      <NavBar />
      <CartContainer />
    </main>
  )
}
export default App;
