import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import { useCart } from '../components/CartContext';
import RatingStar from "../components/RatingStar";
import "../page_style/SingleFoodPage.css"
import { Link } from "react-router-dom";



const SingleFoodPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null)
  const {addToCart} = useCart();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchFood =  async () => {
      const res = await fetch(`https://json-db-api.onrender.com/products/${id}`)
      const data = await res.json()
      setFood(data)
    }
    fetchFood();
  }, [id]);

  if(!food){
    return <p>Loading...</p>
  }

  const handleAddToCart = async (food)=>{
    if(isLoggedIn){
      const res = await fetch(`https://json-db-api.onrender.com/orders?userId=${userId}&productId=${foods.id}`)
      const existItem = await res.json()

      if(existItem.length > 0){
        const updateItem = {...existItem[0], quantity: existItem[0].quantity + 1};
        await fetch(`https://json-db-api.onrender.com/orders/${existItem[0].id}`,
          {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updateItem),
          });
      }else{
        await fetch("https://json-db-api.onrender.com/orders", {
          method: "POST",
          headers: {"Content-Type": "application/json"},

          body: JSON.stringify({
            userId,
            productId: food.id,
            name: food.name,
            price: food.price,
            quantity: 1
          })
        });

      }
    }else{
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex((item) => item.id === food.id);

      if(index !==  -1){
        cart[index].quantity += 1
      }else{
        cart.push({...food, quantity: 1});
      }
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    addToCart(food)
    alert(`item added to cart ${food.id}`)
    console.log(`item ${food.id} added to cart`)
  }
  return (
    <div className='singleFoodPage'>
      <Navbar/>
      <Link to={`/Dashboard`} className="backfood">Home</Link>
      <Link to={`/Food`} className="backfood">/Food</Link>
      <div key={food.id} className="container">
        <div className="min-continer">
          <div className='foodImg'>
            <img src={food.image} alt={food.name} />
          </div>
          <h3 className='foodName'>{food.name}</h3>
          <h3 className='foodDes'>{food.description}</h3>
          <RatingStar rating={food.rating ?? 0}/>
          <p className='food-price'>${food.price.toFixed(2)}</p>
          <button 
          onClick={()=> handleAddToCart(food)}
          className='cartBtn'>
            add to cart
          </button>
          <div className='in-stock'>
            <button></button>
            <p>in stock : <span>{food.stock ?? 'N/A'}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFoodPage
