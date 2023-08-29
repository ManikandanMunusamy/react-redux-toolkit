import React from 'react'

const CartItem = ({title, price, img, amount}) => {
  return (
    <article className='cart-item'>
      <img src={img} alt={title}/>
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn'>remove</button>
      </div>
    </article>
  )
}

export default CartItem