import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div class="header__menu menu">
                    <div class="menu__icon icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav class="menu__body">
                        <ul class="menu__list">
                            <li>
                                <a href="" class="menu__link @@if(link==1){_active}">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="" class="menu__link @@if(link==2){_active}">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="" class="menu__link @@if(link==3){_active}">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
