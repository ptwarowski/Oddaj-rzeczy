import React, { useState } from "react";
import { HomeHeader } from "./HomeHeader";
import firebase from '../components/Firebase/firebase';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Form } from "./Form";
import { SignUp } from "./SignUp";
import { LogOut } from "./LogOut";
import { LoginPage } from "./LoginPage";
import { MainHeader } from "./MainHeader";


const auth=firebase.auth();
const firestore=firebase.firestore();




export const Home = () =>{ 
    
    const [user] = useAuthState(auth);
    
    
    return (
    <>  
    <Router>
        {HomeHeader(user,  auth)}
        <Switch>
        <Route path="/" exact><MainHeader/></Route>
        <Route path="/login"><LoginPage/></Route>
        <Route path="/createAcc"><SignUp/></Route>  
        <Route path='/oddaj-rzeczy'><Form/></Route>
        <Route path="/wylogowano"><LogOut/></Route> 
        <Route path="*"><h1 style={{width: "100%",textAlign: "center"}}>Nie znaleziono strony.</h1></Route>
        </Switch>
        
    </Router>
    </>
)}