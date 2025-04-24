import React from 'react'
import { IoStar, IoStarOutline, IoStarHalf} from "react-icons/io5";

const RatingStar = ({rating}) => {
  const stars = [];
  
  for(let i = 1; i<=5; i++){
    if(rating >= i){
      stars.push(<IoStar key={i} color="#f7ad45" className='activeRate' size={20} />)
    } else if(rating >= 1 - 0.5){
       stars.push(<IoStarHalf key={i} color="gray"  className='inActiveRate' size={20} />)
    } else{
      stars.push(<IoStarOutline key={i} color="gray" className='inactive' size={20}/>)
    }
  }
  return (
    <div className='rating'>
      {stars}
    </div>
  )
}

export default RatingStar
