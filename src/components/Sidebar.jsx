import React from 'react';
import '../comp_style/Sidebar.css'
import  '../assets/logo.png';
import { useSidebar } from "./SidebarContext";
import { NavLink } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { SlList } from "react-icons/sl";
import { PiChats } from "react-icons/pi";
import logo from '../assets/logo.png'


const navItem = [
  {id: 1, text: 'Home', path: '/Dashboard', icon: <TbSmartHome />},
  {id: 2, text: 'Food', path: '/Food', icon: <FiShoppingBag />},
  {id: 3, text: 'Cart', path: '/Cart', icon: <IoCartOutline />},
  {id: 4, text: 'Order', path: '/Order', icon: <SlList />},
  {id: 5, text: 'Chat', path: '/Chat', icon: <PiChats />},

]

const Sidebar = () => {
  const { isSidebarOpen, isCollapse, setIsSidebarOpen } = useSidebar();


    const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);  // close sidebar on small screens
    }
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? (isCollapse ? 'collapsed' : 'expanded') : "hidden"}`}>
      <div className='app-logo'>
        <img src={logo} className='app-logo-img'/>
        <span className='app-logo-text'><h1>Dfoody</h1></span>
      </div>
      <div className='side-list-wrap'>
        <h2 className='sidelist-head'>main menu</h2>
        <ul className='side-list-ul'>
          {navItem.map((item)=>(
            <li key={item.id} className='side-list'>
              <NavLink 
                to={item.path} 
                className='side-link'
                onClick={handleLinkClick}>
                <span className='side-icon'>{item.icon}</span>
                <span className='side-text'>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
