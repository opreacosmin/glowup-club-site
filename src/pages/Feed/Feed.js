import React, {useEffect, useState} from 'react';
import Sidebar from '../../components/SideBar/Sidebar'
import Post from "../FeedPost/Post.js"
import img from "../../components/resources/categories/pexels-mountain-pic.jpg";
import {getDocs, collection} from "firebase/firestore";
import db from "../../firebase-config";
import './Feed.css'

function Feed(){

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


    return (
        <>

            <div className='container'>
                <div className='sidebar-container'>
                    <Sidebar/>
                </div>

                <div className='feed-container'>
                    {
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
                    }

                    <Post profilePic={img}
                          image={img}
                          username={"Oprea Cosmin"}
                          timestamp={"20.03.2002"}
                          title={"project nr 1"}
                          message={"heello this is a project apply pls"}
                          />
                </div>

            </div>

        </>
    );
}

export default Feed;

