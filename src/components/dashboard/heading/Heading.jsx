import React from 'react';
import {Link} from 'react-router-dom';

import './Heading.css'

import searchIcon from '../../../icons/search.svg';
import brightness from '../../../icons/brightness-low.svg'
import bell from '../../../icons/bell-notification.svg'
import portrait from '../../../icons/portrait.svg'

const Heading = () => {
  return (
    <div className='main-heading'>

      <div className='heading-one'>
        <h2>
          Red Bricks Reality
        </h2>
      </div>

      <div className='heading-two'>
        <div className="search">
          <img src={searchIcon} alt="Search" className="search_icon" />
          <input className="input_dashboard" type="text" placeholder="Search anything here" />
        </div>
      </div>

      <div className='heading-three'>
        <div className="brightness">
          <img src={brightness} alt="Search" className="brightness-icon" />
        </div>

      </div>
      <div className="heading-four">
        <Link to='/notification'>
          <div className="brightness">
            <img src={bell} alt="Search" className="brightness-icon" />
          </div>
        </Link>
      </div>

      <div className="heading-five">
        <div className="heading-five-one">
          <div className="image">
            <img src={portrait} alt="Search" className="image-icon" />
          </div>
          <div className='name'>
            <p><strong>Kiran</strong> </p>
            <p>Kiran.levontechno</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Heading