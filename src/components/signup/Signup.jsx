import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import image_three from '../../images/image-three.jpg';


import './Signup.css'
const Signup = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <div className="signup-container">
            {/* Left Side - Image Section */}
            <div className="left-section-signup">
                <img src={image_three} alt="Nature" className='image_three' />
                <div className="text-block">
                    <h4>#1 Platform for Real Estate Investors</h4>
                    <p>Create your account to access exclusive<br /> real estate opportunities</p>
                </div>
            </div>

            {/* Right Side - Login Form Section */}
            <div className="right-section-signup">
                <div className="container_one-signup">
                    <h2>Welcome to <span className='container_one_span-signup'>RBR</span></h2>
                    <Link className='container_one_link-signup' to="/login">Have an Account? <br />
                        <span className='container_one_link_span-signup'>Sign in</span>
                    </Link>
                </div>

                <div className="container_two-signup">
                    <h1>Sign up</h1>
                </div>

                <div className='container_four_signup'>
                    <form onSubmit={handleSubmit}>
                        <div className='container_four_input_one_signup'>
                            <label className='label_signup'>Enter your username or email address</label>
                            <input className='input_signup' type="text" placeholder='username or email address' />
                        </div>
                        <div className="container_four_input_two_signup_">
                            <div className="input-group">
                                <label className="label_signup">User name</label>
                                <input className="input_signup" type="text" placeholder="user name" />
                            </div>

                            <div className="input-group">
                                <label className="label_signup">Contact number</label>
                                <input className="input_signup" type="number" placeholder="conatct number" />
                            </div>
                        </div>

                        <div className='container_four_input_thrree_signup'>
                            <label className='label_signup'>Enter your password</label>
                            <input className='input_signup' type="password" placeholder='password' />
                        </div>

                        {/* <Link className='link_forgot'>Forgot Password?</Link> */}

                        <div className='container_four_input_three_signup'>
                            <input className='input_signup' type="submit" value="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup