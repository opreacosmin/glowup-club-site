import React from 'react';
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';



function Post( {profilePic, image, username, timestamp, title, message }){


    return(
    <>
        <div className='post'>
            <div className='post_top'>
                <div className='timestamp'>
                    <h1>{timestamp}</h1>
                </div>
                <h2>{title}</h2>

                <div className='post_topInfo'>
                    <img src={profilePic} className='post_avatar' alt={''}/>
                    <p>{username}</p>
                </div>

            </div>


            <div className='post_bottom'>

                <p>{message}</p>

                <div className='post_image'>
                    <img src={image} alt=""/>
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

                    <div className='post_option'>
                        <ShareIcon/>
                        <p>Share</p>
                    </div>

                </div>
            </div>

        </div>


    </>
    );
}

export default Post