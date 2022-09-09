import React from 'react';
import profile from "./header-icons/profile-pictures.png";
import s from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faEarth,
    faLock,
    faMagnifyingGlass,
    faMessage,
    faRightToBracket,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.search}>
                <div className={s.logo}>
                    <FontAwesomeIcon className={s.fa} icon={faFacebookSquare} size='2x' />
                </div>
                <div className={s.fbSearch}>
                    <input type="text" placeholder='Fakebook Search' />
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            <div className={s.profile}>
                <img src={profile} alt='хуйня с под коня' />
            </div>
            <div className={s.headerNavbar}>
                <a href='src/components/Header/Header#'>Home</a>
                <div>
                    <button className={s.notifications}>20+</button>
                </div>
                <FontAwesomeIcon className={s.icon} icon={faUserGroup} />
                <FontAwesomeIcon className={s.icon} icon={faMessage} />
                <FontAwesomeIcon className={s.icon} icon={faEarth} />
            </div>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login :
                <NavLink to={'/login'}>
                    <FontAwesomeIcon className={s.icon} icon={faRightToBracket} />
                </NavLink> }
            </div>
        </header>
    );
}

export default Header;