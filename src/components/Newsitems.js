import React from 'react'

export default function Newsitems(props) {
    let { title, description, imageUrl, newsUrl, sourceName, publishedAt } = props;
    return (
        <>
            <div className="card h-100">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
                    <span className="badge bg-danger" style={{ left: "85%", zIndex: "1", borderRadius: "0px 0px 0px 10px" }}>
                        {sourceName}
                    </span>
                </div>
                <div className='news-img' style={{ backgroundColor: "#ced3e4" }}>
                    <img onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = process.env.PUBLIC_URL + "/emptyNewsImg.jpg";
                    }} src={!imageUrl ? process.env.PUBLIC_URL + "/emptyNewsImg.jpg" : imageUrl} className="card-img-top " alt="..." />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <small className="text-muted">Published on {new Date(publishedAt).toUTCString()}</small>
                    <p className="card-text">{description}
                    </p>
                    <a href={newsUrl} className="btn btn-sm btn-primary mt-auto">Read More</a>
                </div>
            </div>
        </>
    )
}
