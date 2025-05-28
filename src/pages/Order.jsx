import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import "../page_style/Order.css"
import Navbar from '../components/Navbar';

const Order = () => {
  const [orderList , setOrderList] = useState([]);
  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'))
  const isLoggedIn = !!user;

  useEffect(()=>{
    const fetchOrder = async () => {
      if(isLoggedIn){
        try {
          const res = await fetch(`https://json-db-api.onrender.com/orders?userId=${user.id}`)
          if (!res.ok) throw new Error("Failed to fetch orders");
          const text = await res.text();
          const data = text ? JSON.parse(text) : [];
          setOrderList(data)
        } catch (error) {
          console.log("error fetching order:", error)
          setOrderList([])
        }
      }else{
        const localCart = JSON.parse(localStorage.getItem('cart') || [])
        setCart(localCart)
      }
    }
    fetchOrder()
  }, [isLoggedIn]);


  return (
    <div className='Order'>
        <Navbar/>  
        <div className="head">
          <h3>order</h3>
          <div className="head-link">
            <Link to='/Order'>order</Link>
            <FaAngleRight  className='head-icon'/>
            <Link to='/Food'>food</Link>
          </div>
        </div>
        <div className='OrderWrap'>
          {!isLoggedIn ? (
            <div className='NotLoginOrderWrap'>
              <h3 className='emp-head'>your order item (is not logged ):</h3>
              {cart.length === 0 ?(
                <p>order is empty</p>
              ):(
                <ul>
                  <table className='cart-table'>
                    <thead>
                      <th>name</th>
                      <th>OrderId</th>
                      <th>Price</th>
                      <th>Status</th>
                    </thead>
  
                    <tbody>
                      {cart.map((item)=> (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.id}</td>
                           <td>{item.price}</td>
                          <td>{item.status}</td>
                          {/*<td>${(item.price * item.quantity).toFixed(2)}</td>*/}
                        </tr>
                      ))}
                    </tbody>
  
                  </table>
  
                </ul>
              )}
            </div>
          ):(
            <div className='NotLoginOrderWrap'>
              <p>Welcome, {user.name}!</p>
              <h3>Your Orders:</h3>
                {orderList.length === 0 ? (
                  <p>No orders found.</p>
                  ) : (
                    <table className="order-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderList.map((order) => (
                          <tr key={order.id}>
                            <td>{order.name || "Unnamed Product"}</td>
                            <td>{order.quantity}</td>
                            <td>${order.total}</td>
                            <td>{order.status}</td>
                            <td>{order.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                  )}
          </div>
          )}
        </div>
    </div>
  )
}

export default Order
