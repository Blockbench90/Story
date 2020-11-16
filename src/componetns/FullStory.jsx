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
import { Divider, IconButton } from '@material-ui/core';
import format from 'date-fns/format'
import ruLang from 'date-fns/locale/ru'
import {Story} from "./Story";
import { useHomeStyles } from '../pages/Home';


export const FullStory = () => {
    const classes = useHomeStyles();
    const isLoading = true
    const storyData = true

    if (isLoading) {
        return (
            <div className={classes.storyCentred}>
                <CircularProgress />
            </div>
        );
    }

    if (storyData) {
        return (
            <>
                <Paper className={classes.fullStory}>
                    <div className={classNames(classes.storyHeaderUser)}>
                        <Avatar
                            className={classes.storyAvatar}
                            alt={`Аватарка пользователя`}
                            src='https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg'
                        />
                        <Typography>
                            <b>FullName</b>&nbsp;
                            <div>
                                <span className={classes.storyUserName}>@username</span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullStoryText} gutterBottom>
                        {storyData.text}
                    </Typography>
                    {/*<Typography>*/}
                    {/*    <span className={classes.storyUserName}>{format(new Date(storyData.createdAt), 'H:mm', { locale: ruLang })} · </span>*/}
                    {/*    <span className={classes.storyUserName}>{format(new Date(storyData.createdAt), 'dd MMM. yyyy г.', { locale: ruLang })}</span>*/}
                    {/*</Typography>*/}
                    <div className={classNames(classes.storyFooter, classes.fullStoryFooter)}>
                        <IconButton>
                            <CommentIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <RepostIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{ fontSize: 25 }} />
                        </IconButton>
                    </div>
                </Paper>
                <Divider />
                <Story
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullName: 'Arlene Andrews',
                        userName: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                    classes={classes}
                />
            </>
        );
    }

    return null;
};
