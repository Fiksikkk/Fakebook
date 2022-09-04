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
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
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
            <div className={s.settings}>
                <FontAwesomeIcon className={s.icon} icon={faLock} />
                <FontAwesomeIcon className={s.icon} icon={faCaretDown} />
            </div>
        </header>
    );
}

export default Header;