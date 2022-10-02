import React, {useEffect, useState} from 'react';
import Slider from '../../Slider/Slider';
import Sidebar from '../../SideBar/Sidebar'
import "./Home.css"
import Post from "../FeedPost/Post.js"
import {Button} from "../../Buttons/Button";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import db from "../../../firebase-config";
import ScrollButton from "../../Buttons/ScrollButton";
import {getDocs, collection} from "firebase/firestore";
import img from "../../resources/categories/pexels-mountain-pic.jpg"
import Header from "../../Header/Header";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Categories from "../../Categories/Categories";


function Home() {

    const [posts, setPosts] = useState([]);
    const postsCollection = collection(db, 'posts');

    useEffect(() => {

        const getPosts = async () => {
            const data = await getDocs(postsCollection);
            setPosts(data.docs.map((doc) => ({
                ...doc.data(), id:doc.id})
            ))

        };
        getPosts();

        });

            /*
            db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            */



    return (
        <>
            <div className='home'>
                <Header/>
                <NavBar/>
                <Slider/>
                <Categories/>
                <Sidebar/>


                {/*}
                    posts.map((post) => (
                        <Post
                            profilePic={post.profilePic}
                            image={post.image}
                            username={post.username}
                            timestamp={post.username}
                            title={post.title}
                            message={post.message}
                        />
                    ))
                {*/}


                <Post
                    profilePic={img}
                    image={img}
                    username={'oprea cosmin'}
                    timestamp={'20-03-2002'}
                    title={'This is a title'}
                    message={"helllllllllo"}
                    />

                <Post
                    profilePic={img}
                    image={img}
                    username={'oprea bianca'}
                    timestamp={'13-08-1999'}
                    title={'This is a title'}
                    message={"helllllllllo"}
                />


            </div>


            <div className='scroll-button'>
                <ScrollButton/>
            </div>

            <Footer/>

        </>
    );
}

export default Home;