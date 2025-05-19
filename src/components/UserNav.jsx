import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import avatar from '../assets/illus.png';
import Theme from '../components/Theme';
import '../comp_style/UserNav.css';  // Optional: create a CSS file if you want to style it separately

const UserNav = () => {
  const [notify, setNotify] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className="usernav">
      <Theme />
      <button
        onClick={() => setNotify(!notify)}
        className="notify"
      >
        <FaShoppingCart className="notifyIcon" />
        {notify && (
          <div className="abs_notify">
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
          <div className="abs_overlay"></div>
          <ul>
            <li>
              <a href="/"><LuUser className="profIcon" /> My Profile</a>
            </li>
            <li>
              <a href="/"><FaRegEdit className="profIcon" /> Edit Profile</a>
            </li>
          </ul>
          <div className="logoutDiv">
            <button><FiLogOut className="profIcon" /> Log out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNav;
