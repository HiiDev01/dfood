import React from 'react'
import '../comp_style/FeaturedRestaurant.css'
import rt1 from '../assets/rt1.png'
import rt2 from '../assets/rt2.png'
import rt3 from '../assets/rt3.png'
import rt4 from '../assets/rt4.png'
import rt5 from '../assets/rt5.png'
import rt6 from '../assets/rt6.png'
import { FaRegStar } from "react-icons/fa";
import { PiForkKnife } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";


const restaurants = [
  {name: "jacky's kitchen", rating: "4.5", content: "free delivery", type: "fast food", location: "2km", img: rt3},
  {name: "jacky's kitchen", rating: "4.5", content: "free delivery", type: "fast food", location: "2km", img: rt2},
  {name: "jacky's kitchen", rating: "4.5", content: "free delivery", type: "fast food", location: "2km", img: rt1},  
  {name: "jacky's kitchen", rating: "4.5", content: "free delivery", type: "fast food", location: "2km", img: rt4},
  {name: "jacky's kitchen", rating: "4.5", content: "free delivery", type: "fast food", location: "2km", img: rt5},
  {name: "jacky's kitchen", rating: "4.5", content: "free delivery", type: "fast food", location: "2km", img: rt6}

]
const FeaturedRestaurant = () => {
  return (
    <div className='featured'>
      <div className='head'>
        <h2>featured restaurant</h2>
        <p>all featured restaurants</p>
      </div>
        <div className='sh-grid'>
          {restaurants.map((restaurant, index)=>(
            <div key={index} className='grid-itm'>
              <div><img src={restaurant.img} alt={restaurant.name} /></div>
              <div className='itm-det'>

                <h2>{restaurant.name}</h2>
                <div className='det-1'>
                  <p className='rate'> <FaRegStar className='ratingIcon'/> <span>{restaurant.rating}</span></p>
                  <p className={`det-cont ${index % 3 === 0 ? 'bg-red' : 'bg-green'}`}>{restaurant.content}</p>
                </div>
                <div className='det-type'>
                  <p><PiForkKnife  className='ratingIcon'/><span>{restaurant.type}</span></p>
                  <p><SlLocationPin  className='ratingIcon'/><span>{restaurant.location}</span></p>
                </div>

              </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default FeaturedRestaurant
