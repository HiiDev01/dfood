import React, { useContext , useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Theme from '../components/Theme';
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import avatar from '../assets/illus.png'
import '../comp_style/Navbar.css';
import { useSidebar } from "./SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const [notify, setNotify] = useState(false);
  const [profile, setProfile] = useState(false);  
  const [mobileProfile, setMobileProfile] = useState(false);  

  
  return (
    <div className='navbar'>
      <div className="navItemCon">

        <div className="navFil">
            <button 
              onClick={toggleSidebar}
              className='hamburger'>
              <GiHamburgerMenu className='hmgIcon'/>
            </button>
            <div className="navsearch">
             <CiSearch className='navsearchIcon'/>
             <input type="search" name="search" id="search" />
            </div>
        </div>

        <div className="usernav">
          <Theme/>
          <button 
           onClick={()=> setNotify(!notify)}
           className='notify'
          >
            <IoMdNotificationsOutline className='notifyIcon'/>
            {notify &&(
                <div className='abs_notify'>
                  <div className="abs_overlay"></div>
                  <h2>notification</h2>
                  <ul>
                    <li>
                      <h4>your order is received</h4>
                      <p>your order #1232 is ready to deliver</p>
                    </li>
                    <li>
                      <h4>account security</h4>
                      <p>your account passwrod changed</p>
                      <span>1 hour ago</span>
                    </li>
                  </ul>
                </div>
          )}
          </button>
          <button 
            onClick={()=> setProfile(!profile)}
            className="user">
            <div className="userImgCon">
              <img src={avatar} alt={avatar} />
            </div>
            <h3>brown</h3>
          </button>
          {profile && (
            <div className="userSec">
              <div className="abs_overlay"></div>
              <ul>
                <li>
                  <a href="/"><LuUser className='profIcon'/> My Profile</a>
                </li>
                <li>
                  <a href="/"><FaRegEdit className='profIcon' /> Edit Profile</a>
                </li>
              </ul>
              <div className='logoutDiv'>
                <button><FiLogOut className='profIcon'/> Log out</button>
              </div>
            </div>
          )}
        </div>

        <div className="mobileNavItem">
          <a href="#" className='link'><FiShoppingCart  className='MprofIcon' /></a>
          <button className='button' onClick={()=> setMobileProfile(!mobileProfile)}><LuUser className='MprofIcon'/>
            {mobileProfile &&(
                <div className="MobileuserSec">
                  <div className="Mabs_overlay"></div>
                <ul>
                  <li>
                    <a href="/"><LuUser className='MBprofIcon'/> My Account</a>
                  </li>
                  <li>
                    <a href="/"><IoSettingsOutline className='MBprofIcon' /> Settings</a>
                  </li>
                </ul>
                <div className='MlogoutDiv'>
                  <button><FiLogOut className='MobprofIcon'/> Log out</button>
                </div>
              </div>)}
            </button>
        </div>


      </div>
    </div>
  )
}

export default Navbar
