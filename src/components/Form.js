import React from "react";
import { FormDisplay } from "./FormDisplay"
import { Contact } from "./Contact";
import { Footer } from "./Footer"

export const Form = () => {
    return (
    <>
    <section id="form__main">
     <div className="form__header">
        <h1>Oddaj rzeczy, których już nie chcesz<br/>
        POTRZEBUJĄCYM
        </h1>
        <div className="decoration"></div>
        <h2>Wystarczą 4 proste kroki:</h2>
        <div className="steps">
        <div>
            <span>1</span>
            <p>Wybierz rzeczy</p>
        </div>
        <div>
            <span>2</span>
            <p>Spakuj je w worki</p>
        </div>
        <div>
            <span>3</span>
            <p>Wybierz fundację</p>
        </div>
        <div>
            <span>4</span>
            <p>Zamów kuriera</p>
        </div>
        </div>
     </div>
    </section>   
    <FormDisplay/>
    <Contact/>
    <Footer/>
    
    </>
        )
}