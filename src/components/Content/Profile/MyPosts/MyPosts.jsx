import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postItems = props.data.postsData
        .map(p => <Post description={p.description} likes={p.likesCount} key={p.id} />);

    return (
        <div className={s.postsContainer}>
            {postItems}
        </div>);
}

export default MyPosts;