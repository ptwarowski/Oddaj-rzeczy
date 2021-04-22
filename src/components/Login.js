import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
export const Login = (user, auth) => {
    
    const onSignOut =()=> auth.signOut();
    
    return (
        <div className='login__btns'>
            {user && <p>Witaj {firebase.auth().currentUser.email}!</p>}
            {!user && <button className='login__Btn'><Link to="/login">Zaloguj</Link></button>}
            {user && <button className='rise__Btn' ><Link to="/oddaj-rzeczy">Oddaj rzeczy</Link></button>}
            {user && <button className='logout__Btn' onClick={()=>onSignOut()}><Link to="/wylogowano">Wyloguj</Link></button>}
            {!user && <button className='create__Acc__Btn'><Link to="/createAcc">Załóż konto</Link></button>}
        </div>
    ) 
    
}