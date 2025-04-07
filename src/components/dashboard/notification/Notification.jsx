import React from 'react';

import './Notification.css';

import clock from '../../../icons/clock-five.svg';
import cross from '../../../icons/cross.svg'
import user from '../../../icons/user-trust.svg'

const Notification = () => {
    return (
        <div className='notification-container'>
            <div className='heading-container'>
                <h1>Notifications</h1>
            </div>


            <div className="list-container">
                <div className="list-container-heading">
                    <div className="list-container-content">
                        <img src={cross} alt="naval" className="avatar" />
                        <h3 className='heading'>Joined new user</h3>
                    </div>
                    <div className="list-container-heading-time">
                        <img src={clock} alt="clock" className="list-container-clock" />
                        <time dateTime="2025-03-26T14:30">March 26, 2025 - 2:30 PM</time>
                    </div>
                </div>

                <div className='list-conatiner-content'>
                    <strong>New Registration: <span>Lorem ipsum dolor sit,</span> <br /></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci aut alias sequi, vitae necessitatibus facere tempora nostrum praesentium rerum magnam molestias earum ex illo illum a atque. Ea, eligendi.</p>
                    <div className='list-container-image-name'>
                        <img src={user} alt="" className='user-avatar' />
                        <h2 className='user-name'>Navneetha M</h2>
                    </div>

                </div>
            </div>

            
            <div className="list-container">
                <div className="list-container-heading">
                    <div className="list-container-content">
                        <img src={cross} alt="naval" className="avatar" />
                        <h3 className='heading'>Joined new user</h3>
                    </div>
                    <div className="list-container-heading-time">
                        <img src={clock} alt="clock" className="list-container-clock" />
                        <time dateTime="2025-03-26T14:30">March 26, 2025 - 2:30 PM</time>
                    </div>
                </div>

                <div className='list-conatiner-content'>
                    <strong>New Registration: <span>Lorem ipsum dolor sit,</span> <br /></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci aut alias sequi, vitae necessitatibus facere tempora nostrum praesentium rerum magnam molestias earum ex illo illum a atque. Ea, eligendi.</p>
                    <div className='list-container-image-name'>
                        <img src={user} alt="" className='user-avatar'  />
                        <h2 className='user-name'>Navneetha M</h2>
                    </div>

                </div>
            </div>

            
            <div className="list-container">
                <div className="list-container-heading">
                    <div className="list-container-content">
                        <img src={cross} alt="naval" className="avatar" />
                        <h3 className='heading'>Joined new user</h3>
                    </div>
                    <div className="list-container-heading-time">
                        <img src={clock} alt="clock" className="list-container-clock" />
                        <time dateTime="2025-03-26T14:30">March 26, 2025 - 2:30 PM</time>
                    </div>
                </div>

                <div className='list-conatiner-content'>
                    <strong>New Registration: <span>Lorem ipsum dolor sit,</span> <br /></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci aut alias sequi, vitae necessitatibus facere tempora nostrum praesentium rerum magnam molestias earum ex illo illum a atque. Ea, eligendi.</p>
                    <div className='list-container-image-name'>
                        <img src={user} alt="" className='user-avatar' />
                        <h2 className='user-name'>Navneetha M</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notification