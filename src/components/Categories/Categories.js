import React from "react";
import './Categories.css'
import img1 from '../resources/categories/img2.png'
import img2 from '../resources/categories/img.jpg'
import img3 from '../resources/categories/pexels-mountain-pic.jpg'


function Categories(){
    return(
        <>
            <div className='categories'>
                <div className='categories-item'>
                    <img src={img1} alt={''}/>
                </div>
                <div className='categories-item'>
                    <img src={img2} alt={''}/>
                </div>
                <div className='categories-item'>
                    <img src={img3} alt={''}/>
                </div>
            </div>
        </>
    )
}

export default Categories;