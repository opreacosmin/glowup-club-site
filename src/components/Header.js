
import image from "./resources/Sakura.png";
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header(){

    return (
        <div className='header-container'>
            <Link to='/'>
                <img src={image} alt={"Logo"}/>
            </Link>
        </div>

);

}
export default Header;
