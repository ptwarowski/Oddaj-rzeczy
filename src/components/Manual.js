import React, { useState } from "react";
import firebase from "firebase";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Manual = (user) => {
    const [change, setChange]=useState(false)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setChange(true)
        } else {
            setChange(false)
        }
      });
    
    
    return (
    <section id='manual'>
        <div className='manual'>
            <h2>Wystarczą 4 proste kroki</h2>
            <div className='decoration'></div>
            <div className='manual__columns'>
                <div className='manual__column'>
                    <div className='icon__1'></div>
                    <h6>Wybierz rzeczy</h6>
                    <div className="line"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='manual__column'>
                    <div className='icon__2'></div>
                    <h6>Spakuj je</h6>
                    <div className="line"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='manual__column'>
                    <div className='icon__3'></div>
                    <h6>Zdecyduj komu chcesz pomóc</h6>
                    <div className="line"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className='manual__column'>
                    <div className='icon__4'></div>
                    <h6>Zamów kuriera</h6>
                    <div className="line"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            
                {change && <Link to="/oddaj-rzeczy"><button className='manual__btn'>ODDAJ<br/>RZECZY</button></Link>}
                {!change && <Link to="/login"><button className='manual__btn'>ODDAJ<br/>RZECZY</button></Link>} 
            
        </div>
    </section> )
}