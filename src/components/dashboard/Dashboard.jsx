import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';

import menuIcon from '../../icons/menu-burger.png';
import homeIcon from '../../icons/apps.svg';
import portfolioIcon from '../../icons/briefcase.svg';
import investmentIcon from '../../icons/wallet-income.svg';
import payoutsIcon from '../../icons/wallet-arrow.svg';
import fileManagerIcon from '../../icons/subfolder.svg';
import profilesIcon from '../../icons/user-pen.svg';
import messagesIcon from '../../icons/comment-dots.svg';
import reportsIcon from '../../icons/newspaper.svg';
import taxationIcon from '../../icons/user-gear.svg';
import settingsIcon from '../../icons/settings.svg';
import helpandsupport from '../../icons/interrogation.svg';
import signout from '../../icons/sign-out-alt.svg';

import Heading from '../dashboard/heading/Heading.jsx';
import LogoutModal from './logoutmodel/LogoutModel.jsx';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    localStorage.clear();
    navigate('/login');
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Heading />
      <div className='dashboard-container'>
        <div className='dashboard-main'>
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <img src={menuIcon} alt="Menu" />
          </button>

          <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <nav className='sidebar-nav'>
              <p>Dashboard</p>
              <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={homeIcon} alt="Home" /> Home
              </Link>
              <Link to='/portfolio' className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={portfolioIcon} alt="Portfolio" /> Portfolio Overview
              </Link>
              <Link to="/investments" className={`nav-link ${location.pathname === '/investments' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={investmentIcon} alt="Investments" /> Investments
              </Link>
              <Link to="/payouts" className={`nav-link ${location.pathname === '/payouts' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={payoutsIcon} alt="Payouts" /> Payouts
              </Link>
              <Link to="/file-manager" className={`nav-link ${location.pathname === '/file-manager' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={fileManagerIcon} alt="File Manager" /> File Manager
              </Link>
              <Link to="/profiles" className={`nav-link ${location.pathname === '/profiles' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={profilesIcon} alt="Profiles" /> Profiles
              </Link>

              <p>Communication</p>
              <Link to="/messages" className={`nav-link ${location.pathname === '/messages' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={messagesIcon} alt="Messages" /> Messages
              </Link>
              <Link to="/updates" className={`nav-link ${location.pathname === '/updates' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={messagesIcon} alt="Updates" /> Latest Updates
              </Link>

              <p>Others</p>
              <Link to="/reports" className={`nav-link ${location.pathname === '/reports' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={reportsIcon} alt="Reports" /> Reports
              </Link>
              <Link to="/taxation" className={`nav-link ${location.pathname === '/taxation' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={taxationIcon} alt="Taxation" /> Taxation
              </Link>
              <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={settingsIcon} alt="Settings" /> Settings
              </Link>
              <Link to="/help&support" className={`nav-link ${location.pathname === '/help&support' ? 'active' : ''}`} onClick={handleLinkClick}>
                <img src={helpandsupport} alt="Help & Support" /> Help & Support
              </Link>

              <div
                className={`nav-link`}
                onClick={(e) => {
                  // setShowLogoutModal(true);
                  // handleLinkClick();
                  e.stopPropagation();
                  setShowLogoutModal(true);
                }}
                style={{ cursor: 'pointer' }}
              >
                <img src={signout} alt="Logout" />
                Logout
              </div>

              <LogoutModal
                show={showLogoutModal}
                onClose={() => {setShowLogoutModal(false), handleLinkClick()}}
                onConfirm={handleLogoutConfirm}
              />
            </nav>
          </aside>

          <main className="dashboard-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
