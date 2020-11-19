import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { IconButton} from '@material-ui/core';
import {useHomeStyles} from "../pages/Home/theme";
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {fetchStoryData, setStory} from "../store/reducers/storyReducer";


//компонент для отображения полной истории после нажатия на превью в странице Home
export const FullStory = () => {
    const classes = useHomeStyles();
    const dispatch = useDispatch()
    const {data} = useSelector(({story}) => story)
    console.log(data, 'data')
    const {isLoaded} = useSelector(({story}) => story)
    console.log(isLoaded, 'isLoaded')

    const params = useParams()
    const id = params.id
    console.log(id, 'PARAMS')
    useEffect (() => {
        if(id) {
            dispatch(fetchStoryData(id))
        }
        return () => {
            setStory(undefined)
        }
    }, [dispatch, id])
    //если идет загрузка, покажи прелоадер
    if(isLoaded){
        return <div className={classes.storyCentred}>
            <CircularProgress/>
        </div>
    }
    //если прилители данные, флаг isLoaded установится в false, и будем показывать компонент полной "истории"
    if(data){
        return  <Paper className={classes.fullStory}>
            <div className={classNames(classes.storyHeaderUser)}>
                <Avatar
                    className={classes.storyAvatar}
                    alt={`Аватарка пользователя${data._id}`}
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
    }
    return null
}

