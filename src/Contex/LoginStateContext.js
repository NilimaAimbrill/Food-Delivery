import React, { useEffect, useState, createContext } from 'react'
import LoginContext from './CreateLoginContext'

function LoginStateContext(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect((data) => {
  //   const storedData = localStorage.getItem("UserData");
  //   const parsedData = JSON.parse(storedData);
  //   parsedData.find((object) => {
  //     console.log(object.Email)
  //     if (data.Email === object.Email && data.Password === object.Password) {
  //       setIsLoggedIn(true)
  //       alert("Sign in successful!");
  //   } else {
  //       alert("Wrong email or password");
  //       setIsLoggedIn(false)
  //   }
      
  //   })
  // })
  
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </LoginContext.Provider>
  )
}
export default LoginStateContext