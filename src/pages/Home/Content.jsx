import React from 'react'
import {Paper, Typography} from "@material-ui/core";
import {AddStoryForm} from "../../componetns/AddStoryForm";
import {Story} from "../../componetns/Story";
import CircularProgress from "@material-ui/core/CircularProgress";

const Content = ({classes, isLoading, items}) => {
    return (
        <Paper className={classes.storyWrapper} variant="outlined">
            <Paper variant="outlined" className={classes.storyHeader}>
                <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
                <div className={classes.addForm}>
                    <AddStoryForm classes={classes}/>

                    {
                        items.map((obj) => (
                            <Story key={obj._id} classes={classes}
                            text={obj.text} user={obj.user}/>
                        ))
                    }
                </div>
                <div className={classes.addFormBottomLine}/>
            </Paper>
            {isLoading ? (<div className={classes.storyCentred}>
                <CircularProgress />
            </div>) : ('')}
        </Paper>
    )
}
export default Content