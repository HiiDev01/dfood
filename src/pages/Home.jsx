import React from 'react';
import '../page_style/Home.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import rider from '../assets/rider.png';
import FoodSlider from '../components/FoodSlider';
import FeaturedRestaurant from '../components/FeaturedRestaurant';


const Home = () => {

  return (
    <div className='home'>
      <Navbar/>
      <div className='home-content'>
        <div className="head">
          <h3>home</h3>
          <div className="head-link">
            <Link to='/Food'>dfoody</Link>
            <FaAngleRight  className='head-icon'/>
            <Link to='/'>home</Link>
          </div>
        </div>

        <div className='home-container'>
          <div className="item">
            <div className="item-contnt">
              <h2>Feastify – Order, Eat, Enjoy!</h2>
              <p>Browse, order, and savor your favorite 
                dishes with a seamless food delivery 
                experience!
              </p>
              <Link >order now</Link>
            </div>
            <div className="item-contnt">
              <img src={rider} alt="illus" />
            </div>
          </div>
          <div className='item item2'>
            <div className="hm-discnt">
              <h2>
                Limited-Time Offer!
              </h2>
              <p>
                Get 20% OFF your first order! 
                Use code EAT20 at checkout and enjoy 
                delicious savings.
              </p>
              <Link to='/Order'>use promo code</Link>
            </div>
          </div>
        </div>

        <div className="foodslidewrapper">
          <FoodSlider/>
        </div>
        <FeaturedRestaurant/>

      </div>
    </div>
  )
}

export default Home
