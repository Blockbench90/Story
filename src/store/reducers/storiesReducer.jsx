import {StoriesApi} from "../../restApi/storiesApi";
import produce from "immer";

const initialState = {
    items: [],
    isLoaded: true
}

const storiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STORIES':
            return produce(state, draft => {
                draft.items = action.payload
                draft.isLoaded = false
            })
        case 'ADD_NEW_STORY':
            return produce(state, draft => {
                draft.items.push(action.payload)
            })
        default:
            return state;
    }
}
export default storiesReducer

const setStories = (stories) => ({type: 'SET_STORIES', payload: stories})
export const fetchStories = () => (dispatch) => {
    StoriesApi.getStories().then((data) => dispatch(setStories(data.data)))
}
const newStory = (newStory) => ({type: 'ADD_NEW_STORY', payload: newStory})
export const addNewStory = (text) => (dispatch) => {
    const data = {
        _id: Math.random().toString(36).substr(2),
        text: text,
        user: {
            fullname: 'TEST',
            username: "TEST",
            avatarUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcms-assets.tutsplus.com%2Fuploads%2Fusers%2F34%2Fposts%2F27871%2Fpreview_image%2Fjson.jpg&imgrefurl=https%3A%2F%2Fcode.tutsplus.com%2Fru%2Ftutorials%2Ffake-rest-api-up-and-running-using-json-server--cms-27871&tbnid=B_4qzkD3z8ejAM&vet=12ahUKEwjIqbG2ypHtAhXWxyoKHd_MAnwQMygBegUIARCVAQ..i&docid=3b_jvvIhbjOjEM&w=400&h=277&q=json%20server&ved=2ahUKEwjIqbG2ypHtAhXWxyoKHd_MAnwQMygBegUIARCVAQ'
        }
    }
    StoriesApi.addStory(data).then((story) => dispatch(newStory(story)))
}
