import React, {useEffect} from 'react'
import {Button, Paper, Typography} from "@material-ui/core";
import {AddStoryForm} from "../../componetns/AddStoryForm";
import {Story} from "../../componetns/Story";
import CircularProgress from "@material-ui/core/CircularProgress";
import ModalMenu from "../../componetns/ModalMenu";
import BackButton from "../../utils/BackButton";
import {Route} from "react-router-dom";
import {FullStory} from "../../componetns/FullStory";
import {useDispatch, useSelector} from "react-redux";
import {fetchStory} from "../../store/reducers/storyReducer";


const Content = ({classes, isLoading, items}) => {
     return (
        <Paper className={classes.storyWrapper} variant="outlined">
            <Paper>
                <div className={classes.menuHeader}>
                    <div>
                        <Route path="/home:any">
                            <BackButton/>
                        </Route>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper variant="outlined" className={classes.storyHeader}>
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                        </Route>
                    </div>
                    <div className={classes.modalMenu}>
                        <Paper>
                            <ModalMenu/>
                        </Paper>
                    </div>
                </div>
            </Paper>

            <Route path={['/home', '/home/search']} exact>
                <Paper>
                    <div className={classes.addForm}>
                        <AddStoryForm classes={classes}/>
                    </div>
                    <div className={classes.addFormBottomLine}/>
                </Paper>
            </Route>

            <Route path="/home" exact>
                {isLoading
                    ? (<div className={classes.storyCentred}>
                        <CircularProgress/>
                    </div>)
                    : (items.map((obj) => (
                        <Story key={obj._id} classes={classes} {...obj}/>
                    )))}
            </Route>
            <Route path='/home/story/:id' component={FullStory} exact/>
        </Paper>
    )
}
export default Content