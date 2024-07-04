import React from 'react'
import { assets } from '../../assets/assets'
import './Design.css'

const Design = () => {
  return (
    <div className='image-container'>
        hi
      <div className="right">
      <img src={assets.bag_icon}/>

      </div>
      <div className="left">
      <img src={assets.basket_icon}/>

      </div>
    </div>
  )
}

export default Design
