import React from "react";

const HomePage = () => {
    return (
        <>
            <section class="hello">
                <div class="hello__container _container">
                    <div class="hello__content">
                        <h1 class="hello__title title">
                            Hi, I am John, <br />
                            Creative Technologist
                        </h1>
                        <div class="hello__text text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                        <a href="#" class="hello__btn btn">
                            Download Resume
                        </a>
                    </div>
                    <img class="hello__avatar" src="img/home/avatar.jpg" alt="" />
                </div>
            </section>
            <section class="recent-posts">
                <div class="recent-posts__container _container">
                    <div class="recent-posts__header">
                        <div class="recent-posts__title title-posts">Recent posts</div>
                        <a href="#" class="recent-posts__view-all">
                            View all
                        </a>
                    </div>
                    <div class="recent-posts__items">
                        <div class="recent-posts__column">
                            <article class="recent-posts__item recent-post">
                                <a href="#" class="recent-post__title">
                                    Making a design system from scratch
                                </a>
                                <div class="recent-post__info">
                                    12 Feb 2020 <span>|</span> Design, Pattern
                                </div>
                                <div class="recent-post__text text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </article>
                        </div>
                        <div class="recent-posts__column">
                            <article class="recent-posts__item recent-post">
                                <a href="#" class="recent-post__title">
                                    Creating pixel perfect icons in Figma
                                </a>
                                <div class="recent-post__info">
                                    12 Feb 2020 <span>|</span> Figma, Icon Design
                                </div>
                                <div class="recent-post__text text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section class="featured-works">
                <div class="featured-works__container _container">
                    <div class="featured-works__title title-posts">Featured works</div>
                    <div class="featured-works__items works ">
                        <article class="works__item">
                            <a href="#" class="works__image _ibg">
                                <img src="img/home/works01.jpg" alt="" />
                            </a>
                            <div class="works__body">
                                <a href="" class="works__title work-title">
                                    Designing Dashboards
                                </a>
                                <div class="works__info">
                                    <div class="works__year year">2020</div>
                                    <a href="#" class="works__category category">
                                        Dashboard
                                    </a>
                                </div>
                                <div class="works__text text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </div>
                        </article>
                        <article class="works__item">
                            <a href="#" class="works__image _ibg">
                                <img src="img/home/works02.jpg" alt="" />
                            </a>
                            <div class="works__body">
                                <a href="" class="works__title work-title">
                                    Vibrant Portraits of 2020
                                </a>
                                <div class="works__info">
                                    <div class="works__year year">2018</div>
                                    <a href="#" class="works__category category">
                                        Illustration
                                    </a>
                                </div>
                                <div class="works__text text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </div>
                        </article>
                        <article class="works__item">
                            <a href="#" class="works__image _ibg">
                                <img src="img/home/works03.jpg" alt="" />
                            </a>
                            <div class="works__body">
                                <a href="" class="works__title work-title">
                                    36 Days of Malayalam type
                                </a>
                                <div class="works__info">
                                    <div class="works__year year">2018</div>
                                    <a href="#" class="works__category category">
                                        Typography
                                    </a>
                                </div>
                                <div class="works__text text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
