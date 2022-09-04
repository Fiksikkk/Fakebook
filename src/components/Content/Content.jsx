import { Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./Profile/Profile";
import MessagesContainer from "./Messages/MessagesContainer";
import s from './Content.module.css';
import UsersContainer from "./Users/UsersContainer";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/profile'}
                    element={<Profile />} />
                <Route path={'/messages/*'}
                    element={<MessagesContainer />} />
                <Route path={'/users'}
                    element={<UsersContainer />} />
            </Routes>
        </div>
    );
}

export default Content;