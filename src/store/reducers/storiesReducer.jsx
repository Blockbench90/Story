import {Api} from "../../restApi/Api";

const initialState = {
    items: [],
    isLoaded: true
}

const storiesReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_STORIES':
            return {
                ...state,
                items: action.payload,
                isLoaded: false
            }
        default:
            return state;
    }
}
export default storiesReducer

const setStories = (stories) => ({type: 'SET_STORIES', payload: stories})
export const fetchStories = () => (dispatch) => {
    debugger
    Api.getStories().then((data) => dispatch(setStories(data)))
}