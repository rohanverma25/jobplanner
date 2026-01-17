import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import { useCart } from '../cartContext';
import logo from '../assets/logo.png';

const navMenu = [
  { label: 'Home', to: '/', sub: [] },
  {
    label: 'Expert Reach', sub: [
      { name: 'Fast Forwarding India', to: '/fast-forward-india' },
      { name: 'Fast Forwarding International', to: '/fast-forwarding-international' },
      { name: 'Career Enhancer', to: '/career-enhancer' }
    ]
  },
  {
    label: 'Career Assistance', sub: [
      { name: 'Profile Advisor', to: '/profile-advisor' },
      { name: 'Supreme Leadership', to: '/supreme-leadership' }
    ]
  },
  {
    label: 'Services', sub: [
      { name: 'Personality Development', to: '/personality-development' },
      { name: 'Opportunity Confirmation', to: '/opportunity-confirmation' },
      { name: 'Complete Package', to: '/complete-package' },
      { name: 'Aptitude Test', to: '/aptitude-test' },
      { name: 'Activate your Job Code', to: '/activate-job-code' },
      { name: 'Arbitrator ID Corroboration', to: '/arbitrator-id' },
      { name: 'Profile Booster', to: '/profile-booster' }
    ]
  },
  {
    label: 'Verification', sub: [
      { name: 'Education History Verification', to: '/education-verification' },
      { name: 'Previous Employment Verification', to: '/employment-verification' },
      { name: 'Current Employment Verification', to: '/current-employment-verification' }
    ]
  },
  {
    label: 'E-Learning', sub: [
      { name: 'Excel Basics', to: '/excel-basics' },
      { name: 'Python', to: '/python-programming' },
      { name: 'C++ Programming', to: '/cpp-programming' },
      { name: 'C Programming', to: '/c-programming' },
      { name: 'Digital Portfolio', to: '/digital-portfolio' }
    ]
  },
  { label: 'Contact', to: '/contact', sub: [] },
];

export default function NavBar({ onAuthClick, onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { items } = useCart();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  function handleLogout() {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  }

  const handleMobileLink = () => { setMobileOpen(false); setOpenSub(null); };

  return (
    <>
      <nav className="jp-navbar">
        <div className="jp-navbar-inner">
          {/* Logo + Title */}
          <div className="jp-navbar-left">
            <Link to="/" className="jp-logo-link">
              <img src={logo} alt="Job Planner Logo" className="jp-logo-img" />
              <span className="jp-logo-txt">Job Planner</span>
            </Link>
          </div>
          {/* CENTER MENU */}
          <div className="jp-navbar-center">
            {navMenu.map((menu, i) => (
              <div
                key={menu.label}
                className={`jp-menu-item${menu.sub && menu.sub.length ? " has-sub" : ""}`}
                tabIndex={0}
              >
                {menu.to
                  ? <Link to={menu.to} className={location.pathname === menu.to ? "jp-menu-active" : ""}>{menu.label}</Link>
                  : <span>{menu.label}</span>
                }
                {menu.sub && menu.sub.length > 0 && (
                  <div className="jp-hoverable-menu">
                    {menu.sub.map(item =>
                      <Link key={item.name} to={item.to} className="jp-submenu-link">{item.name}</Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* RIGHT: Cart/Profile/Login */}
          <div className="jp-navbar-right">
            {user ? (
              <>
                <button title="My Cart" onClick={onCartClick} className="jp-cart-btn">
                  <span role="img" aria-label="cart">🛒</span>
                  {items.length > 0 && (
                    <span className="jp-cart-badge">
                      {items.reduce((acc, item) => acc + item.qty, 0)}
                    </span>
                  )}
                </button>
                <div style={{ position: "relative" }}>
                  <button title="My Profile" className="jp-profile-btn" onClick={() => setShowProfileMenu(m => !m)}>
                    <span role="img" aria-label="profile">👤</span>
                  </button>
                  {showProfileMenu && (
                    <div className="jp-profile-menu">
                      <Link to="/profile" className="jp-profile-link" onClick={() => setShowProfileMenu(false)}>Profile</Link>
                      <button className="jp-logout-btn" onClick={handleLogout}>Log Out</button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button className="jp-login-btn" onClick={onAuthClick}>Login / Register</button>
            )}
            {/* Hamburger only on mobile */}
            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(m => !m)}
              aria-label="Open menu"
            >
              &#9776;
            </button>
          </div>
        </div>
        {/* MOBILE drawer */}
        {mobileOpen &&
          <div className="jp-mobile-menu">
            <ul>
              {navMenu.map((menu, i) => (
                <React.Fragment key={menu.label}>
                  <li className="jp-mobile-menu-item">
                    {menu.to
                      ? <Link to={menu.to} onClick={handleMobileLink} className="jp-mobile-mainlink">{menu.label}</Link>
                      : <span className="jp-mobile-mainlink">{menu.label}</span>
                    }
                    {menu.sub && menu.sub.length > 0 && (
                      <span className="jp-mobile-expand"
                        onClick={() => setOpenSub(openSub === i ? null : i)}>
                        {openSub === i ? '▲' : '▼'}
                      </span>
                    )}
                  </li>
                  {openSub === i && menu.sub && (
                    menu.sub.map(sub =>
                      <li key={sub.name} className="jp-mobile-submenu-item">
                        <Link to={sub.to} onClick={handleMobileLink}>{sub.name}</Link>
                      </li>
                    )
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        }
      </nav>
      {/* STYLES */}
      <style>
{`
.jp-navbar {
  width: 100vw; box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  position: fixed; left: 0; top: 40px; z-index: 1300;
  background: #f5f7fa; min-height: 56px; font-family: Tahoma, Arial, sans-serif;
}
.jp-navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 64px;
  /* Remove any flex-direction: column here */
}
  .jp-navbar-left, .jp-navbar-center, .jp-navbar-right {
  flex: 0 1 auto;
}
.jp-navbar-left {
  display: flex; align-items: center;
  
}
.jp-logo-link { display: flex; align-items: center; gap: 0.34rem; text-decoration: none; }
.jp-logo-img { height: 38px; width: 38px; object-fit: contain; margin-right: 2px; }
.jp-logo-txt { font-weight: 700; font-size: 1.3rem; color: #0c0c0cff; }
.jp-navbar-center {
  display: flex; justify-content: center; align-items: center;
  gap: 0.3rem; 
}
.jp-navbar-right {
  display: flex; align-items: center;
  gap: 1.1rem;  justify-content: flex-end; 
}
.jp-cart-btn { position: relative; background: none; border: none; cursor: pointer; font-size: 1.42rem; color: #1888be; }
.jp-cart-badge {
  position: absolute; top: -7px; right: -9px; background: #b80000; color: white;
  border-radius: 50%; padding: 2px 6px; font-size: 0.75rem; font-weight: 700;
  pointer-events: none; user-select: none;
}
.jp-profile-btn { background: none; border: none; cursor: pointer; font-size: 1.18rem; color: #176c17; }
.jp-profile-menu { position: absolute; right: 0; top: 110%; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.16);
  border-radius: 10px; min-width: 140px; z-index: 2222; }
.jp-profile-link { display: block; padding: 0.85rem 1.27rem; font-weight: 500; color: #0070f3; text-decoration: none; border-bottom: 1px solid #f5f5f5; }
.jp-logout-btn { width: 100%; padding: 0.75rem 1.1rem; background: none; border: none; color: #176c17; font-weight: 500; text-align: left; cursor: pointer;}
.jp-login-btn { padding: 0.5rem 1rem; background-color: #0d053bff; color: #fff; font-weight: 700; border: none; border-radius: 4px; cursor: pointer;
  font-size: 1.03rem; font-family: Tahoma, Arial, sans-serif; }

.navbar-hamburger {
  background: none; border: none; font-size: 2.2rem; margin-left: 1rem;
  display: none; align-items: center; justify-content: center; z-index: 2500; padding: 0;
}
.jp-menu-item { position: relative; padding: 0.5rem 0.8rem; font-weight: 300; cursor: pointer; color: #222;
  font-size: 0.9rem; border-radius: 4px; background: none;
}
.jp-menu-item.has-sub:focus-within .jp-hoverable-menu,
.jp-menu-item.has-sub:hover .jp-hoverable-menu {
  display: block;
}
.jp-hoverable-menu {
  display: none; position: absolute; left: 0; top: 100%; min-width: 190px; background: #fff;
  box-shadow: 0 4px 20px rgba(100,100,100,0.10); border-radius: 7px; z-index: 1400;
}
.jp-submenu-link { padding: 0.75rem 1.0rem; font-size: 1.03rem; display: block; color: #222; text-decoration: none; border-bottom: 1px solid #f1f1f1; }
.jp-menu-active { color: #01080fff; font-weight: 500; border-bottom: 2px solid #040b13ff; }

.jp-mobile-menu {
  position: fixed; top: 104px; left: 0; width: 100vw; background: #fff;
  z-index: 2000; box-shadow: 0 3px 20px rgba(44,44,44,0.09); min-height: calc(100vh - 104px);
}
.jp-mobile-menu ul { list-style: none; padding: 0; margin: 0; }
.jp-mobile-menu-item {
  border-bottom: 1px solid #eaeaea; font-weight: 600; font-size: 1.14rem;
  display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.6rem; cursor: pointer;
}
.jp-mobile-mainlink { color: #050a0fff; text-decoration: none; flex: 1; }
.jp-mobile-expand { margin-left: 13px; font-size: 1.23rem; user-select: none;}
.jp-mobile-submenu-item {
  background: #f8fafd; border-bottom: 1px solid #eaeaea; font-size: 1.07rem; color: #333; padding: 0.85rem 2.8rem; cursor: pointer;
}

@media (max-width: 1200px) {
  .jp-navbar-center { min-width: 270px; }
}
@media (max-width: 950px) {
  .jp-navbar-inner {
    flex-direction: column;
    height: auto;
    gap: 4px;
  }
  .jp-navbar-left, .jp-navbar-right, .jp-navbar-center {
    min-width: unset;
    flex: unset;
  }
}
@media (max-width: 800px) {
  .jp-navbar-inner { flex-direction: row; height: 56px !important; }
  .jp-navbar-center { display: none !important; }
  .navbar-hamburger { display: flex !important; }
  .jp-navbar { height: 56px !important; top: 58px !important;}
  .jp-container, .jp-navbar-inner { height: 56px !important; min-height: 56px !important;}
}
@media (max-width: 600px) {
  .jp-navbar { height: 46px !important; top: 58px !important;}
  .jp-container, .jp-navbar-inner { height: 46px !important; min-height: 46px !important;}
}
`}
      </style>
    </>
  );
}
