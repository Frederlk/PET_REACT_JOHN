import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const WorkItem = ({ data }) => {
    const { title, link, date, img, type, previewText } = data;

    return (
        <article className="works__item">
            <Link to={`/works/${link}`} className="works__image-ibg">
                <img src={img} alt={title} />
            </Link>
            <div className="works__body">
                <Link to={`/works/${link}`} className="works__title work-title">
                    {title}
                </Link>
                <div className="works__info">
                    <div className="works__year year">{format(date, "yyyy")}</div>
                    <div className="works__category category">
                        {type.map((item, i) => (
                            <span key={i + item}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="works__text text">
                    {previewText.length > 182 ? previewText.substring(0, 182) + "..." : previewText}
                </div>
            </div>
        </article>
    );
};

export default WorkItem;
