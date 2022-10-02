import './Slider.css'
import video from "../resources/Pexels Videos 1390942.mp4"
import {Button} from "../Buttons/Button";
import React from 'react';


function Slider()
{
    return(
        <div className='slider-container'>
                <video src={video} autoPlay loop muted  />
            <p>ADVENTURE AWAITS</p>
                <div className='slider-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        CITESTE MAI MULT
                    </Button>

                </div>





        </div>
    )
}


export default Slider