import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../../redux/profileReducer";
// import StoreContext from "../../../../StoreContext";
import Status from "./Status";
import { connect } from "react-redux";

// const StatusContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addNewPost = () => store.dispatch(addPostActionCreater());

//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreater(text);
//                         store.dispatch(action);
//                     }

//                     return <Status
//                         updateNewPostTextActionCreater={onPostChange}
//                         addNewPost={addNewPost}
//                         data={state.profilePage}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>);
// }

let mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextActionCreater: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        },
        addNewPost: () => dispatch(addPostActionCreater())
    }
}

const StatusContainer = connect(mapStateToProps, mapDispatchToProps)(Status);

export default StatusContainer;