import React, {useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';

import {SideMenu} from "../../componetns/SideMenu";
import {useHomeStyles} from "./theme";
import RightSide from "./RightSide";
import Content from "./Content";
import {useDispatch, useSelector} from "react-redux";
import {fetchStories} from "../../store/reducers/storiesReducer";


const Home = () => {
    const {items, isLoaded} = useSelector(({stories}) => stories)
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    useEffect(()=>{
        dispatch(fetchStories())
    }, [])
    console.log("Home render")
    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            {/*spacing - расстояние между блоками гридов*/}
            <Grid container spacing={2}>
                <Grid sm={2} md={2} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={7} md={7} item>
                    <Content classes={classes} isLoading={isLoaded} items={items}/>
                </Grid>
                <Grid sm={2} md={2} item>
                    <RightSide classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Home
