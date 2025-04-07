import React from 'react'
import './Account.css'


import user from '../../../../icons/user.svg';

const Account = () => {
  return (
    <div className='account-settings-container'>
      <div className='account-settings-heading'>
        <h2>Account</h2>
        <p>Settings you details account here</p>
      </div>

      <div className='account-settings-details'>
        <div className='account-settings-details-profile-picture'>
          <h3>My Profile</h3>
          <div className='account-settings-details-profile-picture-details'>
            <img src={user} alt="sdasda" className='account-settings-details-profile-picture-image' />
            <button className='account-settings-details-profile-picture-upload'>Upload New</button>
            <button className='account-settings-details-profile-picture-delete'>Delete</button>
          </div>

          <div className='account-settings-details-form'>
            <form className='account-settings-details-form-tag'>

              <div className='account-settings-details-form-div'>
                <label htmlFor="">First Name</label>
                <input type="text" className='account-settings-details-form-div-input' />
                <label htmlFor="">Last Name</label>
                <input type="text" className='account-settings-details-form-div-input' />
              </div>


              <div className='account-settings-details-form-div'>
                <label htmlFor="" className='account-settings-details-form-div-label' >Phone number</label>
                <input type="text" className='account-settings-details-form-div-input' />
                <label htmlFor="" className='account-settings-details-form-div-label' >Email address</label>
                <input type="text" className='account-settings-details-form-div-input' />
              </div>


              <div className='account-settings-details-form-div'>
                <label htmlFor="">Birth of date</label>
                <input type="text" className='account-settings-details-form-div-input' />
                <label htmlFor="">Password</label>
                <input type="text" className='account-settings-details-form-div-input' />
              </div>

            </form>
          </div>
        </div>
      </div>


      <div className='account-settings-delete'>

        <div className='account-settings-delte-divone'>
          <h4>Delete account</h4>
          <p>When you delete your account, you loss access to front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
        </div>

        <div className='account-settings-delte-divtwo'>
          <div className='account-settings-delte-divtwo-buttons'>
            <button className='deleteaccount'>Delete Account</button>
            <button className='learnmore'>Leatn More</button>
          </div>
        </div>

      </div>

    </div >
  )
}

export default Account