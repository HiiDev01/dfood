import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import '../page_style/Food.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import Slider from 'react-slider'; 
import { IoStar, IoStarOutline, IoStarHalf} from "react-icons/io5";
import SearchBox from '../components/SearchBox';
import RatingStar from '../components/RatingStar';
import { useCart } from '../components/CartContext';



const Min = 10;
const Max = 100;

const Food = () => {
  const [values, setValues] = useState([Min, Max]);
  const [allFood, setAllFood] = useState([]);
  const [loadingFood, setLoadingFood] = useState(null);
  const {addToCart} = useCart();
  const userId = 1;
  const isLoggedIn = true;

  const [search, setSearch] = useState('');
  const [filteredFood, setFilteredFood] = useState([])
   /// filter product from the data are stored here 



  const uri = `https://json-db-api.onrender.com/products`
  useEffect(()=>{
    const fetchFood = async ()=>{
      const res = await fetch(uri)
      const data = await res.json()

      if(!data){
        console.log('error fetching data')
        setLoadingFood("error fetching food items")
      }
      if(data){
    
        setAllFood(data)
        setFilteredFood(data)
        setLoadingFood(null)
      }
    }
    fetchFood();
  }, []); /////useEffect to fetch product automatically without any search feild

  useEffect(()=>{
    const result = allFood.filter( food => 
      food.name.toLowerCase().includes(search.toLowerCase()))
      setFilteredFood(result);
  }, [search, allFood]);///// useeffect to fecth the the food base on that os type in the search feild
  

  const handleAddToCart = async (foods)=>{
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
            productId: foods.id,
            name: foods.name,
            price: foods.price,
            quantity: 1
          })
        });

      }
    }else{
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex((item) => item.id === foods.id);

      if(index !==  -1){
        cart[index].quantity += 1
      }else{
        cart.push({...foods, quantity: 1});
      }
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    addToCart(foods)
    alert(`item added to cart ${foods.id}`)
    console.log(`item ${foods.id} added to cart`)
  }


  return (
    <div className='food'>
      <Navbar/>
      <div className='food-component'>
        <div className="head">
          <h3>food</h3>
          <div className="head-link">
            <Link to='/Food'>food</Link>
            <FaAngleRight  className='head-icon'/>
            <Link to='/Cart'>Cart</Link>
          </div>
        </div>
        
        <div className="food-con-wrap">
          <div className="sort-con">
            <div className="sort-head">
              <h2 className='rangeTitle'>Range price</h2>
  
              <div>
                <p className='price-rng'>
                  <span>${values[0]}</span> 
                  <span>${values[1]}</span>
                </p>
                <div className='sliderWrap'>
                  <Slider className={'slider'} 
                    onChange={setValues}
                    value={values} 
                    min={Min} 
                    max={Max}
                    />
                </div>
              </div>
            </div>
            <div className="category">
              <h2 className=''>category</h2>
              <ul>
                <li>
                  <input type="checkbox" id='chk1'/>
                  <label htmlFor="chk1">All</label>
                </li>

                <li>
                  <input type="checkbox" id='chk2'/>
                  <label htmlFor="chk2">Snacks</label>
                </li>

                <li>
                  <input type="checkbox" id='chk3'/>
                  <label htmlFor="chk3">rice & chicken</label>
                </li>

                <li>
                  <input type="checkbox" id='chk4'/>
                  <label htmlFor="chk4">pizza</label>
                </li>

                <li>
                  <input type="checkbox" id='chk5'/>
                  <label htmlFor="chk5">burger</label>
                </li>

              </ul>
            </div>
            <div className="rate-con">
              <h2 className='rangeTitle'>Rating</h2>
              <div>
              {[...Array(5)].map((_, row) => (
                <p key={row} style={{ margin: 0, display: "flex", gap: "10px" }} >
                  {[...Array(5)].map((_, col) =>
                    col < 5 - row ? (
                      <IoStar key={col} color="#f7ad45" className='activeRate' size={20} />
                    ) : (
                      <IoStarHalf key={col} color="gray"  className='inActiveRate' size={20} />
                    )
                  )}
                </p>
              ))}
              </div>
            </div>


          </div>
          <div className="main-con">
            <div className="sch-food">
              <SearchBox search={search} setSearch={setSearch}/>
            </div>
            {loadingFood && (<p>{loadingFood}</p>)}    
            {allFood &&(
              <div className='food-grids'>
               {filteredFood.map(foods =>(
                  <div key={foods.id} className='grid-items'>
                    <div className='foodImg'>
                      <img src={foods.image} alt={foods.name} />
                    </div>
                    <h3 className='foodName'>{foods.name}</h3>
                    <RatingStar rating={foods.rating ?? 0}/>
                    <p className='food-price'>${foods.price.toFixed(2)}</p>
                    <button 
                    onClick={()=> handleAddToCart(foods)}
                    className='cartBtn'>
                      add to cart
                    </button>
                    <div className='in-stock'>
                      <button></button>
                      <p>in stock : <span>{foods.stock ?? 'N/A'}</span></p>
                    </div>
                  </div>
               ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
