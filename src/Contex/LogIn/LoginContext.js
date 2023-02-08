// import React, { createContext, useState, useEffect } from "react";

// export const LoginContext = createContext();

// export const LoginProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storageData = localStorage.getItem("isLoggedIn");
//     if (storageData) {
//       setIsLoggedIn(JSON.parse(storageData));
//     }
//   }, [isLoggedIn]);

 
//   return (
//     <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
//       {props.children}
//     </LoginContext.Provider>
//   );
// };
