import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ data, blog }) => {
    const { title, link, date, tags, previewText } = data;

    return (
        <article className={blog ? "blog__item" : "recent-posts__item recent-post"}>
            <Link to={`/blog/${link}`} className={blog ? "blog__subtitle work-title work-title_m" : "recent-post__title"}>
                {title}
            </Link>
            <div className={blog ? "blog__info" : "recent-post__info"}>
                {format(date, "dd LLL yyyy")} <div className="divide">|</div>
                {tags.map((item, i) => (
                    <span key={i + item}>{item}</span>
                ))}
            </div>
            <div className={blog ? "blog__text text" : "recent-post__text text"}>
                {previewText.length > 182 ? previewText.substring(0, 182) + "..." : previewText}
            </div>
        </article>
    );
};

export default BlogItem;
