import React, { useState } from 'react'
import Imlogin from "../if-else/Login"
import Imlogout from "../if-else/Logout"

const Main = () => {
  
  const [login,setLogin] = useState(false);

  const handleLogin = ()=>{
    alert("you login")
  }

  const handleLogout = ()=>{
    alert("you logout")
  }

  const style = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  };

  return (
    <center>
      <div>
        <h1>Hello... Welcome to React</h1>
        {login ? (
          <button
            style={style}
            onClick={handleLogin}
          >
            <Imlogin />
          </button>
        ) : (
          <button
            style={style}
            onClick={handleLogout}
          >
            <Imlogout />
          </button>
        )}
      </div>
    </center>
  );
}

export default Main;