import React from "react";
import data from "../constants/data";
import { BlogItem } from "../_components";
import Helmet from "react-helmet";

const BlogPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Blog" content="Blog" />
                <title>Blog</title>
            </Helmet>

            <div className="blog">
                <div className="blog__container">
                    <h1 className="blog__title title">Blog</h1>
                    <div className="blog__content">
                        <div className="blog__items">
                            {data.posts.map((item, i) => (
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
