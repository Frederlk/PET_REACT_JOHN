import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { BlogItem } from "../../_components";

const RecentPosts = () => {
    const sortCategory = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    return (
        <section className="recent-posts">
            <div className="recent-posts__container">
                <div className="recent-posts__header">
                    <div className="recent-posts__title title-posts">Recent posts</div>
                    <Link to="/blog" className="recent-posts__view-all">
                        View all
                    </Link>
                </div>
                <div className="recent-posts__items">
                    {data.posts
                        .slice()
                        .sort((a, b) => {
                            return sortCategory(a.date, b.date);
                        })
                        .map((item, i) => {
                            if (i < 2) {
                                return <BlogItem key={i} data={item} />;
                            }
                        })}
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;
