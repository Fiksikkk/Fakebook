import { Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./Profile/Profile";
import MessagesContainer from "./Messages/MessagesContainer";
import s from './Content.module.css';

const Content = (props) => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/profile'}
                    element={<Profile
                        store={props.store} 
                        data={props.state.profilePage}
                         /> } />
                <Route path={'/messages/*'}
                    element={<MessagesContainer 
                        store={props.store}
                         />} />
            </Routes>
        </div>
    );
}

export default Content;