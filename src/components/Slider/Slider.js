import './Slider.css'
import video from "../resources/Pexels Videos 1390942.mp4"
import {Button} from "../Buttons/Button";
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Slider()
{
    const navigate = useNavigate();

    const routeChange = () =>{
        let path = `/About`;
        navigate(path);
    }

    return(
        <div className='slider-container'>
                <video src={video} autoPlay loop muted  />
            <p>ADVENTURE AWAITS</p>
                <div className='slider-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={routeChange}
                    >
                        CITESTE MAI MULT
                    </Button>

                </div>





        </div>
    )
}


export default Slider