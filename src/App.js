import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import Dashboard from './components/Dashboard'; 
import AddProductForm from './components/AddProductForm'; 

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar isVisible={sidebarVisible} />
        <div style={{ flex: 1, marginLeft: sidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
          <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />
          <div style={{ padding: '20px' }}>
            <Routes>
              
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Product />} />
              <Route path="/AddProductFrom" element={<AddProductForm />} />

            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
    
  );
};

export default App;