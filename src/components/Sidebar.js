// import React from 'react';
// import { Collapse } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faFileText, faShoppingBag, faMagnet, faBox } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ isVisible }) => {
//   const [openSection, setOpenSection] = React.useState('');

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? '' : section);
//   };

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         left: 0,
//         top: 0,
//         bottom: 0,
//         width: '250px',
//         backgroundColor: '#6C38F5',
//         padding: '20px',
//         color: '#fff',
//         overflowY: 'auto',
//         boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
//         transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'transform 0.3s ease'
//       }}
//     >
//       <div style={{ marginBottom: '20px', display: 'flex' }}>
//         <img
//           src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png"
//           alt="Logo"
//           style={{ width: '40px', marginBottom: '10px', marginRight: '8px' }}
//         />
//         <div>
//           <h4 style={{ margin: 0 }}>ROBOTECH</h4>
//           <small style={{ color: '#E0E0E0' }}>INTELLIGENCE</small>
//         </div>
//       </div>

//       <div style={{ marginBottom: '20px' }}>
//         <p style={{ color: '#B0B0B0', marginBottom: '10px' }}>DASHBOARDS & APPS</p>
//         <div>
//           <Link
//             to="/dashboard"  // Link updated to point to the Dashboard page
//             style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
//             onClick={() => toggleSection('admin')}
//           >
//             <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Admin
//           </Link>
//           <Collapse in={openSection === 'admin'}>
//             <div style={{ paddingLeft: '20px' }}>
//               <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
//               <br />
//               <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
//               <br />
//               <Link to="/add-product" style={{ color: '#fff', textDecoration: 'none' }}>Add Product Form</Link>
//             </div>
//           </Collapse>
//         </div>
//         <div>
//           <Link
//             to="/customer"
//             style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
//             onClick={() => toggleSection('customer')}
//           >
//             <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Customer
//           </Link>
//           <Collapse in={openSection === 'customer'}>
//             <div style={{ paddingLeft: '20px' }}>
//               <Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
//               <br />
//               <Link to="/product-details" style={{ color: '#fff', textDecoration: 'none' }}>Product Details</Link>
//               <br />
//               <Link to="/product-filter" style={{ color: '#fff', textDecoration: 'none' }}>Product Filter</Link>
//             </div>
//           </Collapse>
//         </div>
//         <div>
//           <Link
//             to="/apps"
//             style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
//             onClick={() => toggleSection('apps')}
//           >
//             <FontAwesomeIcon icon={faBox} style={{ marginRight: '10px' }} /> Apps
//           </Link>
//           <Collapse in={openSection === 'apps'}>
//             <div style={{ paddingLeft: '20px' }}>
//               <Link to="/chat" style={{ color: '#fff', textDecoration: 'none' }}>Chat</Link>
//               <br />
//               <Link to="/contact-list" style={{ color: '#fff', textDecoration: 'none' }}>Contact List</Link>
//               <br />
//               <Link to="/calendar" style={{ color: '#fff', textDecoration: 'none' }}>Calendar</Link>
//             </div>
//           </Collapse>
//         </div>
//       </div>

//       <div style={{ marginBottom: '20px' }}>
//         <p style={{ color: '#B0B0B0', marginBottom: '10px' }}>COMPONENTS & EXTRA</p>
//         <div>
//           <Link
//             to="/uikit"
//             style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
//             onClick={() => toggleSection('uikit')}
//           >
//             <FontAwesomeIcon icon={faMagnet} style={{ marginRight: '10px' }} /> UI Kit
//           </Link>
//           <Collapse in={openSection === 'uikit'}>
//             <div style={{ paddingLeft: '20px' }}>
//               <Link to="/ui-component-1" style={{ color: '#fff', textDecoration: 'none' }}>UI Component 1</Link>
//               <br />
//               <Link to="/ui-component-2" style={{ color: '#fff', textDecoration: 'none' }}>UI Component 2</Link>
//             </div>
//           </Collapse>
//         </div>
//         <div>
//           <Link
//             to="/pages"
//             style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
//             onClick={() => toggleSection('pages')}
//           >
//             <FontAwesomeIcon icon={faFileText} style={{ marginRight: '10px' }} /> Pages
//           </Link>
//           <Collapse in={openSection === 'pages'}>
//             <div style={{ paddingLeft: '20px' }}>
//               <Link to="/page1" style={{ color: '#fff', textDecoration: 'none' }}>Page 1</Link>
//               <br />
//               <Link to="/page2" style={{ color: '#fff', textDecoration: 'none' }}>Page 2</Link>
//             </div>
//           </Collapse>
//         </div>
//         <div>
//           <Link
//             to="/authentication"
//             style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
//             onClick={() => toggleSection('authentication')}
//           >
//             <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: '10px' }} /> Authentication
//           </Link>
//           <Collapse in={openSection === 'authentication'}>
//             <div style={{ paddingLeft: '20px' }}>
//               <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
//               <br />
//               <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
//             </div>
//           </Collapse>
//         </div>
//       </div>

//       <div
//         style={{
//           backgroundColor: '#8B4CF6',
//           padding: '20px',
//           borderRadius: '10px',
//           marginTop: '20px',
//           textAlign: 'center'
//         }}
//       >
//         <h5>Mannat Themes</h5>
//         <p>We Design and Develop Clean and High Quality Web Applications</p>
//         <Link
//           to="/upgrade-plan"
//           style={{
//             backgroundColor: '#ff6464',
//             borderColor: '#ff6464',
//             color: '#fff',
//             textDecoration: 'none',
//             padding: '10px 20px',
//             borderRadius: '5px'
//           }}
//         >
//           Upgrade your plan
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileText, faShoppingBag, faMagnet, faBox } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = ({ isVisible }) => {
  const [openSection, setOpenSection] = React.useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '250px',
        backgroundColor: '#6C38F5',
        padding: '20px',
        color: '#fff',
        overflowY: 'auto',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease'
      }}
    >
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png"
          alt="Logo"
          style={{ width: '40px', marginBottom: '10px', marginRight: '8px' }}
        />
        <div>
          <h4 style={{ margin: 0 }}>ROBOTECH</h4>
          <small style={{ color: '#E0E0E0' }}>INTELLIGENCE</small>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#B0B0B0', marginBottom: '10px' }}>DASHBOARDS & APPS</p>
        <div>
          <Link
            to="/dashboard"  // Link updated to point to the Dashboard page
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('admin')}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Admin
          </Link>
          <Collapse in={openSection === 'admin'}>
            <div style={{ paddingLeft: '20px' }}>
              <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
              <br />
              <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
              <br />
              <Link to="/add-product" style={{ color: '#fff', textDecoration: 'none' }}>Add Product Form</Link>
            </div>
          </Collapse>
        </div>
        <div>
          <Link
            to="/customer"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('customer')}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Customer
          </Link>
          <Collapse in={openSection === 'customer'}>
            <div style={{ paddingLeft: '20px' }}>
              <Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <br />
              <Link to="/product-details" style={{ color: '#fff', textDecoration: 'none' }}>Product Details</Link>
              <br />
              <Link to="/product-filter" style={{ color: '#fff', textDecoration: 'none' }}>Product Filter</Link>
            </div>
          </Collapse>
        </div>
        <div>
          <Link
            to="/apps"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('apps')}
          >
            <FontAwesomeIcon icon={faBox} style={{ marginRight: '10px' }} /> Apps
          </Link>
          <Collapse in={openSection === 'apps'}>
            <div style={{ paddingLeft: '20px' }}>
              <Link to="/chat" style={{ color: '#fff', textDecoration: 'none' }}>Chat</Link>
              <br />
              <Link to="/contact-list" style={{ color: '#fff', textDecoration: 'none' }}>Contact List</Link>
              <br />
              <Link to="/calendar" style={{ color: '#fff', textDecoration: 'none' }}>Calendar</Link>
            </div>
          </Collapse>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#B0B0B0', marginBottom: '10px' }}>COMPONENTS & EXTRA</p>
        <div>
          <Link
            to="/uikit"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('uikit')}
          >
            <FontAwesomeIcon icon={faMagnet} style={{ marginRight: '10px' }} /> UI Kit
          </Link>
          <Collapse in={openSection === 'uikit'}>
            <div style={{ paddingLeft: '20px' }}>
              <Link to="/ui-component-1" style={{ color: '#fff', textDecoration: 'none' }}>UI Component 1</Link>
              <br />
              <Link to="/ui-component-2" style={{ color: '#fff', textDecoration: 'none' }}>UI Component 2</Link>
            </div>
          </Collapse>
        </div>
        <div>
          <Link
            to="/pages"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('pages')}
          >
            <FontAwesomeIcon icon={faFileText} style={{ marginRight: '10px' }} /> Pages
          </Link>
          <Collapse in={openSection === 'pages'}>
            <div style={{ paddingLeft: '20px' }}>
              <Link to="/page1" style={{ color: '#fff', textDecoration: 'none' }}>Page 1</Link>
              <br />
              <Link to="/page2" style={{ color: '#fff', textDecoration: 'none' }}>Page 2</Link>
            </div>
          </Collapse>
        </div>
        <div>
          <Link
            to="/authentication"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('authentication')}
          >
            <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: '10px' }} /> Authentication
          </Link>
          <Collapse in={openSection === 'authentication'}>
            <div style={{ paddingLeft: '20px' }}>
              <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
              <br />
              <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
            </div>
          </Collapse>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#8B4CF6',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          textAlign: 'center'
        }}
      >
        <h5 style={{ margin: '0 0 10px' }}>Mannat Themes</h5>
        <p style={{ margin: '0 0 20px', color: '#E0E0E0' }}>We Design and Develop Clean and High Quality Web Applications</p>
        <Link
          to="/upgrade-plan"
          style={{
            backgroundColor: '#ff6464',
            borderColor: '#ff6464',
            color: '#fff',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            fontSize: '16px',
            display: 'inline-block',
            transition: 'background-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4c4c'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6464'}
        >
          Upgrade your plan
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
