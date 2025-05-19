import React, { useEffect, useState } from 'react'
import { IoSunny,IoMoon  } from "react-icons/io5";
import '../comp_style/Theme.css';

const ThemeToggle = () => {
  const [theme, setTheme]= useState('light');

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  },[]);

  const toggleTheme =()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  }
  
  return (
    <div>
      <button onClick={toggleTheme} className='mode_btn'>
        {theme === 'light' ?(
          <IoMoon style={{color: '#1A1F2C', fontSize: '1.3rem'}} />
          ) 
          : (
          <IoSunny style={{color: 'orange', fontSize: '1.3rem'}}/>
          )
        }
        <span className='change_appr'>change appearance</span>
      </button>
    </div>
  )
}

export default ThemeToggle
