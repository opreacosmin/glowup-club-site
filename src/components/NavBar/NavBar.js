import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Button}  from '../Buttons/Button';
import {Link, useNavigate, useMatch} from 'react-router-dom';
import menuicon from '../resources/menu-icon.png'
import searchicon from '../resources/search-icon.jpg'
import './navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CSSTransition } from 'react-transition-group';
import {useStateValue} from "../../StateProvider";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import {signOut} from 'firebase/auth'
import {auth} from "../../firebase-config";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

function NavBar(props) {


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


                        { !user ?
                            <div className='user_info'>
                                <AccountCircleIcon className='profile-icon' fontSize='large'  />
                                <Button type="button" buttonStyle='btn--outline' onClick={routeChange} >LOG IN</Button>
                            </div>

                            : (
                            <div className='user_info'>
                                <img className='profile-icon' src={user.photoURL} />
                                <Button type="button" buttonStyle='btn--outline' onClick={logout}>LOG OUT</Button>

                            </div>
                        )

                       }

                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <CloseIcon className='close'/> : <img src={menuicon} alt={"icon"}/>}
                        </div>


                        <div className={click ? 'nav-menu active': 'nav-menu'}>
                            <ul className='links-menu'>
                                <li>
                                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                        Home
                                    </Link>
                                </li>

                                <li className="has-dropdown">
                                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                        Opportunities
                                        <ArrowDropDownIcon className='arrow'/>
                                    </Link>
                                        <ul className='submenu'>
                                            <li className="has-dropdown">
                                                <Link to='/' className='links'>
                                                    Long Term Projects
                                                    <ArrowDropDownIcon className='arrow'/>
                                                </Link>
                                                <ul className='submenu'>
                                                    <li>
                                                        <Link to='/' className='links' onClick={closeMobileMenu}>
                                                            Europa
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' className='links' onClick={closeMobileMenu}>
                                                            Asia
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' className='links' onClick={closeMobileMenu}>
                                                            USA
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' className='links' onClick={closeMobileMenu}>
                                                            Australia
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' className='links' onClick={closeMobileMenu}>
                                                            Africa
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' className='links' onClick={closeMobileMenu}>
                                                            Romania
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Short Term Projects
                                            </Link>

                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Long Term Volunteering
                                            </Link>

                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Short Term Volunteering
                                            </Link>

                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Financial Support
                                            </Link>
                                        </ul>
                                </li>
                                <li className="has-dropdown">
                                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                        Get involved
                                            <ArrowDropDownIcon className='arrow'/>

                                    </Link>
                                        <ul className='submenu'>
                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Sponsor
                                            </Link>

                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Redirect 3.5%
                                            </Link>

                                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                                Donate
                                            </Link>
                                        </ul>
                                </li>
                                <li>
                                    <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            <NavItem icon={<ArrowDropDownIcon />}>
                                <DropdownMenu></DropdownMenu>
                            </NavItem>
                        </div>



                        <div className='searchbar'>
                            <div className='search-icon'>
                                <img src={searchicon} alt={"icon"}/>
                            </div>
                        </div>


                </nav>
            </>

        );
    }

export default NavBar;

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon="🦧"
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon="🦧"
                        goToMenu="animals">
                        Animals
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowDropDownIcon />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">HTML</DropdownItem>
                    <DropdownItem leftIcon="🦘">CSS</DropdownItem>
                    <DropdownItem leftIcon="🦘">JavaScript</DropdownItem>
                    <DropdownItem leftIcon="🦘">Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowDropDownIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

