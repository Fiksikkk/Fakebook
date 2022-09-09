import React from "react";
import s from './Users.module.css';
import userPhoto from "../../../assets/Images/defaultAvatar.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";



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
                            ? <button className={s.unFollowButton} onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5b229779-3858-452e-8d92-2884bfc2d6fc"
                                    }
                                })
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        } else {
                                            alert("Error: " + responce.data.messages);
                                        }
                                    });


                            }}>Unfollow</button>
                            : <button className={s.followButton} onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5b229779-3858-452e-8d92-2884bfc2d6fc"
                                    }
                                })
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.follow(u.id)
                                        } else {
                                            alert("Error: " + responce.data.messages);
                                        }
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