import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let data = store.getState().profilePage;
//                 return <MyPosts data={data} /> }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;