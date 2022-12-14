import React from 'react';
import s from './Profile.module.css';
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import StatusContainer from './Status/StatusContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            {/* <ProfileNavbar /> */}
            <StatusContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;