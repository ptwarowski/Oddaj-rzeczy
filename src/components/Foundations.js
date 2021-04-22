import React, { useState } from "react";
import { Display } from "./Display";

let pages = [];

export const Foundations = () => {
const [option,setOption] = useState(0);
const [page,setPage] = useState(0);

const foundations=[

    [[["Fundacja “Dbam o Zdrowie”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"],["Fundacja “Dla dzieci”", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "ubrania, meble, zabawki"],["Fundacja “Bez domu”", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", "ubrania, jedzenie, ciepłe koce"]],[["Fundacja 4", "lorem", "Egastas"],["Fundacja 5", "lorem", "Egastas"],["Fundacja 6", "lorem", "Egastas"]],[["Fundacja 7", "lorem", "Egastas"]]], 
    
    [[["Organizacja 1", "lorem", "Egastas"],["Organizacja 2", "lorem", "Egastas"],["Organizacja 3", "lorem", "Egastas"]],[["Organizacja 4", "lorem", "Egastas"],["Organizacja 5", "lorem", "Egastas"],["Organizacja 6", "lorem", "Egastas"]]], 
    
    [[["Zbiórka 1", "lorem", "Egastas"],["Zbiórka 2", "lorem", "Egastas"],["Zbiórka 3", "lorem", "Egastas"]],[["Zbiórka 4", "lorem", "Egastas"],["Zbiórka 5", "lorem", "Egastas"],["Zbiórka 6", "lorem", "Egastas"]],[["Zbiórka 7", "lorem", "Egastas"]]]]
    

pages = [];
    for (let i=0; i<foundations[option].length; i++) {
    pages=[...pages, i]
    }



return (
        <section id="foundations">
            <h1>Komu Pomagamy?</h1>
            <div className="decoration"></div>
            <div className="selection">
                <button className="option fundations__btn" onClick={()=>{setOption(0); setPage(0)}}>Fundacjom</button>
                <button className="option ngo__btn" onClick={()=>{setOption(1); setPage(0)}}>Organizacjom<br/>Pozarządowym</button>
                <button className="option local__btn" onClick={()=>{setOption(2); setPage(0)}}>Lokalnym<br/>zbiórkom</button>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className='selection__display'>
                {Display(option, page, foundations)}
                <div className='page__index'>
                {pages.map((item)=><button key={item} onClick={()=>setPage(item)}>{item+1}</button>)}
        </div>
            </div>
        </section>
    )
    
}