import React, {useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';

import {SideMenu} from "../../componetns/SideMenu";
import {useHomeStyles} from "./theme";
import RightSide from "./RightSide";
import Content from "./Content";
import {Api} from "../../restApi/Api";
import {useSelector} from "react-redux";
import {fetchStories} from "../../store/reducers/storiesReducer";


const Index = () => {
    const {items, isLoaded} = useSelector(({stories}) => stories)
    const classes = useHomeStyles()
    useEffect(()=>{
        fetchStories()
    }, [])
    console.log(items, isLoaded)
    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            {/*spacing - расстояние между блоками гридов*/}
            <Grid container spacing={2}>
                <Grid sm={2} md={2} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={8} item>
                    <Content classes={classes} isLoading={isLoaded} items={items}/>
                </Grid>
                <Grid sm={2} md={2} item>
                    <RightSide classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Index
