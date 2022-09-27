import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import Newsitems from './Newsitems'
import Error from './Error'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function Newsletter(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [apiStatus, setApiStatus] = useState(true);
    const [totalResults, setTotalResults] = useState();
    //condition for stop auto scroll to last history browser behavior.
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }

    //function for API call (NEWS DATA).
    const updateNewsDetails = async (isConcat) => {
        !isConcat && props.setProgress(10);
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${isConcat ? page + 1 : page}&apiKey=${props.apiKey}`;
        isConcat && setPage(page + 1);
        !isConcat && props.setProgress(30);
        let data = await fetch(apiUrl);
        let parseData = await data.json();
        !isConcat && props.setProgress(70);
        if (parseData.status === "ok") {
            if (isConcat) {

                setArticles(articles.concat(parseData.articles));
                setLoading(false);
                setTotalResults(parseData.totalResults);
            } else {
                setArticles(parseData.articles);
                setLoading(false);
                setTotalResults(parseData.totalResults);
                props.setProgress(100);


            }
        } else {
            setApiStatus(false);
            props.setProgress(100);
        }
    }

    //function call after the render method.
    useEffect(() => {
        updateNewsDetails(false);
        // eslint-disable-next-line
    }, []);


    //function for infinite scroll to get data.
    const fetchMoreData = async () => {
        updateNewsDetails(true);
    }

    //function to scroll on top
    const handelOnClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        apiStatus === false ? <Error /> :
            <>
                <h1 className='text-center mt-4 mb-4'>{`Top ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines`}</h1>
                {loading ? <Loader /> :

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<p className='text-center'>Loading...</p>}
                    >
                        <div className="container mt-3">
                            <div className="row gy-4">
                                {articles.map(newsDetails => {
                                    return <div className="col-sm col-md-3" key={newsDetails.url}>
                                        <Newsitems title={newsDetails.title} description={newsDetails.description} imageUrl={newsDetails.urlToImage} newsUrl={newsDetails.url} sourceName={newsDetails.source.name} publishedAt={newsDetails.publishedAt} />
                                    </div>
                                })}

                            </div>
                            <div className='text-center mb-3'>
                                {articles.length !== totalResults ? "" : <button title='Click to go on top' className=' scroll-top' onClick={handelOnClick}><FontAwesomeIcon icon={faArrowUp} /></button>}
                            </div>

                        </div>

                    </InfiniteScroll>
                }
            </>
    )
}
Newsletter.defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
}
Newsletter.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}