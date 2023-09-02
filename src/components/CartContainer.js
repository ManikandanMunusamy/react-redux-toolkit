import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, cartTotal, totalItems } from '../features/cart/cartSlice';
import { openModal } from '../features/cart/modalSlice';
const CartContainer = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  
  const dispatch = useDispatch();
 
  useEffect(()=>{
    let totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.amount), 0);
    let totalCartItems = cartItems.reduce((sum, item) => (sum + item.amount), 0);
    dispatch(cartTotal(totalAmount.toFixed(2)));
    dispatch(totalItems(totalCartItems))
  },[cartItems])
  

  const emptyCart = () => {
    dispatch(openModal());
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4 className=''>total<span>${total}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={emptyCart}>clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer