import React from "react";
import {Api} from "../../restApi/Api";

const initialState = {
    data: {},
    isLoaded: false
}

const storyReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_STORY': {
            return {
                ...state,
                data: action.payload,
                isLoaded: true
            }
        }
        default:
            return state
    }
}
export default storyReducer
const setStory = (story) => ({type: 'SET_STORY', payload: story})
export const fetchStory = (_id) => (dispatch) => {
    Api.getStory(_id).then((data) => dispatch(setStory(data.data)))
}
