import React from "react";
import {Api} from "../../restApi/Api";
import produce from "immer";

const initialState = {
    data: [],
    isLoaded: true
}

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STORY': {
            return produce(state, draft => {
                draft.data = action.payload
                draft.isLoaded = action.isLoaded
            })
        }
        default:
            return state
    }
}
export default storyReducer
export const setStory = (story, isLoaded) => ({type: 'SET_STORY', payload: story, isLoaded: false})
export const fetchStoryData = (_id) => (dispatch) => {
    Api.getStory(_id).then((data) => dispatch(setStory(data)))
}
