import s from "./Status.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPencil } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Status = (props) => {
    let newPostElement = React.createRef();

    let addNewPost = () => {
        // props.addPost();
        props.dispatch({ type: ''});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        props.updateNewPostText(text);
    }

    return (
        <div className={s.status}>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText} />
                </div>
                <button onClick={addNewPost}>
                    <FontAwesomeIcon className={s.icon} icon={faPencil} />
                    Add new post
                </button>
                <button>
                    <FontAwesomeIcon className={s.icon} icon={faCamera} />
                    Add new photo
                </button>
            </div>
        </div>
    );
}

export default Status;