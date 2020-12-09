import React, {useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';

import {SideMenu} from "../../componetns/SideMenu";
import {useHomeStyles} from "./theme";
import RightSide from "./RightSide";
import Content from "./Content";
import {useDispatch, useSelector} from "react-redux";
import {fetchStories} from "../../store/reducers/storiesReducer";
import {useHistory} from 'react-router-dom'


const Home = () => {
    const history = useHistory()
    const {items, isLoaded} = useSelector(({stories}) => stories)
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const token = window.localStorage.token
    useEffect(()=> {
        if(!token) {
            history.push('/')
        } else {
            dispatch(fetchStories())
        }
    }, [token])
    // useEffect(()=>{
    //
    // }, [])
    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            {/*spacing - расстояние между блоками гридов*/}
            <Grid container spacing={2}>
                <Grid xs={18} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid xs={11} item>
                    <Content classes={classes} isLoading={isLoaded} items={items}/>
                </Grid>
                <Grid xs={1} item>
                    <RightSide classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Home
