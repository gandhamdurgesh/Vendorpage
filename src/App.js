import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import Dashboard from './components/Dashboard'; 
import AddProductForm from './components/AddProductForm'; 
import Registration from './components/Registration';
import LoginButton from './components/LoginPage'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Define paths where sidebar and navbar should be shown
  const showSidebarAndNavbar = location.pathname !== '/' && location.pathname !== '/Registration';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {showSidebarAndNavbar && <Sidebar isVisible={sidebarVisible} />}
      <div style={{ flex: 1, marginLeft: showSidebarAndNavbar && sidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
        {showSidebarAndNavbar && <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/Registration" element={<Registration />} />
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


// src/App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Registration from './components/Registration';
// import LoginButton from './components/LoginButton';

// const App = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const location = useLocation();

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   // Show Sidebar and Navbar only on paths where it's needed
//   const showSidebarAndNavbar = location.pathname !== '/' && location.pathname !== '/registration';

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {showSidebarAndNavbar && <Sidebar isVisible={sidebarVisible} />}
//       <div style={{ 
//         flex: 1, 
//         marginLeft: showSidebarAndNavbar && sidebarVisible ? '250px' : '0', 
//         transition: 'margin-left 0.3s ease' 
//       }}>
//         {showSidebarAndNavbar && <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />}
//         <main style={{ padding: '20px' }}>
//           <Routes>
//             <Route path="/" element={<LoginButton />} />
//             <Route path="/registration" element={<Registration />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// };

// const AppWithRouter = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default AppWithRouter;
