import React from "react";
import "./Footer.css";
import "../Buttons/Button"
import {Button} from "../Buttons/Button";
import instalogo from "../resources/logos/instagram-4-xl.png"
import tiktoklogo from "../resources/logos/tiktok-3-xl.png"
import youtubelogo from "../resources/logos/youtube-4-xl.png"
import linkedinlogo from "../resources/logos/linkedin-4-xl.png"
function Footer(){

    return (
        <>
            <div className="footer-container">
                <div className='waves'>
                    <div className='wave' id='wave1'/>
                    <div className='wave' id='wave2'/>
                </div>

                <ul className='socials'>

                    <p>Follow me on social media</p>
                    <li>
                        <a href="https://www.instagram.com/bianca_sis/">
                            <img src={instalogo} alt={"logo"}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@bianca__sis">
                            <img src={tiktoklogo} alt={"logo"}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bianca-ana-maria-oprea-05b43719a/">
                            <img src={linkedinlogo} alt={"logo"}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/biancaanamaria13">
                            <img src={youtubelogo} alt={"logo"}/>
                        </a>
                    </li>

                </ul>


                <div className='subscription-container'>
                    <p>Subscribe to the newsletter for notifications via email</p>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />

                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                    <p>You can unsubscribe anytime</p>

                </div>

            </div>



        </>
    );

}

export default Footer;
