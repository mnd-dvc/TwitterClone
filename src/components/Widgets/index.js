import React from 'react'
import SearchIcon from '@material-ui/icons/Search'; 
import {Widget, Header, DivIcon, DivContent} from "./styled"
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'; 


export const Widgets = () => {
    return (
        <Widget>
           <Header>
               <DivIcon>
                   <SearchIcon className="SearchIcon" />
                   <input placeholder="Search on Twitter" />
                </DivIcon>
           </Header> 
           <DivContent>
               <h2>What's happening?</h2>

               <TwitterTweetEmbed 
               tweetId={'1453020463647576066'}
               />

                <TwitterTweetEmbed 
               tweetId={'1334777895970017283'}
               />

               <TwitterTimelineEmbed 
               sourceType="profile"
               screenName="ikbaliyaver"
               options= {{height: 400}}
               />
               <TwitterShareButton 
               url= {'https://www.linkedin.com/in/mndvc/'}
               options= {{ text: '#reactjs is awesome', via: 'ikbaliyaver'}}
               />
           </DivContent>
        </Widget>
    )
}
