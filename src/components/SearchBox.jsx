import React from 'react'
import '../comp_style/SearchBox.css'
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className='SearchBox'>
      <div className="sch-wrap">
        <IoSearchOutline className='sch-icon' />
        <input type="search" placeholder='search food name'/>
      </div>
    </div>
  )
}

export default SearchBox
