import React from 'react'
import { useCart } from '../components/CartContext'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const {cart, increaseQty, decreaseQty, removeItem, clearCart} = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckOut = () =>{
    alert("your order have been place")
    clearCart();
  } 

  return (
    <div className='cart'>
      <Navbar/>
      <div className='cart-wrapper'>
        <div>

          <h2>cart</h2>
          <div>
            <Link to= "#">foody</Link>
            <span><FaAngleRight /></span>
            <Link to="#">Cart</Link>
          </div>

          <div>
            <div>
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                <>
                  {cart.map((item) =>(
                    <li>
                      <div>
                        {/*<img src={item.image} alt={item.name} />*/}
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                      </div>

                      <div>
                        <div>
                          <button onClick={()=> removeItem(item.id)}><AiOutlineDelete /></button>
                          <button onClick={()=> decreaseQty(item.id)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={()=> increaseQty(item.id)}>+</button>
                        </div>
                        <h4>sub-total : <span>{item.price}</span></h4>
                      </div>
                    </li>
                  ))}
                </>
               )}
            </div>

            <div>
              <h4>total</h4>
              <ul>
                <li>sub-total: <span>{total.toFixed(2)}</span></li>
                <li>delivery: <span>free</span></li>
                <li>discount: <span></span></li>
                <li>tax: <span></span></li>
              </ul>
              <h2>total <span>${total.toFixed(2)}</span></h2>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Cart
