import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);
    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
            return;
        } else {
            setPage(page + 1);
            setIsFetching(true);
        }
    }
    function loadMore() {
        setPage(page + 1);
        setIsFetching(true);
    }
    function fetchMoreListItems() {
        axios.get('https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=year&sort_by=like_count&page=' + page)
            .then(res => {
                setPosts(prevState => ([...prevState, ...res.data.data.movies]));
                setIsFetching(false);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            {posts.map(post =>
                <div className="movie_card" id="ave" key={post.id + post.imdb_code + post.runtime}>
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={post.large_cover_image} alt="coverImage" />
                            <h1>{post.title}</h1>
                            <h4>{post.year}, Rating {post.rating}</h4>
                            <span className="minutes">{post.runtime} min</span>
                            <p className="type">
                                {post.genres.map(txt => <span> | {txt}</span>)}
                            </p>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {post.summary}
                            </p>
                        </div>
                        <div className="movie_social">
                            <ul>
                                <li><i className="gotoLink"><a href={post.url} target="_blank" rel="noreferrer">View in YTS</a></i></li>
                            </ul>
                            <br></br>
                            <ul>
                                <li><i className="material-icons">Download</i></li>
                                {post.torrents && post.torrents.map(txt =>
                                    <li><i className="gotoLink"><a href={txt.url}>{txt.quality}({txt.size})</a></i></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="blur_back " style={{ backgroundImage: "url(" + post.large_cover_image + ")" }} ></div>
                </div>
            )}
            {!isFetching && <b className="fetching" onClick={loadMore}>Load More</b>}
            {isFetching && <b className="fetching">Fetching more list items...</b>}
        </div>
    );
}
export default DataFetching
