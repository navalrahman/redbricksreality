
import React, { useState } from 'react';
import searchIcon from '../../../icons/search.svg';
import './Heading.css';
import { Link } from 'react-router-dom';

// import searchIcon from '../../../icons/search.svg';
import brightness from '../../../icons/brightness-low.svg';
import bell from '../../../icons/bell-notification.svg';
import portrait from '../../../icons/portrait.svg';


const Heading = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleNav = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`main-heading ${isResponsive ? 'responsive' : ''}`}>
      <h2>Red Bricks Reality</h2>

      <div className='sub-heading-two'>
        <img src={searchIcon} alt="Search" className="search_icon" />
        <input className="input_dashboard" type="text" placeholder="Search anything here" />
      </div>

      <div className='heading-three'>
         <div className="brightness">
           <img src={brightness} alt="Theme Toggle" className="brightness-icon" />
         </div>
       </div>

       <div className="heading-four">
         <Link to='/notification'>
           <div className="brightness">
             <img src={bell} alt="Notifications" className="brightness-icon" />
           </div>
         </Link>
       </div>

       <div className="heading-five">
           <div className="image">
             <img src={portrait} alt="User" className="image-icon" />
           </div>
           <div className='name'>
             <p><strong>Kiran</strong></p>
             <p>Kiran.levontechno</p>
         </div>
       </div>

      {/* Hamburger icon */}
      <div className="icon" onClick={toggleNav}>
        &#9776;
      </div>
    </div>
  );
};

export default Heading;
