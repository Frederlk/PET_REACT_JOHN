import React from "react";

const Article = () => {
    return (
        <div class="article">
            <div class="article__container _container">
                <div class="article__title">Designing Dashboards with usability in mind</div>
                <div class="article__info">
                    <div class="article__year year">2020</div>
                    <a href="" class="article__categories category">
                        Dashboard, User Experience Design
                    </a>
                </div>
                <div class="article__body">
                    <div class="article__text text">
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <img src="img/article/article01.jpg" alt="" />
                    <div class="article__subtitle">Heading 1</div>
                    <div class="article__subtitle article__subtitle_sm">Heading 2</div>
                    <div class="article__text text">
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
