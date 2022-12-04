import React from "react";
import './Opportunities.css'
import PostSender from "../PostSender/PostSender";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Feed from "../Feed/Feed";
import {Link} from 'react-router-dom';
import {Button} from "../../components/Buttons/Button";


function Opportunities(){
    return(
        <>
            <div className='main_container'>
                <NavBar/>
                <div className='redirect'>
                    <h1>For moderators</h1>
                    <Link to='/' className='link_wrapper'>
                        <Button buttonStyle='btn--outline'>
                        Create new post
                        </Button>
                    </Link>
                </div>
                <PostSender/>
                <Feed/>
                <Footer/>
            </div>

        </>

    )
}
export default Opportunities