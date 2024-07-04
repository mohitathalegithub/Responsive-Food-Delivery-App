import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home")
    return (
        <div className='navbar'>
           <Link to='/'><img src={assets.logo} className='logo'/></Link> 
            <ul className="nav-menu">
                <Link to='/' onClick={()=>{setMenu("home")}} className={menu==='home'?'active':" "}>Home</Link>
                <a href='#explore-menu' onClick={()=>{setMenu("Menu")}} className={menu==='Menu'?'active':" "}>Menu</a>
                <a href='#app-download' onClick={()=>{setMenu("mobile-app")}}  className={menu==='mobile-app'?'active':" "}>mobile-app</a>
                <a href='#footer' onClick={()=>{setMenu("contact")}} className={menu==='contact'?'active':" "}>  contact us</a>
            </ul>
            <div className="nav-right">
                <img src={assets.search_icon} />
                <div className="navbar-seacrhicon">

                   <Link to='/cart'><img src={assets.basket_icon} alt='bskericon ' /></Link> 
                    <div className="dot">

                    </div>
                </div>
                <button onClick={()=>setShowLogin(true)}>signup</button>
            </div>
        </div>
    )
}

export default Navbar
