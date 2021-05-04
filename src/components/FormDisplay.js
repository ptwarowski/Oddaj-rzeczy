import React, { useState } from 'react';
import firebase from "firebase";
import 'firebase/firestore';
const db=firebase.firestore();

export const FormDisplay = () =>{
    //eslint-disable-next-line
    const [change, setChange]=useState(false)
    
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({user:'', items1:"", items2:"",items3:"",items4:"",items5:"", bags:0, location:'', for:'', org:'', city:'',street:'', postalCode:'', day:'', hour:'', text:''});
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setChange(true)
        } else {
            setChange(false)
        }
      }
    );
    let user = firebase.auth().currentUser;
    
    
    
    let val1=(!formData.bags | !formData.for | (!formData.items1 & !formData.items2 & !formData.items3 & !formData.items4 & !formData.items5));
    let val2=(!formData.street | !formData.city | !formData.postalCode | !formData.phoneNum |!formData.date | !formData.hour);

    const onNext = () => {
        page<6 && setPage(p=>p+1);
        setFormData(p=>({...p, user:user.email}))
    }
    const onPrev = () => {
        page>1 && setPage(p=>p-1)
    }
    const onConfirm = () => {
        
        (db.collection('forms').doc().set(formData));
   
           
          
        page<6 && setPage(p=>p+1)
    }
    
    return (
    <section id='form'>
        {page===1 && (
            <>
                <div className="form__msg">
                    <h1>Ważne!</h1>
                    <p>Uzupełnijszczegóły dotyczące Twoich rzeczy. Dzięki temubędziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
                <div className='form__display'>
                    <p>Krok {page}/4</p>
                    <h2>Zaznacz co chcesz przekazać.</h2>
                    <form className="form__1">
                        <label><input type='radio' className='regular__radio' value="ubrania nadające się do ponownego użycia," onClick={e=>setFormData(p=>({...p, items1:e.target.value}))}/>ubrania nadające się do ponownego użycia</label>
                        <label><input type='radio' className='regular__radio' value="ubrania do wyrzucenia," onClick={e=>setFormData(p=>({...p, items2:e.target.value}))}/>ubrania do wyrzucenia</label>
                        <label><input type='radio' className='regular__radio' value="zabawki," onClick={e=>setFormData(p=>({...p, items3:e.target.value}))}/>zabawki</label>
                        <label><input type='radio' className='regular__radio' value="książki," onClick={e=>setFormData(p=>({...p, items4:e.target.value}))}/>książki</label>
                        <label><input type='radio' className='regular__radio' value="inne," onClick={e=>setFormData(p=>({...p, items5:e.target.value}))}/>inne</label>
                       
                    </form> 
                    <div className="form__buttons">
                        <button onClick={onNext}>Dalej</button>
                    </div>
                </div>
            </>
            )
        }
        {page===2 && (
            <>
                <div className="form__msg">
                    <h1>Ważne!</h1>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki.</p>
                </div>
                <div className='form__display'>
                    <p>Krok {page}/4</p>
                    <h2>Podaj liczbę 60l worków, w które zapakowałeś/aś rzeczy:</h2>
                    <form className="form__2">
                            <p>Liczba 60l worków:</p>
                            <select onChange={e=>setFormData(p=>({...p, bags:e.target.value}))}>
                                <option value={0} defaultValue>-wybierz-</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        <div className="form__buttons">
                            <button onClick={onPrev}>Wstecz</button>
                            <button onClick={onNext}>Dalej</button>
                        </div>
                    </form>
                </div>
            </>
            )
        }
        {page===3 && (
            <>
                <div className="form__msg">
                    <h1>Ważne!</h1>
                    <p>Jeżeli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.możesz filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
                <div className='form__display'>
                    <p>Krok {page}/4</p>
                    <form className="form__3">
                        <h2>Lokalizacja</h2>
                        <select onChange={e=>setFormData(p=>({...p, location:e.target.value}))}>
                            <option value='wybierz'>-wybierz-</option>
                            <option value='Poznań'>Poznań</option>
                            <option value='Warszawa'>Warszawa</option>
                            <option value='Kraków'>Kraków</option>
                            <option value='Wrocław'>Wrocław</option>
                            <option value='Katowice'>Katowice</option>
                        </select>
                        <h3>Komu chcesz pomóc?</h3>    
                        <div className="form__for">
                            <button value='dzieciom' onClick={e=>{setFormData(p=>({...p, for:e.target.value})); e.preventDefault()}}>dzieciom</button> 
                            <button value='samotnym matkom' onClick={e=>{setFormData(p=>({...p, for:e.target.value})); e.preventDefault()}}>samotnym matkom</button>  
                            <button value='bezdomnym' onClick={e=>{setFormData(p=>({...p, for:e.target.value})); e.preventDefault()}}>bezdomnym</button>  
                            <button value='niepełnosprawnym' onClick={e=>{setFormData(p=>({...p, for:e.target.value})); e.preventDefault()}}>niepełnosprawnym</button>  
                            <button value='osobom starszym' onClick={e=>{setFormData(p=>({...p, for:e.target.value})); e.preventDefault()}}>osobom starszym</button>  
                        </div>
                        <h4>Napisz nazwę organizacji(opcjonalnie)</h4>
                        <input className='form__for__input'type="text" onClick={e=>setFormData(p=>({...p, org:e.target.value}))}/>
                        <div className="form__buttons">
                            <button onClick={onPrev}>Wstecz</button>
                            <button onClick={onNext}>Dalej</button>
                        </div>
                    
                        
                    </form>
                </div>
            </>
            )
        }
        {page===4 && (
            <>
                <div className="form__msg">
                    <h1>Ważne!</h1>
                    <p>Podaj adres i termin odbioru rzeczy</p>
                </div>
                <div className='form__display'>
                    <p>Krok {page}/4</p>
                    <h2>Podaj adres i termin odbioru rzeczy przez kuriera</h2>
                    <form className="form__4">
                        <div className='form__place'>
                            <h5>Adres odbioru:</h5>
                            <p>Ulica</p>
                            <input type="text" onBlur={e=>setFormData(p=>({...p, street:e.target.value}))}/>
                            <p>Miasto</p>
                            <input type="text" onBlur={e=>setFormData(p=>({...p, city:e.target.value}))}/>
                            <p>Kod pocztowy</p>
                            <input type="text" onBlur={e=>setFormData(p=>({...p, postalCode:e.target.value}))}/>                        
                            <p>Numer telefonu</p>
                            <input type="text" onBlur={e=>setFormData(p=>({...p, phoneNum:e.target.value}))}/>                       
                        </div>
                        <div className='form__time'>
                            <h5>Termin odbioru:</h5>
                            <p>Data</p>
                            <input type="date" onBlur={e=>setFormData(p=>({...p, day:e.target.value}))}/>
                            <p>Godzina</p>
                            <input type="time" min="09:00" max="18:00" required onBlur={e=>setFormData(p=>({...p, hour:e.target.value}))}/>
                            <p>Uwagi dla kuriera</p>
                            <textarea  onBlur={e=>setFormData(p=>({...p, text:e.target.value}))}/>                        
                        </div>
                        <div className="form__buttons">
                            <button onClick={onPrev}>Wstecz</button>
                            <button onClick={onNext}>Dalej</button>
                        </div>
                    </form>
                    
                </div>
            </>
            )
        }
        {page===5 && (
        <>
                
            <div className='form__display'>
                    
                <div className="form__5">
                    <h2>Podsumowanie Twojej darowizny</h2>
                    <h5>Oddajesz:</h5>
                    <div className="form__icons">
                        <div className='icon__1'></div>
                        <p className={val1 ? 'err': undefined}>
                            {formData.bags} worki, {formData.items1} {formData.items2} {formData.items3} {formData.items4} {formData.items5} {formData.for}
                        </p>
                    </div>
                    <div className="form__icons">
                        <div className='icon__4'></div>
                        <p className={val1 ? 'err': undefined}>dla lokalizacji: {formData.location}</p>
                    </div>
                    <div className='form__summary'>
                        <div className='address'>                                <h5>Adres odbioru:</h5>
                            <span className={!formData.street ? 'err': undefined}>Ulica</span>
                            <p>{formData.street}</p>
                            <span className={!formData.city ? 'err': undefined}>Miasto</span>
                            <p>{formData.city}</p>
                            <span className={!formData.postalCode ? 'err': undefined}>Kod pocztowy</span>
                            <p>{formData.postalCode}</p>
                            <span className={!formData.phoneNum ? 'err': undefined}>Numer telefonu</span>
                            <p>{formData.phoneNum}</p>
                        </div>
                        <div className='date'>
                            <h5>Termin odbioru:</h5>
                            <span className={!formData.day ? 'err': undefined}>Data</span>
                            <p>{formData.day}</p>
                            <span className={!formData.hour ? 'err': undefined}>Godzina</span>
                            <p>{formData.hour}</p>
                            <span>Uwagi dla kuriera</span>
                            <p >{formData.text}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="form__buttons">
                        <button onClick={onPrev}>Wstecz</button>
                        {(val1 & val2) ? <button className="disabled" disabled onClick={onConfirm}>Potwierdzam</button>:<button onClick={onConfirm}>Potwierdzam</button>}
                            
                        
                        
                </div> 
            </div>
        </>
        )
        }
        {page===6 && ( 
            <>
                <div className='form__display'>
                    <div className="form__6">
                    <h2>Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszystkie<br/>informacje o odbiorze</h2>
                    <div className="decoration"></div>
                    </div>
                </div>    
            </>
            )   
        }
    
    </section>
    )
}