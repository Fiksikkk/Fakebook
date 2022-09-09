import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import defaultAvatar from '../../../../assets/Images/defaultAvatar.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            <div className={s.profileInfo}>
                <div className={s.avatarL}>
                    {props.profile.photos.large ? (
                    <img src={props.profile.photos.large} />) : (
                        <img src={defaultAvatar} />
                    )}
                </div>
                <div className={s.nameStatus}>
                    <h1>{props.profile.fullName}</h1>
                    <h3>{props.profile.aboutMe}</h3>
                    <div className={s.lookingForAJob}>
                        {props.profile.lookingForAJob ? ( <div>
                            <h2>
                                <FontAwesomeIcon className="fa-regular" icon={faCircleQuestion} />
                                Looking for a job
                            </h2>
                            <span className={s.lookingForAJobDescription}>
                                {props.profile.lookingForAJobDescription}
                            </span>
                        </div>) : (
                            <div>Not looking for a job</div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;