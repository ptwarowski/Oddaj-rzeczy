import React, { useState, useRef } from 'react';
import {  Link } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll'
import { useOnClickOutside } from './Hook';


export const Nav = () =>{ 
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    return (
    <>
        <div className="ham" onClick = {()=>open ? setOpen(false): setOpen(true)}>
            <div className = {open ? "open1": undefined}/>
            <div className = {open ? "open2": undefined}/>
            <div className = {open ? "open3": undefined}/>
        </div>
        <ul className = {!open ? "nav": "nav__Mobile"} ref={node}>
            
            <li><Link to="/">Start</Link></li>
            
            
            <li><LinkScroll to="manual" smooth={true} duration={500}>O co chodzi?</LinkScroll></li>
            
            
            <li><LinkScroll to="aboutUs" smooth={true} duration={500}>O nas</LinkScroll></li>
            
            
            <li><LinkScroll to="foundations" smooth={true} duration={500}>Fundacje i organizacje</LinkScroll></li>
            
            
            <li><LinkScroll to="contact" smooth={true} duration={500}>Kontakt</LinkScroll></li>
            
        
        </ul>
           
        
    
    </>
    )
} 