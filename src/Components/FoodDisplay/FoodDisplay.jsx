import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = () => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            return <FoodItem key={index} name={item.name} description={item.description} price={item.price} image={item.image}/>

        })}
      </div>
    </div>
  )
}

export default FoodDisplay