// AppLayout.js
import { useSidebar } from "../components/SidebarContext";
import Sidebar from "./Sidebar";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddFood from './AddFood';
import Food from '../pages/Food';
import Cart from '../pages/Cart';

const AppLayout = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <div className='app'>
      <Sidebar />

      {isSidebarOpen && window.innerWidth <= 768 && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-food' element={<AddFood />} />
        <Route path='/Food' element={<Food />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppLayout;
