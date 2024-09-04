import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
import ReactDatePicker from 'react-datepicker'; // Import Datepicker Component
import { HiMenu, HiSearch } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { format } from 'date-fns'; // Date formatting
import { Dropdown, Button, Pagination } from 'react-bootstrap';
import ProductTable from './ProductTable';
import Draft from './draft';
import Publish from './publish';
import Discount from './discount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import Sidebar from './Sidebar'; // Import Sidebar component
import {FaCogs, FaDollarSign, FaSignOutAlt } from 'react-icons/fa';


function Product() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All'); // State for active tab
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notifications dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Toggle search bar visibility
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  // Toggle sidebar visibility
  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Toggle notifications dropdown
  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleProfileMenuClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      {/* Sidebar */}
      {sidebarVisible && <Sidebar />}

      {/* Main Content */}
      <div style={{ marginLeft: sidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
        <nav
          style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                color: 'gray',
              }}
              onClick={handleSidebarToggle} 
            >
              <HiMenu size={24} />
            </button>
            <button
              style={{
                backgroundColor: '#3874ff1a',
                border: 'none',
                color: '#3874ff',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              New Task
            </button>
          </div>

          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    border: 'solid',
                    outline: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: 'black',
                    width: '200px',
                    marginRight: '10px',
                    borderWidth: '1px',
                    borderColor: '#f7f8fa'
                  }}
                />
              )}
              <HiSearch
                size={24}
                onClick={handleSearchClick}
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  color: 'gray',
                  transition: 'color 0.3s ease',
                }}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <FiBell
                size={24}
                onClick={handleNotificationsClick}
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  color: 'gray',
                  transition: 'color 0.3s ease',
                }}
              />
              {showNotifications && (
                <Dropdown.Menu
                  show={showNotifications}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    width: '200px',
                    padding: '10px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                  }}
                >
                  <Dropdown.Item href="#">Notification 1</Dropdown.Item>
                  <Dropdown.Item href="#">Notification 2</Dropdown.Item>
                  <Dropdown.Item href="#">Notification 3</Dropdown.Item>
                </Dropdown.Menu>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
     
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <FaUserCircle
          size={30}
          onClick={handleProfileMenuClick}
          style={{
            cursor: 'pointer',
            color: 'gray',
            transition: 'color 0.3s ease',
          }}
        />
        <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>Maria GibSon</span>
          <span style={{ fontSize: '12px', color: 'gray' }}>Admin</span>
        </div>
        {showProfileMenu && (
          <Dropdown.Menu
            show={showProfileMenu}
            style={{
              position: 'absolute',
              top: '100%',
              width: '200px',
              padding: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              zIndex: 1000,
              right:'0'
            }}
          >
            <Dropdown.Item href="#">
              <FaUserCircle style={{ marginRight: '10px' }} />
              Profile
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <FaCogs style={{ marginRight: '10px' }} />
              Settings
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <FaDollarSign style={{ marginRight: '10px' }} />
              Earnings
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <FaSignOutAlt style={{ marginRight: '10px' }} />
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </div>
    </div>


          </div>
        </nav>
        <hr style={{ marginTop: '0px' }} />

        {/* Date Picker Component */}
        <div
          style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <h1 style={{ fontSize: '20px', color: 'black' }}>Product</h1>
            <p style={{ color: 'gray' }}>
              Robotech / Admin / <span style={{ color: 'blue' }}>Products</span>
            </p>
          </div>
          <div style={{ border: '0.5px solid blue', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>
            <ReactDatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MMM-yyyy"
              popperPlacement="bottom-end"
              popperProps={{
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10], // Adjust the offset to prevent overlap
                    },
                  },
                ],
              }}
              customInput={<p style={{ color: 'blue', margin: 0 }}>Today: {format(selectedDate, 'dd-MMM-yyyy')}</p>}
            />
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ padding: '15px' }}>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              display: 'flex',
              gap: '10px',
            }}
          >
            {['All', 'Published', 'Drafts', 'On Discount'].map((tab) => (
              <li
                key={tab}
                style={{
                  display: 'inline',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  color: activeTab === tab ? '#007bff' : '#666',
                  textAlign: 'center',
                  borderBottom: activeTab === tab ? '2px solid #007bff' : 'none',
                }}
                onClick={() => handleTabChange(tab)}
              >
                {tab} {tab === 'All' ? '(4251)' : tab === 'Published' ? '(3255)' : tab === 'Drafts' ? '(25)' : '(532)'}
              </li>
            ))}
          </ul>
          <hr style={{ marginTop: '0px' }} />
        </div>

        {/* Filters and Search */}
        <div
          style={{
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '15px', padding: '15px' }}>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: '#f7f8fa',
                  borderColor: 'gray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  color: 'black'
                }}
              >
                All Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Clothes</Dropdown.Item>
                <Dropdown.Item href="/">Electronics</Dropdown.Item>
                <Dropdown.Item href="/">Furniture</Dropdown.Item>
                <Dropdown.Item href="/">Footwear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: '#f7f8fa',
                  borderColor: 'gray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  color: 'black'
                }}
              >
                Vendor
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Vendor 1</Dropdown.Item>
                <Dropdown.Item href="/">Vendor 2</Dropdown.Item>
                <Dropdown.Item href="/">Vendor 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px' }}>
            <HiSearch size={20} style={{ margin: '0 10px', color: '#888' }} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                padding: '5px',
                height: '100%',
                borderRadius: '4px',
                fontSize: '14px',
                color: 'black',
                backgroundColor: '#fff',
              }}
            />
            <Button
              style={{
                backgroundColor: '#5c3dc3',
                border: 'none',
                height: '38px',
                color: 'white',
              }}
              type="button"
            >
              Add Product
            </Button>
          </div>
        </div>
        
        {/* Product Table */}
        {activeTab === 'All' && <ProductTable />}
        {activeTab === 'Published' && <Publish />}
        {activeTab === 'Drafts' && <Draft />}
        {activeTab === 'On Discount' && <Discount />}
      </div>


      <Pagination style={{ justifyContent: 'end', marginRight: '20px', paddingTop: '5px' }}>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
        </Pagination>


      <footer>
        <hr />
        <div style={{ display: 'flex', marginLeft: '8%', padding: '10px' }}>
          <FontAwesomeIcon icon={faCopyright} style={{ marginRight: '8px', marginTop: '5px' }} />
          <p>2024 Baise Gaba</p>
        </div>
      </footer>
    </>
  );
}

export default Product;
