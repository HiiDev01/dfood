import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import '../comp_style/Navbar.css';
import { useSidebar } from "./SidebarContext";

import UserNav from './UserNav';  // <-- Import the new component

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className='navbar'>
      <div className="navItemCon">

        <div className="navFil">
          <button
            onClick={toggleSidebar}
            className='hamburger'>
            <GiHamburgerMenu className='hmgIcon' />
          </button>
          <div className="navsearch">
            <CiSearch className='navsearchIcon' />
            <input type="search" name="search" id="search" />
          </div>
        </div>

        {/*  component here */}
        <UserNav />



      </div>
    </div>
  );
}

export default Navbar;
