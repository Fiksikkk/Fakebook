import { Route, Routes } from "react-router-dom";
import React from "react";
import MessagesContainer from "./Messages/MessagesContainer";
import s from './Content.module.css';
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginPage from "./Login/Login";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/profile'}
                    element={<ProfileContainer />}>
                    <Route path=":userId" 
                    element={<ProfileContainer />} />
                </Route>
                <Route path={'/messages/*'}
                    element={<MessagesContainer />} />
                <Route path={'/users'}
                    element={<UsersContainer />} />
                <Route path={'/login'}
                    element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default Content;