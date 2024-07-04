import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas suscipit at veniam vel earum consequatur delectus beatae. Assumenda ad saepe commodi iste fuga repellat incidunt, officiis earum dolore quis.</p>
                    <div className="footer-social-items">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Compnay</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET in touch</h2>
                    <ul>
                        <li>+21898945894</li>
                        <li>contact@tomato.com</li>
                    
                    </ul>

                </div>

            </div>
            <hr/>
<p className='footer-copywrite'>copywrite@tomato All Right Reserved 2024</p>
        </div>
    )
}

export default Footer
