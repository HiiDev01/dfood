import  { useState } from 'react';
import { useCart } from "./CartContext";
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import avatar from '../assets/illus.png';
import Theme from '../components/Theme';
import '../comp_style/UserNav.css';
import { Link } from 'react-router-dom'

const UserNav = () => {
  const navigate = useNavigate();
 
  const [profile, setProfile] = useState(false);
  const {cart} = useCart(); //to show number of item in navbar notification

  const totalItemInCart = cart.reduce((sum, item) => sum + item.quantity, 0);/// add the total number of items in the cart 

  const handleLogout = ()=>{
    localStorage.removeItem('user');
    sessionStorage.removeItem('user')

    navigate('/')
  }

  return (
    <div className="usernav">
      <Theme />
      <Link to="/Cart"
         className="notify"
      >
        <FaShoppingCart className="notifyIcon" size={25}/>
        {totalItemInCart > 0 && 
          <span className='cartNotify'>{totalItemInCart}</span>
        }
      </Link>
      <button
        onClick={() => setProfile(!profile)}
        className="user"
      >
        <div className="userImgCon">
          <img src={avatar} alt="avatar" />
        </div>
        <h3></h3>
      </button>
      {profile && (
        <div className="userSec">
          
          <ul>
            <li>
              <a href="/Dashboard"><LuUser className="profIcon" /> My Profile</a>
            </li>
            <li>
              <a href="/Dashboard"><FaRegEdit className="profIcon" /> Edit Profile</a>
            </li>
          </ul>
          <div className="logoutDiv">
            <button onClick={handleLogout}><FiLogOut className="profIcon" /> Log out</button>
          </div>
        </div>
      )}
      <div className="abs_overlay"></div>
    </div>
  );
};

export default UserNav;
