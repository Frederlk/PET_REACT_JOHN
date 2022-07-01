import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__menu menu">
                    <button type="button" className="menu__icon icon-menu">
                        <span></span>
                    </button>
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <NavLink to="/" className="menu__link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/works" className="menu__link">
                                    Works
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/blog" className="menu__link">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
