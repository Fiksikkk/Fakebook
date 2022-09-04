import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer 
});

let store = createStore(reducers);

window.store = store

export default store;