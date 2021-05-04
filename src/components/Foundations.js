import React, { useState } from "react";
import { Display } from "./Display";

let pages = [];

export const Foundations = () => {
const [option,setOption] = useState(0);
const [page,setPage] = useState(0);

const foundations=[

    [
        [
            {
                id:1,
                name:"Fundacja “Dbam o Zdrowie”", 
                mission:"Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", 
                items:"ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            },
            {
                id:2,
                name:"Fundacja “Dla dzieci”", 
                mission:"Cel i misja: Pomoc dzieciom z ubogich rodzin.", 
                items:"ubrania, meble, zabawki"
            },
            {
                id:3,
                name:"Fundacja “Bez domu”", 
                mission:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", 
                items:"ubrania, jedzenie, ciepłe koce"
            }
        ],
        [
            {
                id:4,
                name:"Fundacja 4", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:5,
                name:"Fundacja 5", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:6,
                name:"Fundacja 6", 
                mission:"lorem", 
                items:"Egastas"
            }
        ],
        [
            {
                id:7,
                name:"Fundacja 7", 
                mission:"lorem", 
                items:"Egastas"
            }
        ]
    ], 
    
    [
        [
            {
                id:8,
                name:"Organizacja 1", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:9,
                name:"Organizacja 2", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:10,
                name:"Organizacja 3", 
                mission:"lorem", 
                items:"Egastas"
            }
        ],
        [
            {
                id:11,
                name:"Organizacja 4", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:12,
                name:"Organizacja 5", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:13,
                name:"Organizacja 6", 
                mission:"lorem", 
                items:"Egastas"
            }
        ]
    ], 
    
    [
        [
            {
                id:14,
                name:"Zbiórka 1", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:15,
                name:"Zbiórka 2", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:16,
                name:"Zbiórka 3", 
                mission:"lorem", 
                items:"Egastas"
            }
        ],
        [
            {
                id:17,
                name:"Zbiórka 4", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:18,
                name:"Zbiórka 5", 
                mission:"lorem", 
                items:"Egastas"
            },
            {
                id:19,
                name:"Zbiórka 6", 
                mission:"lorem", 
                items:"Egastas"
            }
        ],
        [
            {
                id:20,
                name:"Zbiórka 7", 
                mission:"lorem", 
                items:"Egastas"
            }
        ]
    ]
]
    

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
                {pages.map((item, index)=><button key={index} onClick={()=>setPage(item)}>{item+1}</button>)}
        </div>
            </div>
        </section>
    )
    
}