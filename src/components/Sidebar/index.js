import React from 'react'
import {Contenador} from './styles'
import TwitterIcon from '@material-ui/icons/Twitter'; 
import { IconOption } from "./IconOption";
import HomeIcon from '@material-ui/icons/Home'; 
import SearchIcon from '@material-ui/icons/Search'; 
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'; 
import MailOutlineIcon from '@material-ui/icons/MailOutline'; 
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'; 
import ListAltIcon from '@material-ui/icons/ListAlt'; 
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
import {Button} from "@material-ui/core"; 

export const Sidebar = () => {
    return (
        <Contenador>
            <TwitterIcon className= "twitter-logo" />

            <IconOption active Icon= {HomeIcon} text= "Home" /> 
            <IconOption Icon= {SearchIcon} text= "Search" /> 
            <IconOption Icon= {NotificationsNoneIcon} text= "Notifications" />
            <IconOption Icon= {MailOutlineIcon} text= "Messages" />
            <IconOption primary Icon= {BookmarkBorderIcon} text= "Bookmarks" />
            <IconOption primary Icon= {ListAltIcon} text= "Lists" />
            <IconOption primary Icon= {PermIdentityIcon} text= "Profile" />
            <IconOption primary Icon= {MoreHorizIcon} text= "More" />

            {/* IconOption */} 
            {/* IconOption */} 
            {/* IconOption */} 

        <Button variant= "outlined" fullWidth >Tweet</Button>
        </Contenador>
    )
}
