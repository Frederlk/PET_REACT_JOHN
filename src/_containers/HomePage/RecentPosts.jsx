import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import RecentPostItem from "./RecentPostItem";

const RecentPosts = () => {
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
                    {data.posts.map((item, i) => {
                        if (i > 2) return;
                        return <RecentPostItem key={i} data={item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;
