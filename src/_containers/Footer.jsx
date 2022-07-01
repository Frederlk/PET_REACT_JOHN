import { format } from "date-fns";
import React from "react";
import { images } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social social">
                    <a href="https://www.facebook.com/petrinichshadow" rel="noreferrer" target="_blank" className="social__item">
                        <img src={images.icons.fb} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/_frederlk_/" rel="noreferrer" target="_blank" className="social__item">
                        <img src={images.icons.insta} alt="Instagram" />
                    </a>
                    <a href="https://vk.com/frederlk" rel="noreferrer" target="_blank" className="social__item">
                        <img src={images.icons.tweet} alt="Twitter" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sergey-petrinich-191454233/"
                        rel="noreferrer"
                        target="_blank"
                        className="social__item">
                        <img src={images.icons.linkedIn} alt="LinkedIn" />
                    </a>
                </div>
                <div className="footer__copy">Copyright ©{format(new Date(), "yyyy")} All rights reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
