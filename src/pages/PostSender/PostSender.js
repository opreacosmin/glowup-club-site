import React, {useState} from "react";
import './PostSender.css'
import CollectionsIcon from '@mui/icons-material/Collections';
import {Button} from "../../components/Buttons/Button";
import {useStateValue} from "../../StateProvider";
import db from "../../firebase-config";
import firebase from 'firebase/compat/app';
import img from "../../components/resources/categories/pexels-mountain-pic.jpg"
import {addDoc, collection} from 'firebase/firestore';
import {useNavigate} from "react-router-dom";


function PostSender(){

    const [input, setInput] = useState("");
    const [title, setTitle] = useState("");

    const postsCollection = collection(db, 'posts');

    const handleSubmit = async (e) => {

        e.preventDefault();
        await addDoc(postsCollection, {
            title: title,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: img,
        })
        setInput("");
        setTitle("");
    };

        /*
        db.collection("posts").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: img,
        });

         */

    const [{user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const routeChange = () =>{
        let path = `/Login`;
        navigate(path);
    }

    return(
        <>

            <div className='postSender'>
                <div className='postSender_top'>
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
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--small'
                                onClick={routeChange}
                            > Log In
                            </Button>
                        </form>

                        : (
                            {*/}
                    <form onSubmit={handleSubmit}>
                        <p>Insert post title</p>
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