import React, { useState } from 'react'
import {Tweetbox, Div, Avatar, Form, DivBox, File } from "./styles";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'; 
import GifIcon from '@material-ui/icons/Gif'; 
import {Button} from '@material-ui/core'; 
//import { db, storage } from "../../firebase"; 



export const TweetBox = () => {
    const [images, setImages] = useState('')

    return (
        <Tweetbox>
            <div className = "tweetBox"/>
            <Form>
                <div className = "tweetBox__input">
                    <Avatar src = "https://randomuser.me/api/portraits/men/54.jpg" /> 
                    <File type = "file" /> 
                    <input 
                    type = "text"
                    placeholder = "What's happening?" />
                </div>
            
                <Div>
                    <DivBox>
                    <File type= "file" primary /> 
                        <AddPhotoAlternateIcon /> 
                        <GifIcon /> 
                    </DivBox>
                    <File type= "file" /> 
                    <input
                            text= "text"
                            placeholder= "Optional: Enter image URL"
                            />

                            <Button>Tweet</Button>
                </Div>
               
            </Form>
        </Tweetbox>
    )
}

