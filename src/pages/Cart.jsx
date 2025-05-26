import React from 'react'
import { useCart } from '../components/CartContext'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus,FiMinus } from "react-icons/fi";
import '../page_style/Cart.css';

const Cart = () => {
  const {cart, increaseQty, decreaseQty, removeItem, clearCart} = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountRate = 0.1;
  const tax = 0.06
  const discountAmount = total * discountRate;
  const taxAmount = total * tax
  const totalAfterDiscount = total - discountAmount;

  const handleCheckOut = () =>{
    clearCart();
    
  } 

  return (
    <div className='cart'>
      <Navbar/>
      <div className='Container'>
        <div className="head">
          <h3>Cart</h3>
          <div className="head-link">
            <Link to='/Cart'>cart</Link>
            <FaAngleRight  className='head-icon'/>
            <Link to='/Food'>food</Link>
          </div>
        </div>

        <div className='cart_wrapper'>
          <div className='cartItemConOne'>
            {cart.length === 0 ? (
              <p className='emptyCartp'>No items in cart.</p>
            ) : (
              <ul>
                {cart.map((item) =>(
                  <li key={item.id}>
                    <div className='li_childOne'>
                      <div className="cartImg"><img src={item.image} alt={item.name}  /></div>
                      <div>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <div className='li_childTwo'>
                      <div className='li_childTwoSubCon'>
                        <button onClick={()=> removeItem(item.id)}><AiOutlineDelete /></button>
                        <button onClick={()=> decreaseQty(item.id)}>
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={()=> increaseQty(item.id)}>
                          <FiPlus />
                        </button>
                      </div>
                      <h4>sub-total:  <span>${item.price}</span></h4>
                    </div>
                  </li>
                ))}
              </ul>
             )}
          </div>
          <div className='cartItemConTwo'>
            <h2> cart total</h2>
            <ul>
              <li>sub-total: <span>${total.toFixed(2)}</span></li>
              <li>delivery: <span>free</span></li>
              <li>discount: <span>${discountAmount.toFixed(2)}</span></li>
              <li>tax: <span>${taxAmount.toFixed(2)}</span></li>
            </ul>
            <h4>total <span>${totalAfterDiscount.toFixed(2)}</span></h4>
            <button onClick={handleCheckOut}>proceed to checkout</button>
            <div className='couponCon'>
              <h3>apply coupon code</h3>
              <input type="text" />
              <button>apply code</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
