import React from "react";
import { Link } from "react-router-dom";

export const LogOut = () => { 
    
    return (
        <section id="logOut__Page">
            <div className="logOut__Box">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <div className="decoration"></div>
                <div className="loginBox__btns">
                    <button><Link to='/'>Strona główna</Link></button>   
                </div>
            </div>
        </section>
    )
}