import React from "react";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/RateReview";
import RepostIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SheareIcon from "@material-ui/icons/OpenInBrowserOutlined";
import Paper from "@material-ui/core/Paper";
import Ava from '../assets/som_logo.jpg'
import CircularProgress from "@material-ui/core/CircularProgress";


export const Story = ({_id, text, user, classes, createdAt}) => {
    console.log("Props in Story", {_id, text, user})
    return (user
            ? (
                <a className={classes.storyWrapper} href={`/home/story/${_id}`}>
                    <Paper variant="outlined" className={classNames(classes.story, classes.storyHeader)}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <Avatar className={classes.storyAvatar} alt={`Аватарка пользователя`}
                                        // прикрутить user.avatarUrl
                                        src={Ava}/>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography><b>{user.fullname}</b>&nbsp;
                                    <span className={classes.storyUserName}>@{user.username}</span>&nbsp;
                                    <span className={classes.storyUserName}>.</span>&nbsp;
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {text}
                                </Typography>
                                <div className={classes.storyFooter}>
                                    <div>
                                        <IconButton color='primary'>
                                            <CommentIcon style={{fontSize: 20}}/>
                                        </IconButton>
                                        <span>1</span>
                                    </div>
                                    <div>
                                        <IconButton color='primary'>
                                            <RepostIcon style={{fontSize: 20}}/>
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton color='primary'>
                                            <LikeIcon style={{fontSize: 20}}/>
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton color='primary'>
                                            <SheareIcon style={{fontSize: 20}}/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </a>
            )
            : (<div className={classes.storyCentred}>
                <CircularProgress/>
            </div>)
    )
}

