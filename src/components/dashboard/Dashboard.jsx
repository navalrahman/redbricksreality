import React, {useEffect, useState} from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';


// Import Icons
import searchIcon from '../../icons/search.svg';
import homeIcon from '../../icons/apps.svg';
import portfolioIcon from '../../icons/briefcase.svg';
import investmentIcon from '../../icons/wallet-income.svg';
import payoutsIcon from '../../icons/wallet-arrow.svg';
import fileManagerIcon from '../../icons/subfolder.svg';
import profilesIcon from '../../icons/user-pen.svg';
import messagesIcon from '../../icons/comment-dots.svg';
// import updatesIcon from '../../icons/updates.svg';
import reportsIcon from '../../icons/newspaper.svg';
import taxationIcon from '../../icons/user-gear.svg';
import settingsIcon from '../../icons/settings.svg';
import helpandsupport from '../../icons/interrogation.svg';
import signout from '../../icons/sign-out-alt.svg';

import Heading from '../dashboard/heading/Heading.jsx'
import LogoutModal from './logoutmodel/LogoutModel.jsx';

const Dashboard = () => {

    const location = useLocation(); // Get the current path
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoutConfirm = () => {
        setShowLogoutModal(false);
        localStorage.clear()
        navigate('/login');
    };

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
    return (
        <div className='dashboard-container'>
            <Heading />
            <div className='dashboard-main'>

                <aside className='sidebar'>
                    <nav className='sidebar-nav'>
                        {/* <input className='input-dashboard' type="text" placeholder='Search' /> */}

                        <div className="search-container">
                            <img src={searchIcon} alt="Search" className="search-icon" />
                            <input className="input-dashboard" type="text" placeholder="Search" />
                        </div>

                        <p>Dashboard</p>

                        <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                            <img src={homeIcon} alt="Home" /> Home
                        </Link>
                        <Link to='/portfolio' className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                            <img src={portfolioIcon} alt="Portfolio" /> Portfolio Overview
                        </Link>
                        <Link to="/investments" className={`nav-link ${location.pathname === '/investments' ? 'active' : ''}`}>
                            <img src={investmentIcon} alt="Investments" /> Investments
                        </Link>
                        <Link to="/payouts" className={`nav-link ${location.pathname === '/payouts' ? 'active' : ''}`}>
                            <img src={payoutsIcon} alt="Payouts" /> Payouts
                        </Link>
                        <Link to="/file-manager" className={`nav-link ${location.pathname === '/file-manager' ? 'active' : ''}`}>
                            <img src={fileManagerIcon} alt="File Manager" /> File Manager
                        </Link>
                        <Link to="/profiles" className={`nav-link ${location.pathname === '/profiles' ? 'active' : ''}`}>
                            <img src={profilesIcon} alt="Profiles" /> Profiles
                        </Link>

                        <p>Communication</p>
                        <Link to="/messages" className={`nav-link ${location.pathname === '/messages' ? 'active' : ''}`}>
                            <img src={messagesIcon} alt="Messages" /> Messages
                        </Link>
                        <Link to="/updates" className={`nav-link ${location.pathname === '/updates' ? 'active' : ''}`}>
                            <img src={messagesIcon} alt="Updates" /> Latest Updates
                        </Link>

                        <p>Others</p>
                        <Link to="/reports" className={`nav-link ${location.pathname === '/reports' ? 'active' : ''}`}>
                            <img src={reportsIcon} alt="Reports" /> Reports
                        </Link>
                        <Link to="/taxation" className={`nav-link ${location.pathname === '/taxation' ? 'active' : ''}`}>
                            <img src={taxationIcon} alt="Taxation" /> Taxation
                        </Link>
                        <Link to="/settings" className={`nav-link ${location.pathname == '/settings'
                            // ||'/settings/preference' || '/settings/notificationsettings' || '/settings/account' ? 'active' : ''
                            }`}>
                            <img src={settingsIcon} alt="Settings" /> Settings
                        </Link>
                        <br />
                        <br />
                        <Link to="/help&support" className={`nav-link ${location.pathname === '/help&support' ? 'active' : ''}`}>
                            <img src={helpandsupport} alt="help&support" /> Help & Support
                        </Link>
                        {/* <Link to="/logout" className={`nav-link ${location.pathname === '/logout' ? 'active' : ''}`}>
                            <img src={signout} alt="logout" /> Logout
                        </Link> */}

                        <div
                            className={`nav-link ${location.pathname === '/logout' ? 'active' : ''}`}
                            onClick={() => setShowLogoutModal(true)}
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                            <img src={signout} alt="logout" />
                            Logout
                        </div>

                        <LogoutModal
                            show={showLogoutModal}
                            onClose={() => setShowLogoutModal(false)}
                            onConfirm={handleLogoutConfirm}
                        />
                    {/* </div> */}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
        </div >
    );
};

export default Dashboard;
