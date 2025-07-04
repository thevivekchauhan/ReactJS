import React, { useState } from 'react'
import Imlogout from '../if-else/Logout'

const Logical = () => {
    
    const handleClick=()=>{
        alert("You logout bye...")
    }
    const [islogin,setIslogin] = useState(true)
  
    return (
      <div>
        <h1>Logical Operator</h1>
        <h2>You are login if you want to log out then click down button </h2>
        {islogin && (
          <button  style={{
          backgroundColor: "red",
          color: "white",
}}
            onClick={handleClick}
          >
            <Imlogout />
          </button>
        )}
      </div>
    );
}

export default Logical

