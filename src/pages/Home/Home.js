import React, {useEffect, useState} from 'react';
import Slider from '../../components/Slider/Slider';
import Sidebar from '../../components/SideBar/Sidebar'
import "./Home.css"
import Post from "../FeedPost/Post.js"
import Feed from '../Feed/Feed'
import {Button} from "../../components/Buttons/Button";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import db from "../../firebase-config";
import ScrollButton from "../../components/Buttons/ScrollButton";
import {getDocs, collection} from "firebase/firestore";
import img from "../../components/resources/categories/pexels-mountain-pic.jpg"
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";
import CuratorWidget from "../../components/CuratorWidget";


function Home() {

            /*
            db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            */

    /*
    const Demo = props => (
        <ScriptTag type="text/javascript">
            (function(){
            var i,e,d=document,s="script";
            i=d.createElement("script");
            i.async=1;
            i.charset="UTF-8";
            i.src="https://cdn.curator.io/published/43b3c850-7bea-4ee1-9760-d1fe715c6fbd.js";
            e=d.getElementsByTagName(s)[0];
            e.parentNode.insertBefore(i, e);
        })();
        </ScriptTag>
    )
*/
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/path/to/resource.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <>
            <div className='home'>
                <Header/>
                <NavBar/>
                <Slider/>
                <div className='delimtator-bar'>
                    <h2>START HERE</h2>
                    <h3>START HERE</h3>
                </div>
                <Categories/>
                <div className='delimtator-bar'>
                    <h2>NEW TIKTOKS</h2>
                    <h3>NEW TIKTOKS</h3>
                </div>

                <div id="curator-feed-default-feed-layout">
                    <CuratorWidget feedId="43b3c850-7bea-4ee1-9760-d1fe715c6fbd"/>
                    </div>

                <div className='counter'>
                </div>

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

            </div>


            <div className='scroll-button'>
                <ScrollButton/>
            </div>

            <Footer/>

        </>
    );
}

export default Home;