import React, {useState} from "react";
import './PostSender.css'
import CollectionsIcon from '@mui/icons-material/Collections';
import {colors} from "@mui/material";
import {Button} from "../../Buttons/Button";
import {useStateValue} from "../../../StateProvider";
import db from "../../../firebase-config";
import firebase from 'firebase/compat/app';
import img from "../../resources/categories/img.jpg"
import {addDoc, collection} from 'firebase/firestore';


function PostSender(){

    const [input, setInput] = useState("");
    const [title, setTitle] = useState("");

    const postsCollection = collection(db, 'posts');

    const handleSubmit = async (e) => {

        e.preventDefault();
        await addDoc(postsCollection, {
            title:title,
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: img,
        });

        /*
        db.collection("posts").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: img,
        });

         */

        setInput("");
        setTitle("");
    };

    const [{user}, dispatch] = useStateValue();

    return(
        <>
            <div className='postSender'>
                <div className='postSender_top'>
                    { !user ?
                        <form>
                            <input
                                className='postSender_input' type='text'
                                placeholder='Please log in to create new post'
                            />
                            <input
                                className='postSender_input' type='text'
                                placeholder='Please log in to create new post'
                            />

                            <Button
                                type="submit"
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--small'
                            > Log In
                            </Button>
                        </form>

                        : (
                            <form>
                                <input value={title}
                                       onChange={ (e) => {
                                           setTitle(e.target.value);} }
                                       className='postSender_input' type='text'
                                       placeholder={'Title'}
                                />

                                <input value={input}
                                       onChange={(e) => {
                                           setInput(e.target.value); } }
                                       className='postSender_input' type="text"
                                       placeholder={`Post your project !`}
                                />

                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--small'
                                >
                                    Post
                                </Button>

                            </form>


                        )
                    }
                </div>

                <div className='postSender_bottom'>
                    <div className='postSender_option'>
                        <CollectionsIcon style={{ color:"whitesmoke" }} />
                        <h1> Photo/Video</h1>
                     </div>
                </div>

            </div>
        </>
    );
}

export default PostSender

{/*}
{ !user ?
    <form>
        <input
            className='postSender_input' type='text'
            placeholder='Please log in to create new post'
        />
        <input
            className='postSender_input' type='text'
            placeholder='Please log in to create new post'
        />
        <Button
            type="submit"
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--small'
        > LogIn
        </Button>
    </form>

    : (
        <form>
            <input value={title}
                   onChange={ (e) => {
                       setTitle(e.target.value);} }
                   className='postSender_input' type='text'
                   placeholder={'Post title here'}
            />

            <input value={input}
                   onChange={(e) => {
                       setInput(e.target.value); } }
                   className='postSender_input' type="text"
                   placeholder={`Post your project !`}
            />

            <Button
                onClick={handleSubmit}
                type="submit"
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--small'
            >
                Post
            </Button>

        </form>


    )
}
{*/}