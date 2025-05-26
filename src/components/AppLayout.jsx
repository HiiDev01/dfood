// AppLayout.js
import { useSidebar } from "../components/SidebarContext";
import Sidebar from "./Sidebar";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Food from '../pages/Food';
import Cart from '../pages/Cart';
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SingleFoodPage from "../pages/SingleFoodPage";

const AppLayout = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  const location = useLocation();

  // Hide sidebar on login and sign up pages
  const hideSidebar = location.pathname === '/' || location.pathname === '/SignUpPage';
  

  return (
    <div className='app'>
      {!hideSidebar && <Sidebar />}

      {isSidebarOpen && window.innerWidth <= 768 && !hideSidebar && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <Routes>
        <Route path='/' element={<SignInPage/>} />
        <Route path='/SignUpPage' element={<SignUpPage/>} />
        <Route path='/Dashboard' element={<Home />} />
        <Route path='/Food' element={<Food />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Food/:id' element={<SingleFoodPage />} />
        <Route path='/Order' element={<Order/>} />
      </Routes>
    </div>
  );
};

export default AppLayout;
