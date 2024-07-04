import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/LoginPopup/Loginpopup'
// import Contact from './Components/Contact/Contact'
// import Design from './Components/Design/Design'



const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'> 
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/order' element={<PlaceOrder/>} ></Route>
      </Routes>
     <Footer/>
     
    
    </div>
    </>
  )
}

export default App
