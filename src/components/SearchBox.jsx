import React from 'react'
import '../comp_style/SearchBox.css'
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';

const SearchBox = ({search, setSearch}) => {
  return (
    <div className='SearchBox'>
      <div className="sch-wrap">
        <IoSearchOutline className='sch-icon' />
        <input 
        type="search" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='search food name'/>
      </div>
    </div>
  )
}

export default SearchBox
