import React, { useState } from "react";
import data from "../constants/data";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import parse from "html-react-parser";

const Article = () => {
    const { pathname } = useLocation();
    const [productData, setProductData] = useState(data.works.find((a) => a.link === pathname.slice(7, pathname.length)));

    return (
        <div className="article">
            <div className="article__container">
                <h2 className="article__title">{productData?.title}</h2>
                <div className="article__info">
                    <div className="article__year year">{productData?.date ? format(productData.date, "yyyy") : null}</div>
                    <div className="article__categories category">
                        {productData?.type.map((item, i) => (
                            <span key={i + item}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="article__body">{productData?.post ? parse(productData.post) : null}</div>
            </div>
        </div>
    );
};

export default Article;
