import s from "./Post.module.css";
import cat from "./Avatar/cat.jfif";
import React from "react";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={cat}/>
            <div className={s.description}>
                {props.description}
            </div>
            <div className={s.action}>
                <span>Likes: {props.likes}</span>
            </div>
        </div>

    );
}

export default Post;