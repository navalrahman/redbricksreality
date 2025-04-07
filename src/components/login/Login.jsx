import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

import google from '../../images/google.jpg';
import facebook from '../../images/facebook.png';
import apple from '../../images/apple.png';
import image_two from '../../images/image_two.jpg';

const Login = () => {
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const fakeToken = '1234567890abcdef';
        localStorage.setItem('token', fakeToken);
        setToken(fakeToken);    
        navigate('/');
    }

    return (
        <div className="login-container">
            {/* Left Side - Image Section */}
            <div className="left-section">
                <img src={image_two} alt="Nature" className='image_one' />
                <div className="text-block">
                    <h4>Welcome Back!</h4>
                    <p>Login to track your investments, explore new <br/> opportunities, and stay ahead in real estate</p>
                </div>
            </div>

            {/* Right Side - Login Form Section */}
            <div className="right-section">
                <div className="container_one">
                    <h2>Welcome to <span className='container_one_span'>Red Bricks Realty</span></h2>
                    <Link className='container_one_link' to="/signup">No Account? <br />
                        <span className='container_one_link_span'>Sign up</span>
                    </Link>
                </div>

                <div className="container_two">
                    <h1>Sign in</h1>
                </div>

                <div className="container_three">
                    <div className='container_three_image_one'>
                        <img src={google} alt="google" />
                         <span>Sign in with Google</span>
                    </div>
                    <div className='container_three_image_two'>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className='container_three_image_three'>
                        <img src={apple} alt="apple" />
                    </div>
                </div>

                <div className='container_four'>
                    <form onSubmit={handleSubmit}>
                        <div className='container_four_input_one'>
                            <label className='label'>Enter your username or email address</label>
                            <input className='input' type="email" placeholder='username or email address' />
                        </div>

                        <div className='container_four_input_two'>
                            <label className='label'>Enter your password</label>
                            <input className='input' type="password" placeholder='password' />
                        </div>

                        <Link className='link_forgot'>Forgot Password?</Link>

                        <div className='container_four_input_three'>
                            <input className='input' type="submit" value="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
