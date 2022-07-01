import React from "react";
import { data } from "../../constants";
import { WorkItem } from "../../_components";

const FeaturedWorks = () => {
    return (
        <section className="featured-works">
            <div className="featured-works__container">
                <h2 className="featured-works__title title-posts">Featured works</h2>
                <div className="featured-works__items works">
                    {data.works.map((item, i) => {
                        if (i > 2) return;
                        return <WorkItem key={i} data={item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorks;
