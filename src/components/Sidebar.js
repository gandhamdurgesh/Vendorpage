import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileText, faShoppingBag, faMagnet, faBox } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [openSection, setOpenSection] = useState('');

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
      }}
    >
      
      <div style={{ marginBottom: '20px',display:'flex'}}>
        <img src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png" alt="Logo" style={{ width: '40px', marginBottom: '10px', marginRight:'8px' }} />
        <div>
        <h4 style={{ margin: 0 }}>ROBOTECH</h4>
        <small style={{ color: '#E0E0E0' }}>INTELLIGENCE</small>
        </div>
      </div>

      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#B0B0B0', marginBottom: '10px' }}>DASHBOARDS & APPS</p>
        <div>
          <Button
            variant="link"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('admin')}
            aria-expanded={openSection === 'admin'}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Admin
          </Button>
          <Collapse in={openSection === 'admin'}>
            <div style={{ paddingLeft: '20px' }}>
              <p>Dashboard</p>
              <p>Products</p>
              <p>Add Product Form</p>
            </div>
          </Collapse>
        </div>
        <div>
          <Button
            variant="link"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('customer')}
            aria-expanded={openSection === 'customer'}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Customer
          </Button>
          <Collapse in={openSection === 'customer'}>
            <div style={{ paddingLeft: '20px' }}>
              <p>Home</p>
              <p>Product Details</p>
              <p>Product Filter</p>
            </div>
          </Collapse>
        </div>
        <div>
          <Button
            variant="link"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('apps')}
            aria-expanded={openSection === 'apps'}
          >
            <FontAwesomeIcon icon={faBox} style={{ marginRight: '10px' }} /> Apps
          </Button>
          <Collapse in={openSection === 'apps'}>
            <div style={{ paddingLeft: '20px' }}>
              <p>Chat</p>
              <p>Contact List</p>
              <p>Calendar</p>
            </div>
          </Collapse>
        </div>
      </div>

      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#B0B0B0', marginBottom: '10px' }}>COMPONENTS & EXTRA</p>
        <div>
          <Button
            variant="link"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('uikit')}
            aria-expanded={openSection === 'uikit'}
          >
            <FontAwesomeIcon icon={faMagnet} style={{ marginRight: '10px' }} /> UI Kit
          </Button>
          <Collapse in={openSection === 'uikit'}>
            <div style={{ paddingLeft: '20px' }}>
              <p>UI Component 1</p>
              <p>UI Component 2</p>
            </div>
          </Collapse>
        </div>
        <div>
          <Button
            variant="link"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('pages')}
            aria-expanded={openSection === 'pages'}
          >
            <FontAwesomeIcon icon={faFileText} style={{ marginRight: '10px' }} /> Pages
          </Button>
          <Collapse in={openSection === 'pages'}>
            <div style={{ paddingLeft: '20px' }}>
              <p>Page 1</p>
              <p>Page 2</p>
            </div>
          </Collapse>
        </div>
        <div>
          <Button
            variant="link"
            style={{ color: '#fff', textDecoration: 'none', padding: '5px 0', display: 'flex', alignItems: 'center' }}
            onClick={() => toggleSection('authentication')}
            aria-expanded={openSection === 'authentication'}
          >
            <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: '10px' }} /> Authentication
          </Button>
          <Collapse in={openSection === 'authentication'}>
            <div style={{ paddingLeft: '20px' }}>
              <p>Login</p>
              <p>Register</p>
            </div>
          </Collapse>
        </div>
      </div>

      
      <div style={{ backgroundColor: '#8B4CF6', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'center' }}>
        <h5>Mannat Themes</h5>
        <p>We Design and Develop Clean and High Quality Web Applications</p>
        <Button style={{ backgroundColor: '#ff6464', borderColor: '#ff6464', color: '#fff' }}>
          Upgrade your plan
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
