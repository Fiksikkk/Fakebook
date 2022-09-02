import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../../redux/profileReducer";
import Status from "./Status";

const StatusContainer = (props) => {
    let state = props.store.getState();

    let addNewPost = () => props.store.dispatch(addPostActionCreater());

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    }

    return (<Status 
        updateNewPostTextActionCreater={onPostChange}
        addNewPost={addNewPost}
        data={state.profilePage}
         /> );
}

export default StatusContainer;