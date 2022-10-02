import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Button}  from '../Buttons/Button';
import {Link, useNavigate, useMatch} from 'react-router-dom';
import menuicon from '../resources/menu-icon.png'
import searchicon from '../resources/search-icon.jpg'
import './navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CSSTransition } from 'react-transition-group';
import {useStateValue} from "../../StateProvider";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import {signOut} from 'firebase/auth'
import {auth} from "../../firebase-config";

function NavBar() {


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 970) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const [{user}, dispatch] = useStateValue();

    const logout = async () => {
        await signOut(auth);
    }

    const routeChange = () =>{
        let path = `/Login`;
        navigate(path);
    }

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/Login', {replace: true}), [navigate]);



    return (
            <>
                <nav className='navbar'>
                    <div className='nav-container'>
                        { !user ?
                            <div className='profile-icon'>
                                <AccountCircleIcon fontSize='large'  />
                                <Button type="button" buttonStyle='btn--outline' onClick={routeChange} >LOG IN</Button>
                            </div>

                            : (
                            <div className='profile-icon'>
                                <img src={user.photoURL} />
                                <Button type="button" buttonStyle='btn--outline' onClick={logout}>LOG OUT</Button>

                            </div>
                        )

                       }


                        <div className='menu-icon' onClick={handleClick}>
                            <img src={menuicon} alt={"icon"}/>
                        </div>

                        <ul className={click ? 'nav-menu active': 'nav-menu'}>
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
                                <Link to='/Opportunities' className='nav-links' onClick={closeMobileMenu}>
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
                        </ul>



                        <div className='searchbar'>

                            <div className='search-icon'>

                                <img src={searchicon} alt={"icon"}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </>

        );
    }

export default NavBar;
