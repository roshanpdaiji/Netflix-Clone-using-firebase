import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { logout } from '../../firebase'; // Ensure logout function is correctly implemented and imported

function Navbar() {
  const navRef = useRef();

  // Scroll effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  return (
    <div ref={navRef} className="navbar">
      {/* Left Side of Navbar */}
      <div className="navbar-left">
        <div className="netflix-logo">Netflix</div>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right Side of Navbar */}
      <div className="navbar-right">
        <p style={{ marginRight: '20px' }}>Children</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: '8px 10px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '200px',
            }}
          />
          <button
            style={{
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
              borderRadius: '4px',
              marginLeft: '5px',
            }}
          >
            <i className="fa fa-search" style={{ fontSize: '16px' }}></i>
          </button>
        </div>
        <div className="navbar-profile m-2">

          <img height="25px" 
          src="https://careerdiscovery.sciencebuddies.org/Dirs/37/266/img/icons/avatar-circle-cyan-724.png" 
          alt="[profile" />

          <img
            className="profile"
            height="25px"
            src="https://static.vecteezy.com/system/resources/previews/016/326/815/original/power-on-off-button-icon-with-transparent-background-free-png.png"
            alt="Sign Out"
          />

          <img
            height="20px"
            src="https://www.clker.com/cliparts/j/s/U/7/a/W/shopping-cart-hi.png"
            alt="Shopping Cart"
          />

          <div className="dropdown">

            <p
              onClick={() => {
                logout()
                  .then(() => console.log('User logged out'))
                  .catch((error) => console.error('Logout error:', error));
              }}
              style={{
                cursor: 'pointer',
                color: '#f00',
                margin: '0',
                fontWeight: 'bold',
              }}
            >
              Sign out of Netflix
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
