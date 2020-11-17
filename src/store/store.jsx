import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import storiesReducer from "./reducers/storiesReducer";
import storyReducer from "./reducers/storyReducer";

const rootReducer = combineReducers({
    stories: storiesReducer,
    story: storyReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
