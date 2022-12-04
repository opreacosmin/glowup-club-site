import React from 'react';
import './About.css'
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


function About(){

    return(
        <div className='about-container'>
            <Header/>
            <NavBar/>

            <Footer/>
        </div>
    )
}


export default About
