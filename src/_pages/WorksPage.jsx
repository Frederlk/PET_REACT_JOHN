import React from "react";
import { data } from "../constants";
import { WorkItem } from "../_components";
import Helmet from "react-helmet";

const WorksPage = () => {
    const sortCategory = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    return (
        <>
            <Helmet>
                <meta name="Works" content="Works" />
                <title>Works</title>
            </Helmet>

            <section className="page-works">
                <div className="page-works__container">
                    <h2 className="page-works__title title">Work</h2>
                    <div className="page-works__items works">
                        {data.works
                            .slice()
                            .sort((a, b) => {
                                return sortCategory(a.date, b.date);
                            })
                            .map((item, i) => (
                                <WorkItem key={i} data={item} />
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorksPage;
