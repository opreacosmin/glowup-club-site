import React, {useState} from 'react';
import "./Login.css"
import logo from "./Sakura.png"
import {Button} from "../../components/Buttons/Button";
import {auth, provider} from "../../firebase-config.js";
import {useStateValue} from "../../StateProvider";
import {actionTypes} from "../../reducer";
import GoogleIcon from '@mui/icons-material/Google';
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {Link, NavLink, useNavigate} from "react-router-dom";
import bck_img from '../../components/resources/pexels-ksenia-chernaya-7318110.jpg'
import NavBar from "../../components/NavBar/NavBar";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Login() {

    const[state, dispatch] = useStateValue();
    const[loginEmail, setLoginEmail] = useState('');
    const[loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    })


    const logIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            navigate('/')
        } catch (error){
            console.log(error.message);
            navigate('/login')
        }
    }



    const signIn = () => {
        try {
            auth.signInWithPopup(provider)
                .then(result => {

                    dispatch({
                            type: actionTypes.SET_USER,
                            user: result.user,
                        }
                    );
                    console.log(result.user);
                })
                .catch((error) => alert(error.message));
            navigate('/');

        } catch (error){
            console.log(error.message);
            navigate('/login')
        }


    }

    return (
        <>

            <div className='login'>
                <div className='welcome-container'>
                    <img src={bck_img}/>
                    <Link to='/' className='home-link'>
                        <ArrowBackIcon className={'home-icon'}/>
                    </Link>
                    <h1>Welcome Back!</h1>
                </div>
                <div className='login_container'>
                    <div className='header'>
                        <h2>Login</h2>
                        <p>Welcome back! Login back to your account</p>

                    </div>

                    <form>
                        <p>Username</p>
                        <input
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                            className='email_input' type='text'
                            placeholder={'email'}
                        />

                        <p>Password</p>
                        <input
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                            className='password_input' type="password"
                            placeholder={'password'}
                        />

                        <p> Forgot password?</p>

                        <Button type='submit'
                                onClick={logIn}
                                className='btns'
                                buttonStyle='btn--submit'
                                buttonSize='btn--small'>
                            Sign In
                        </Button>


                    </form>

                    <div className='login_options'>
                        <div className="option_item">
                            <Button type='btn'  onClick={signIn}>
                                    <GoogleIcon/> Log in with Google
                            </Button>
                        </div>
                        <div className="option_item_register">
                            <p>New here?</p>
                            <Link className='register_link' to="/Register">Create Account</Link>
                        </div>

                    </div>

                </div>

            </div>


        </>
    );
}

export default Login;