import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { closeModal, openModal } from '../features/cart/modalSlice';

const Model = () => {
    const dispatch = useDispatch();
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove All Items From Your Shopping Cart?</h4>
                <div className='btn-container'>
                    <button className='btn confirm-btn' onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal());
                    }}>Confirm</button>
                    <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>Cancel</button>
                </div>
            </div>

        </aside>
    )
}

export default Model