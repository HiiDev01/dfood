import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = ()=>{
  return useContext(CartContext)
}

export const CartProvider = ({children})=>{
  const [cart, setCart] = useState([])

  const addToCart = (item)=>{
    const exists = cart.find((i) => i.id === item.id);
    if(exists){
      setCart(
        cart.map((i)=> 
          i.id === item.id ? {...i, quantity: i.quantity +1} : i
      )
    );
    }else{
      setCart([...cart, {...item, quantity: 1}]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider value={{cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}