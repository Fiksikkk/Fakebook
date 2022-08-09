import s from "./ProfileNavbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faEllipsis,
    faShare,
    faSignal,
    faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Profile = () => {
    return(
        <div className={s.profile}>
            <div className={s.profileButton}>
                <FontAwesomeIcon className={s.icon} icon={faThumbsUp} />
                Like
            </div>
            <div className={s.profileButton}>
                <FontAwesomeIcon className={s.icon} icon={faSignal} />
                Follow
            </div>
            <div className={s.profileButton}>
                <FontAwesomeIcon className={s.icon} icon={faShare} />
                Share
            </div>
            <div className={s.profileButton}>
                <FontAwesomeIcon className={s.icon} icon={faEllipsis} />
                More
                <FontAwesomeIcon className={s.icon} icon={faCaretDown} />
            </div>
            <div className={s.profileButton}>
                <FontAwesomeIcon className={s.icon} icon={faFacebookMessenger} />
                Message
            </div>
        </div>

    );
}
export default Profile;