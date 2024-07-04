import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,description,name,price,image}) => {
    const[itemCount,setItemCount]=useState(0)
  // const{cartItems,addToCart, removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image}/>
            {/* {
              !itemCount?<img src={assets.add_icon_white} className='add' onClick={setItemCount(prev=>prev+1)}/>:<div className='food-item-counter'><img onClick={prev=>prev-1} src={assets.remove_icon_red}/>{itemCount}<img onClick={()=>setItemCount(itemCount=>itemCount+1)} src={assets.add_icon_green}/></div>
            } */}
        </div>
      <div className="food-item-info">
       
        <div className="food-item-name-rating">
        <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
