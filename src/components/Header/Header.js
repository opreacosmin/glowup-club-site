
import image from "../resources/Sakura.png";
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header(){

    return (
        <div className='header-container'>
            <Link to='/'>
                <img src={image} alt={"Logo"}/>
            </Link>
            <ul className='header-socials'>
                <li>
                    <a href="https://www.instagram.com/bianca_sis/">
                        <InstagramIcon/>
                    </a>
                </li>
                <li className='tiktok'>
                    <a href="https://www.tiktok.com/@bianca__sis">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-tiktok" viewBox="0 0 16 16">
                            <path
                                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bianca-ana-maria-oprea-05b43719a/">
                        <LinkedInIcon/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/user/biancaanamaria13">
                        <YouTubeIcon/>
                    </a>
                </li>
            </ul>
        </div>

);

}
export default Header;
