import React, {useState} from 'react';
import "./Login.css"
import logo from "./Sakura.png"
import {Button} from "../../Buttons/Button";
import {auth, provider} from "../../../firebase-config.js";
import {useStateValue} from "../../../StateProvider";
import {actionTypes} from "../../../reducer";
import GoogleIcon from '@mui/icons-material/Google';
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {Link, NavLink, useNavigate} from "react-router-dom";
import bck_img from '../../resources/pexels-office.jpg'

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
                <div className='login_container'>

                    <div className='login-logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <form>
                        <input
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                            className='email_input' type='text'
                            placeholder={'email'}
                        />

                        <input
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                            className='password_input' type="password"
                            placeholder={'password'}
                        />

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
                            <p>Dont't have an account?</p>
                        </div>

                        <div className="option_item">
                            <NavLink to="/Register">Register here</NavLink>
                        </div>

                        <div className="option_item">
                            <p>Or login with </p>
                        </div>

                        <div className="option_item">
                            <Button type='btn' onClick={signIn}>
                                <div className="option_item">
                                    <GoogleIcon/>
                                </div>
                            </Button>
                        </div>

                    </div>

                </div>

            </div>


        </>
    );
}

export default Login;