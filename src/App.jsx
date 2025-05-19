import './App.css';
import { SidebarProvider } from './components/SidebarContext';
import { CartProvider } from './components/CartContext';
import { Routes, Route } from 'react-router-dom';


// 👇 move overlay logic to a separate component inside provider scope
import AppLayout from './components/AppLayout';

function App() {
  return (
    <SidebarProvider>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </SidebarProvider>
  );
}

export default App;
