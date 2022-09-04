import React from 'react';
import s from './Navbar.module.css';
import profilepictures from './Navbar-pictures/profile-pictures.jpeg'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.avatar}>
                <img src={profilepictures}/>
            </div>
            <div className={s.navButtonsContainer}>
                <div className={s.navButton}>
                    <NavLink to="/profile" className={navData => navData.isActive ? s.active:s.item}>Profile</NavLink>
                </div>
                <div className={s.navButton}>
                    <NavLink to='/messages' className={ navData => navData.isActive ? s.active:s.item}>Messages</NavLink>
                </div>
                <div className={s.navButton}>
                    <NavLink to='/users' className={ navData => navData.isActive ? s.active:s.item}>Users </NavLink>
                </div>
                <div className={s.navButton}>
                    <NavLink to='music' className={ navData => navData.isActive ? s.active:s.item}>Music</NavLink>
                </div>
                <div className={s.navButton}>
                    <NavLink to='settings' className={ navData => navData.isActive ? s.active:s.item}>Settings</NavLink>
                </div>
                <div>
                    <button className={s.navLowerButton}>
                        Create a page
                    </button>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;