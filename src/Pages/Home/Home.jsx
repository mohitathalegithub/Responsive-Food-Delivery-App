import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
// import ContactForm from '../../Components/Contact/Contact'



const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      
    <ExploreMenu category={category} setCategory={setCategory}/>
 
<FoodDisplay/>

<AppDownload/>
    </div>
  )
}

export default Home
