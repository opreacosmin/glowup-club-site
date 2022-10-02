import React, {useState} from 'react';
import "./Register.css"
import {Button} from "../../Buttons/Button";
import {auth, provider} from "../../../firebase-config.js";
import {useStateValue} from "../../../StateProvider";
import {actionTypes} from "../../../reducer";
import GoogleIcon from '@mui/icons-material/Google';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import logo from "../Login/Sakura.png";


function Register() {

    const[registerEmail, setRegisterEmail] = useState('');
    const[registerPassword, setRegisterPassword] = useState('');
    const navigate = useNavigate();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            navigate('/login')
        } catch (error){
            console.log(error.message);
        }
    };

    return (
        <>
            <div className='register'>

                <div className='register-logo'>
                    <img src={logo} alt=""/>
                </div>

                <form>
                    <input
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        className='email_input' type='text'
                        placeholder={'email'}
                    />

                    <input
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                        className='password_input' type="password"
                        placeholder={'password'}
                    />

                    <Button type='submit'
                            onClick={register}
                            className='btns'
                            buttonStyle='btn--submit'
                            buttonSize='btn--small'>
                        Sign In
                    </Button>


                </form>

            </div>

        </>
    );

}

export default Register;