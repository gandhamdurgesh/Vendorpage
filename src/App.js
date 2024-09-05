import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import Dashboard from './components/Dashboard'; 
import AddProductForm from './components/AddProductForm'; 
import Registration from './components/Registration';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  
  const showSidebarAndNavbar = location.pathname !== '/';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {showSidebarAndNavbar && <Sidebar isVisible={sidebarVisible} />}
      <div style={{ flex: 1, marginLeft: showSidebarAndNavbar && sidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
        {showSidebarAndNavbar && <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
            <Route path="/AddProductForm" element={<AddProductForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
