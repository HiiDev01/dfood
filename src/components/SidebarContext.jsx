import { createContext, useContext, useState } from "react";

// Create Context
export const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapse, setISCollapse] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    if(isSidebarOpen){
      setISCollapse(!isCollapse)
    }
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);
