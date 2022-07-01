import React from "react";
import { images } from "../../constants";

const Hello = () => {
    return (
        <section className="hello">
            <div className="hello__container">
                <div className="hello__content">
                    <h1 className="hello__title title">
                        Hi, I am John, <br />
                        Creative Technologist
                    </h1>
                    <div className="hello__text text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>
                    <button type="button" className="hello__btn btn">
                        Download Resume
                    </button>
                </div>
                <div className="hello__avatar-ibg">
                    <img src={images.homeImages.avatar} alt="Avatar" />
                </div>
            </div>
        </section>
    );
};

export default Hello;
