import React from 'react'

import './NotificationSettings.css'

const NotificationSettings = () => {
  return (
    <div className='notification-settings-container'>
      <div className='notification-settings-heading'>
        <h2>Notification</h2>
        <p>Get notified what's happening right now. Tiu can turn off at any time</p>
      </div>

      <div className='notification-settings-container-two'>
        <div className='notification-setting-container-two-divone'>
          <div className='notification-setting-container-two-divone-sub-divone'>
            <h2>General Notifications</h2>
            <p>Get alerts on listings, price changes, and investments.</p>
          </div>

          <div className='notification-setting-container-two-divone-sub-divtwo'>
            
            <div className='checbox-container'>
              <input type="checkbox" id="toggle" className="toggle-input" />
              <label for="toggle" className="toggle-label"></label><br/>
            </div>

            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Receive updates on new property listings</label>
            </div>

            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Get alerts for price drops on properties of intrest</label>
            </div>


            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Stay informed about investments opportunities</label>
            </div>

          </div>
        </div>
      </div>


      
      <div className='notification-settings-container-two'>
        <div className='notification-setting-container-two-divone'>
          <div className='notification-setting-container-two-divone-sub-divone'>
            <h2>Email Notifications</h2>
            <p>Get real estate updates, investments alerts, and insights straight to your inbox</p>
          </div>

          <div className='notification-setting-container-two-divone-sub-divtwo'>
            
            <div className='checbox-container'>
              <input type="checkbox" id="toggle" className="toggle-input" />
              <label for="toggle" className="toggle-label"></label><br/>
            </div>

            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Receive monthly market insights & trends</label>
            </div>

            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Get remainders for upcoming real estate events</label>
            </div>


            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Get personalized investments recomendations</label>
            </div>

          </div>
        </div>
      </div>

      <div className='notification-settings-container-two'>
        <div className='notification-setting-container-two-divone'>
          <div className='notification-setting-container-two-divone-sub-divone'>
            <h2>Push Notifications</h2>
            <p>Get instant real estate updates on your device</p>
          </div>

          <div className='notification-setting-container-two-divone-sub-divtwo'>
            
            <div className='checbox-container'>
              <input type="checkbox" id="toggle" className="toggle-input" />
              <label for="toggle" className="toggle-label"></label><br/>
            </div>

            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Instant alerts for property matches</label>
            </div>

            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Important investment updates & announcements</label>
            </div>


            <div className="checkbox-container">
              <input className='notification-setting-checkbox' type="checkbox" />
              <label>Notifications for transaction status updates</label>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default NotificationSettings