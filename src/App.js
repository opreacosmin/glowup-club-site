import './App.css';
import React, {useState} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Switch} from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import About from "./pages/About me/About.js"
import {useStateValue} from "./StateProvider";
import {} from 'firebase/auth';
import {auth} from './firebase-config';
import {onAuthStateChanged,signOut} from 'firebase/auth' ;
import Opportunities from "./pages/Oportunities/Opportunities";

function App() {


    //const [{user}, dispatch] = useStateValue();
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    })



  return (
      <>
          <Router>
                  <>
                      <div className='app'>
                          <Routes>
                              <Route path='/' element={<Home/>} />
                              <Route path="/Login" element={<Login/>} />
                              <Route path="/Register" element={<Register/>} />
                              <Route path="/Opportunities" element={<Opportunities/>} />
                              <Route path="/About" element={<About/>} />
                          </Routes>
                      </div>
                  </>

          </Router>
      </>
  )
}

export default App;
