import React from "react";
import data from "../constants/data";
import { BlogItem } from "../_components";
import Helmet from "react-helmet";

const BlogPage = () => {
    const sortCategory = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    return (
        <>
            <Helmet>
                <meta name="Blog" content="Blog" />
                <title>Blog</title>
            </Helmet>

            <div className="blog">
                <div className="blog__container">
                    <h2 className="blog__title title">Blog</h2>
                    <div className="blog__content">
                        <div className="blog__items">
                            {data.posts
                                .slice()
                                .sort((a, b) => {
                                    return sortCategory(a.date, b.date);
                                })
                                .map((item, i) => (
                                    <BlogItem key={i} data={item} blog />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
