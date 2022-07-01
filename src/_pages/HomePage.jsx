import React from "react";
import { data } from "../constants";
import { FeaturedWorks, Hello, RecentPosts } from "../_containers";
import Helmet from "react-helmet";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="Home" content="Home" />
                <title>Home</title>
            </Helmet>

            <Hello />
            {data.posts.length ? <RecentPosts /> : null}
            {data.works.length ? <FeaturedWorks /> : null}
        </>
    );
};

export default HomePage;
