import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

import './Settings.css'


import monitor from '../../../icons/monitor-sun.svg';
import bell from '../../../icons/bell-notification.svg';
import user from '../../../icons/user.svg';

const Settings = () => {

    const location = useLocation()
    return (
        <div className='settings-container'>

            <div className='heading-containers'>
                <div className='heading-of-settings'>
                    <h1>Settings</h1>
                    <p>Customize until match to your work flow</p>
                </div>
                <div className='buttons'>
                    <button className='button-cancel'>Cancel</button>
                    <button className='button-save'>save</button>
                </div>

            </div>

            <div className='nav-container'>
                <div className='nav-bar-items'>
                    <Link to='/settings/preference' className={`nav-links ${location.pathname === '/settings/preference' ? 'active' : ''}`}>
                        <img src={monitor} alt="Search" className="search-icons" />
                        Prefernces
                    </Link>
                    <Link to='/settings/notificationsettings' className={`nav-links ${location.pathname === '/settings/notificationsettings' ? 'active' : ''}`}>
                        <img src={bell} alt="Search" className="search-icons" />
                        Notifications
                    </Link>
                    <Link to='/settings/account' className={`nav-links ${location.pathname === '/settings/account' ? 'active' : ''}`}>
                        <img src={user} alt="Search" className="search-icons" />
                        Account
                    </Link>
                </div>
                <div className="settings-content">
                    <Outlet />
                </div>
            </div>
        </div>


    )
}

export default Settings