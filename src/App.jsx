import './App.css';
import { SidebarProvider } from './components/SidebarContext';
import { CartProvider } from './components/CartContext';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import AddFood from './components/AddFood';
import Food from './pages/Food';
import Cart from './pages/Cart';

function App() {
 

  return (
    <SidebarProvider>
      <CartProvider>
      <div className='app'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add-food' element={<AddFood/>}/>
          <Route path='/Food' element={<Food/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </div>
      </CartProvider>
    </SidebarProvider>
  )
}

export default App
