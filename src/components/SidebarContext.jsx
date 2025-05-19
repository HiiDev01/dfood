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

  //close fucntion
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setISCollapse(false);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, isCollapse, toggleSidebar, closeSidebar  }}>
      {children}
    </SidebarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);
