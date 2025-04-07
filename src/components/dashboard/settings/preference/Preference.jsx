import React from 'react'

import './Preference.css'
const Preference = () => {
  return (
    <div className='prefernce-container'>
      <div className='preference-heading'>
        <h2>Preferences</h2>
        <p>Customisation according to your prefernces</p>
      </div>

      <div className='preference-sub-heading'>
        <h2>Select Theme</h2>
        <div className='themes'>

          <div className='theme-card'>
            <div className="theme-preview light-mode"></div>
            <p>Light Mode <span className="active-text">(Active)</span></p>
          </div>

          <div className='theme-card'>
            <div className="theme-preview dark-mode"></div>
            <p>Dark Mode</p>
          </div>

          <div className='theme-card'>
            <div className="theme-preview custom-mode"></div>
            <p>
              Custom Colour
            </p>
          </div>
        </div>

        <div className='preference-form'>
          <form className='preference-form-tag'>
            <div className='preference-form-div-tag'>
              <label>TimeZone</label>
              <input type="text" />
            </div>


            <div className='preference-form-div-tag'>
              <label>Language</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Preference