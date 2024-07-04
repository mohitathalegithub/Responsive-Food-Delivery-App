import React from 'react'
import { food_list } from '../../assets/assets'
import './Cart.css'
const Cart = () => {

  return (
    
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">

        </div>
        
        <br/>
        <hr/>
      </div>
      {food_list.map((fditm,index)=>{
        return(
          <>
          <div className='cart-items-title cart-items-item'>
          {fditm.price}<br/>
          {fditm.category}<br/>
          {fditm.description}<br/>
          </div>
     
 
          
          </>
        )


      })}
      
      
    </div>
  )
}

export default Cart