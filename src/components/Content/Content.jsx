import { Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import s from './Content.module.css';

const Content = (props) => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/profile'}
                    element={<Profile 
                        data={props.state.profilePage}
                        dispatch={props.dispatch} /> } />
                <Route path={'/messages/*'}
                    element={<Messages 
                        data={props.state.messagesPage}
                        dispatch={props.dispatch} />} />
            </Routes>
        </div>
    );
}

export default Content;