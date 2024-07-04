
import { createContext } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    // const[cartItems,setCartItems]=useState({})
    /*const addToCart=(itemid)=>{
        if(!cartItems[itemid])
        {setCartItems((prev)=>({prev,[itemid]:1}))


        }
        else{
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
        const removeFromCart=(itemid)=>{
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))

        }
        
    }*/
    const contextValue={
        food_list
        // ,cartItems,setCartItems,addToCart,removeFromCart

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}

        </StoreContext.Provider>
    )
}

export default StoreContextProvider
