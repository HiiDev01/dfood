import React from 'react'
import { Link } from 'react-router-dom'
import '../comp_style/FoodSlider.css'
import { useEffect,useState } from 'react';


const FoodSlider = () => {
  const [fetchError, setFetchError] = useState(null);
  const [food, setFood] = useState(null)

  const uri = "http://localhost:5000/products"
  useEffect( ()=>{
    const fetchFood = async () =>{
      const res = await fetch(uri)
      const data = await res.json()
      
      if(!data){
        console.log('can;t fetch data')
        setFetchError(true)
      }
      if(data){
        console.log(data)
        setFetchError(null)
        setFood(data)
      }
    }
    fetchFood();
  }, [])
  return (
    <div className='menu-con'>
      <div className="header">
        <h2>menu category</h2>
        <Link to="#">veiw all</Link>
      </div>
      <div className="menu-scroll-list">
           {setFetchError &&(<p>{fetchError}</p>)} 
            {food &&(
             <div className='food-grid'>
              {food.map(foods =>(
                <Link to={`/Food/${foods.id}`} key={foods.id} className='foodLink'>
                  <div className='gridFood'>
                    <div className='foodimageWrap'>
                      <div className='foodimage'>
                        <img src={foods.image} alt={foods.title}/>
                      </div>
                    </div>
                    <h4>{foods.name}</h4>
                  </div>
                </Link>
              ))}
             </div>
            )}

      </div>
    </div>
  )
}

export default FoodSlider
