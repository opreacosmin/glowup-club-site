import React,{useState} from 'react';
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';
import {Link} from "react-router-dom";




function Post( {profilePic, image, username, timestamp, title, message }){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeShareMenu = () => setClick(false);

    return(
    <>
        <div className='post'>
            <div className='post_top'>
                <div className='post_topInfo'>
                    <img src={profilePic} className='post_avatar' alt={''}/>
                    <div className='user_info'>
                        <p className='username'>{username}</p>
                        <p className='timestamp'>20.03.3003</p>
                    </div>

                </div>

            </div>


            <div className='post_bottom'>
                <h2>{title}</h2>
                <p className='message'>{message}</p>

                <div className='post_image'>
                    <img src={image} alt=""/>
                </div>

                <div className='labels'>

                </div>

                <div className='post_options'>
                    <div className='post_option'>
                        <ThumbUpIcon/>
                        <p>Like</p>
                    </div>

                    <div className='post_option'>
                        <AddCommentIcon/>
                        <p>Comment</p>
                    </div>

                    <div className='post_option' onClick={handleClick}>
                            <ShareIcon/>
                            <p>Share</p>
                        {/*}
                        <ul className={click ? 'share-menu active': 'share-menu'}>
                            <li className='share-option'>
                                <a href="#" className='share-links' onClick={closeShareMenu}>
                                    Home
                                </a>
                            </li>

                            <li className='share-option'>
                                <a href="#" className='share-links' onClick={closeShareMenu}>
                                    About me
                                </a>
                            </li>

                            <li className='share-option'>
                                <a href="#" className='share-links' onClick={closeShareMenu}>
                                    Opportunities
                                </a>
                            </li>
                        </ul>
                        {*/}
                    </div>

                </div>
            </div>

        </div>


    </>
    );
}

export default Post