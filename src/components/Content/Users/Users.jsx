import React from "react";
import s from './Users.module.css';
import userPhoto from "../../../assets/Images/defaultAvatar.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.container}>
        <div className={s.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.left}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} />
                        </NavLink>
                    </div>
                    <div className={s.followButtonContainer}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.unFollowButton} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    } else {
                                        alert("Error: " + data.messages);
                                    }
                                    props.toggleFollowingProgress(false, u.id);

                                });


                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton} onClick={() => {

                                props.toggleFollowingProgress(true, u.id);

                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    } else {
                                        alert("Error: " + data.messages);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });


                            }} >Follow</button>}
                    </div>
                </div>
                <div className={s.right}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>)
        }

    </div>
}

export default Users;