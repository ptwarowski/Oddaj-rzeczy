import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase';

let password;
let email;

export const SignUp = () => {

const [err, setErr] = useState({1:false,2:false,3:false,4:false});

//eslint-disable-next-line
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const [data, setData] = useState({email:'', password:''});



const checkSignup = (user) => {
    if (!err[1] | !err[2]) {
        setErr(p=>({...p, 4:false}))   
        password = data.password;
        email = data.email;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        // ...
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErr(p=>({...p, 4:true}))
        console.log(errorCode, errorMessage)
        }); 
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""))
    }
    
}

const onEmailChange= (e) => {
    if (!re.test(e.target.value)) {setErr(p=>({ ...p, 1:true}))
    } else {
        setErr(p=>({ ...p, 1:false})); setData(p => ({...p, email:e.target.value}))}

}
const onPassChange= (e) => {
    if (e.target.value.length<6) {
        setErr(p=>({ ...p, 2:true}))
    } else {
        setErr(p=>({ ...p, 2:false}));
        setData(p => ({...p, password:e.target.value}));
    }
}

const onPassCheckChange= (e) => {
    (e.target.value===data.password) ? setErr(p=>({ ...p, 3:false})) : setErr(p=>({ ...p, 3:true}))
}
  

return (
        <section id="signup__Page">
            <div className="signup__Box">
                <h1>Załóż konto</h1>
                <div className="decoration"></div>
                <div className="inner__Box">
                    <p>Email</p>
                    <input className={err[1] ? 'input__err': undefined} type="text" name='email' onBlur={onEmailChange}></input>
                    {err[1] && <p className="err">Podany email jest nieprawidłowy!</p>}

                    <p>Hasło</p>
                    <input className={err[2] ? 'input__err': undefined} type="password" name='password' onBlur={onPassChange}></input>
                    {err[2] && <p className="err">Podane hasło jest za krótkie!</p>}

                    <p>Powtórz hasło</p>
                    <input className={err[3] ? 'input__err': undefined} type="password" name='password2' onBlur={onPassCheckChange}></input>
                    {err[3] && <p className="err">Hasła nie są takie same!</p>}

                </div>
                {err[4] && <p className="err">Podany email jest już używany.</p>}
                <div className="loginBox__btns">
                    
                    <button ><Link to='/login'>Zaloguj się</Link></button>
                    <button onClick={()=>checkSignup}>Załóż konto</button>
                </div>
            </div>
        </section>
    )
}
