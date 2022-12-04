import React from "react";
import './Categories.css'
import img1 from '../resources/categories/img2.png'
import img2 from '../resources/categories/img.jpg'
import img3 from '../resources/categories/pexels-mountain-pic.jpg'
import {Link} from "react-router-dom";


function Categories(){
    return(
        <>
            <div className='categories'>
                <div className='row'>
                    <div className='column'>
                        <div className='categories-item'>
                            <img src={img2} alt={''}/>
                            <Link to='/About' className='link'>
                                About
                            </Link>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='categories-item'>
                            <img src={img3} alt={''}/>
                            <Link to='/About' className='link'>
                            About
                            </Link>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='categories-item'>
                            <img src={img1} alt={''}/>
                            <Link to='/About' className='link'>About
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Categories;