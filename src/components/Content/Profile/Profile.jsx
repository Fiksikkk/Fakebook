import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";
import Status from "./Status/Status";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <ProfileNavbar/>
            <Status addPost={props.addPost}
                    newPostText={props.data.newPostText}
                    updateNewPostText={props.updateNewPostText}/>
            <MyPosts data={props.data}/>
        </div>
    );
}

export default Profile;