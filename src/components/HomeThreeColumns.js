import React, { useEffect, useState } from "react";
import firebase from "firebase";
import 'firebase/firebase-firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'


export const HomeThreeColumns = () => {
    const [counters, setCounters]=useState({bags:0, foundations:0, founds:0});
    
    const getCounters = () =>{
    const ref=firebase.firestore().collection("forms");
   
    
    ref.onSnapshot((querySnapshot)=>{
        const items = [];
        const bags = [];
        let counterBags=0;
        let counterFounds=0;
        querySnapshot.forEach(doc=>items.push(doc.data()))
        items.forEach(item=>item.bags && bags.push(parseFloat(item.bags)))
        
        counterBags=bags.reduce(((p,number)=>p+number),0);
        counterFounds=items.length;

        setCounters(p=>({...p, bags:counterBags, founds:counterFounds}))
        console.log(counterFounds)
    })
    }
    useEffect(()=>{getCounters()}, [])
    return (
        <section id='threeColumns'>
            <div className='threeColumns'>
                <div className='left__col'>
                    <h3>{counters.bags}</h3>
                    <h4>ODDANYCH WORKÓW</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>            
                </div>
                <div className='mid__col'>
                    <h3>{counters.founds}</h3>
                    <h4>WSPARTYCH ORGANIZACJI</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='right__col'>
                    <h3>{counters.founds}</h3>
                    <h4>ZORGANIZOWANY ZBIÓREK</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section> )
}