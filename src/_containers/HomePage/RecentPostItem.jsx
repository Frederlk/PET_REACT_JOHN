import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const RecentPostItem = ({ data }) => {
    const { title, link, date, tags, previewText } = data;

    return (
        <article className="recent-posts__item recent-post">
            <Link to={`/blog/${link}`} className="recent-post__title">
                {title}
            </Link>
            <div className="recent-post__info">
                {format(date, "dd LLL yyyy")} <div className="divide">|</div>
                {tags.map((item, i) => (
                    <span key={i + item}>{item}</span>
                ))}
            </div>
            <div className="recent-post__text text">
                {previewText.length > 182 ? previewText.substring(0, 182) + "..." : previewText}
            </div>
        </article>
    );
};

export default RecentPostItem;
