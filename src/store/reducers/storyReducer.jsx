import {StoriesApi} from "../../restApi/storiesApi";
import produce from "immer";
const SET_STORY = ';LKJ;LKJ;LKJ'
const initialState = {
    data: [],
    isLoaded: true
}
//для манипуляций над определенной историей, к примеру редактированию
const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STORY: {
            return produce(state, draft => {
                draft.data = action.payload
                draft.isLoaded = false
            })
        }

        default:
            return state
    }
}
export default storyReducer
export const fetchStory = (story) => ({type: SET_STORY, payload: story})
//получить конкретную историю по id
export const fetchStoryData = (_id) => (dispatch) => {
    StoriesApi.getStory(_id).then((res) => dispatch(fetchStory(res.data.data)))
}
