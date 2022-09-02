import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import StatusContainer from './Status/StatusContainer';


const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <ProfileNavbar/>
            <StatusContainer 
                    store={props.store}
            />
            <MyPosts data={props.data}/>
        </div>
    );
}

export default Profile;