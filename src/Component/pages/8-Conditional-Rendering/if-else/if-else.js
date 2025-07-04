import React, { useState } from "react";
import Imlogin from "./Login";
import Imlogout from "./Logout";

const Main = () => {
  const [islogin, Setislogin] = useState(false);

  const handleLogin = () => {
    alert("You login the screen! please wait!");
  };

  const handleLogout = () => {
    alert("Please wait! Logout!");
  };

  if (islogin) {
    return (
        <center>
      <div>
        <h1>Welcome</h1>
        <button style={{
          backgroundColor: "red",}} onClick={handleLogin}>
          <Imlogin />
        </button>
      </div>
      </center>
    );
  } else {
    return (
        <center>
      <div>
        <h1>Hi, Guest</h1>
        <button style={{
          backgroundColor: "red",}} onClick={handleLogout}>
          <Imlogout />
        </button>
      </div>
      </center>
    );
  }
};

export default Main;

