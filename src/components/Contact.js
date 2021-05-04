import React, { useState } from "react";


export const Contact = () => {
    const [data, setData] = useState({name: "", email: "", text: ""})
    const [err, setErr] = useState({1:false,2:false,3:false});
    const [success, setSuccess] = useState(false)
    
    //eslint-disable-next-line
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    const onNameChange= (e) => {
        if (e.target.value.length<3) {setErr(p=>({ ...p, 1:true}))
        } else {
            setData(p=>({...p, name:e.target.value}));
            setErr(p=>({ ...p, 1:false}))}}

    const onEmailChange= (e) => {
        if (!re.test(e.target.value)) {setErr(p=>({ ...p, 2:true}))
        } else {
            setData(p=>({...p, email:e.target.value}));
            setErr(p=>({ ...p, 2:false}))}}

    const onTextChange= (e) => {
        if (e.target.value.length<120) {setErr(p=>({...p, 3:true}))
        } else {
        setData(p=>({...p, text:e.target.value}));
        setErr(p=>({ ...p, 3:false}))}}
    const sendText = () =>{
        if (!err[1] | !err[2] | !err[3]) {
            setSuccess(true);
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact" , {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
          }
        
        });
        
    }}


    
    return (
        <section id='contact'>
            <div className='contact__text'>
                <h2>Skontaktuj się z nami</h2>
                <div className='decoration'></div>
                {success && (<p className="success">Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</p>)}
                <div className='contact__inputs'>
                    <div>
                        <p>Wpisz swoje imię</p>
                        <input type='text' className={err[1] ? 'input__err':'contact__input__name' } name='name' onBlur={onNameChange}></input>
                        {err[1] && <p className="err">Podane imię jest nieprawidłowe!</p>}
                    </div>
                    <div>
                        <p>Wpisz swój email</p>
                        <input type='text' className={err[2] ? 'input__err':'contact__input__email' } name='email' onBlur={onEmailChange}></input>
                        {err[2] && <p className="err">Podany email jest nieprawidłowy!</p>}
                    </div>
                </div>
                <p>Wpisz swoją wiadomość</p>
                <textarea className={err[3] ? 'textArea__err': undefined} name='comment' onBlur={onTextChange}></textarea>
                {err[3]===true && <p className="err">Wiadomość musi mieć conajmniej 120 znaków!</p>}
                <button type='input' value='send' onClick={(e)=>sendText}>Wyślij</button>
                
            </div>
            
        </section>
    )
    
}