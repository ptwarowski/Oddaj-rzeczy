import React from "react";
import { Nav } from "./Nav"
import { Login } from "./Login"



export const HomeHeader = (user, auth) =>{
   
   return (
    <>
    
    <header id="header">
     
      <div className="header__menu">   
         <div className="header__menu__btns">
            {Login(user, auth)}
            <Nav/>
         </div>
      </div>
    </header> 
      
      
    
    
    </>
   )
}