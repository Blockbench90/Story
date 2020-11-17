import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import {Divider, IconButton} from '@material-ui/core';
import format from 'date-fns/format'
import ruLang from 'date-fns/locale/ru'
import {Story} from "./Story";
import {useHomeStyles} from "../pages/Home/theme";
import {useSelector} from "react-redux";


export const FullStory = () => {
    const classes = useHomeStyles();
    const {data, isLoaded} = useSelector(({story}) => story)
    console.log(data, isLoaded, 'story in fullStory')

    return (
        <div>
            {isLoaded ? (<div className={classes.storyCentred}>
                <CircularProgress/>
            </div>) : (data) ? (
                <Paper className={classes.fullStory}>
                    <div className={classNames(classes.storyHeaderUser)}>
                        <Avatar
                            className={classes.storyAvatar}
                            alt={`Аватарка пользователя`}
                            src={data.user.avatarUrl}
                        />
                        <Typography>
                            <b>{data.user.fullName}</b>&nbsp;
                            <div>
                                <span className={classes.storyUserName}>@{data.user.userName}</span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullStoryText} gutterBottom>
                        {data.text}
                    </Typography>
                    {/*<Typography>*/}
                    {/*    <span className={classes.storyUserName}>{format(new Date(data.createdAt), 'H:mm', { locale: ruLang })} · </span>*/}
                    {/*    <span className={classes.storyUserName}>{format(new Date(data.createdAt), 'dd MMM. yyyy г.', { locale: ruLang })}</span>*/}
                    {/*</Typography>*/}
                    <div className={classNames(classes.storyFooter, classes.fullStoryFooter)}>
                        <IconButton>
                            <CommentIcon style={{fontSize: 25}}/>
                        </IconButton>
                        <IconButton>
                            <RepostIcon style={{fontSize: 25}}/>
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{fontSize: 25}}/>
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{fontSize: 25}}/>
                        </IconButton>
                    </div>
                </Paper>
            ) : null}
        </div>
    );
}

