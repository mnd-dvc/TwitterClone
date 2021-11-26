import React from 'react'
import { Post, Avatar, PostBody, PostDescription, Images, PostFooter } from "./styles"; 
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Publish from "@material-ui/icons/Publish";

export const Posts = () => {
    return (
        <Post>
            <div className ="post_avatar">
            <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" /> 
            </div>
            <PostBody>
                <div>
                    <div>
                        <h3>MEHMET NUR<span>
                            <VerifiedUserIcon className= "post_icon" /> 
                            @paulsawyer </span>  </h3>
                            <PostDescription>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum nem vitae 
                                    aspernatur magnam repellat commodi earum ipsam odit eius!</p>
                            </PostDescription>
                    </div>
                    <Images src ="https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif" /> 

                    <PostFooter>
                        <ChatBubbleOutlineIcon fontSize="small" /> 
                        <RepeatIcon fontSize="small" /> 
                        <FavoriteBorderIcon fontSize="small" /> 
                        <Publish fontSize="small" /> 
                    </PostFooter>

                </div>
            </PostBody>
        </Post>
    )
}
