import React, { useState, useEffect } from 'react';
import {Button}  from './Button';
import { Link } from 'react-router-dom';
import menuicon from './resources/menu-icon.png'
import searchicon from './resources/search-icon.png'
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


        return (
            <>
                <nav className='navbar'>
                    <div className='nav-container'>
                        <div className='menu-icon' onClick={handleClick}>
                            <img src={menuicon} alt={"icon"}/>
                        </div>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About me
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Opportunities
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Travel tips
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Fun
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Shop
                            </Link>
                        </li>

                        <div className='search-icon'>
                            <img src={searchicon} alt={"icon"}/>
                        </div>
                    </div>
                </nav>
            </>

        );
    }

export default Navbar;
