import React from "react";
import s from './DialogsItem.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={DialogItem => DialogItem.isActive ? s.active:s.item}>
                <img src={props.avatar} />
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;