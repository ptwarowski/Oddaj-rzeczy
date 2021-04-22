import React, { useState }from "react";
import { Link, useHistory} from "react-router-dom";
import firebase from 'firebase';

export const LoginPage =(user, auth) => {

const history = useHistory();

const [err, setErr] = useState({1:false,2:false,3:false});

const [data, setData] = useState({email:'', password:''});

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const checkLogin =(user, auth) => {
    if (!err[1] | !err[2]) {
    
    let email=data.email;
    let password=data.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    var user = userCredential.user;
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setErr(p=>({...p, 3:true}));
    });
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          history.push("/")
        }
      });
  
}
    
}
const onEmailChange= (e) => {
    if (!re.test(e.target.value)) {setErr(p=>({ ...p, 1:true}))
    } else {
        setErr(p=>({ ...p, 1:false, 3:false}));
        setData(p=>({...p, email:e.target.value}))
    }
}   
const onPassChange= (e) => {
    if (e.target.value.length<6) {
        setErr(p=>({ ...p, 2:true}))
    } else {
        setErr(p=>({ ...p, 2:false, 3:false}));
        setData(p=>({...p, password:e.target.value}));
    }
}  
    


    return (
        <section id="login__Page">
            <div className="login__Box">
                <h1>Zaloguj się</h1>
                <div className="decoration"></div>
                <div className="inner__Box">
                    <form><p>Email</p>
                        <input className={err[1] ? 'input__err': undefined} type="text" name='email' onBlur={onEmailChange}></input>
                        {err[1] && <p className="err">Podany email jest nieprawidłowy!</p>}

                        <p>Hasło</p>
                        <input className={err[2] ? 'input__err': undefined} type="password" name='password' onBlur={onPassChange}></input>
                        {err[2] && <p className="err">Podane hasło jest za krótkie!</p>}
                    </form>
                        {err[3]&&<p className="err">Nastąpił błąd, sprawdź login lub hasło</p>}
                </div>
                <div className="loginBox__btns">
                    <button><Link to='/createAcc'>Załóż konto</Link></button>
                    <button onClick={()=>checkLogin(user, auth)}>Zaloguj się</button>
                </div>
            </div>
        </section>
    )
}