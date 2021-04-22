import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import { Foundations } from "./Foundations";
import { Contact } from "./Contact";
import { Manual } from "./Manual";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { Footer } from "./Footer";
import firebase from "firebase";

export const MainHeader = (user) => {
    const [change, setChange]=useState(false)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setChange(true)
        } else {
            setChange(false)
        }
      });
    
    return (
    <>
    <div className="main__header">
    <h1>Zacznij pomagać!<br/>
        Oddaj niechciane rzeczy w zaufane ręce
    </h1>
    <div className="decoration"></div>
    <div className="header__btns">
    
    {change && <button><Link to="/oddaj-rzeczy">ODDAJ<br/>RZECZY</Link></button>}
    {!change && <button><Link to="/login">ODDAJ<br/>RZECZY</Link></button>}

    <button><Link to="/">ZORGANIZUJ<br/>ZBIÓRKĘ</Link></button>   
    </div>
    </div>
    <HomeThreeColumns/>
    <Manual/>
    <AboutUs/>
    <Foundations/>
    <Contact/>
    <Footer/>
    </>
    )
}