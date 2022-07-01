import React, { useState } from "react";
import data from "../constants/data";
import { useLocation } from "react-router-dom";

const Article = () => {
    const { pathname } = useLocation();
    const [productData, setProductData] = useState(data.works.find((a) => a.link === pathname.slice(7, pathname.length)));
    console.log(productData);
    return (
        <div className="article">
            <div className="article__container">
                <div className="article__title">Designing Dashboards with usability in mind</div>
                <div className="article__info">
                    <div className="article__year year">2020</div>
                    <a href="" className="article__categories category">
                        Dashboard, User Experience Design
                    </a>
                </div>
                <div className="article__body">
                    <div className="article__text text">
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <img src="img/article/article01.jpg" alt="" />
                    <div className="article__subtitle">Heading 1</div>
                    <div className="article__subtitle article__subtitle_sm">Heading 2</div>
                    <div className="article__text text">
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <img src="img/article/article02.jpg" alt="" />
                    <img src="img/article/article03.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Article;
