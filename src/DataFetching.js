import React,{useState,useEffect} from 'react'
import axios from 'axios';

function DataFetching(){

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=year&sort_by=like_count')
        .then(res=>{
            setPosts(res.data.data.movies);
            console.log(posts);
        })
        .catch(err=>{
            console.log(err);
        })
        
    },[]);

    return (
        <div>
             {   posts.map(post=>
            
<div className="movie_card" id="ave" key={post.id}>
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={post.large_cover_image}/>
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
        <li><i className="material-icons"><a href={post.url}>More</a></i></li>
        {post.torrents.map(txt => 
        <li><i className="material-icons"><a href={txt.url}>{txt.quality}({txt.size})</a></i></li>
        )} 
        {/* <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li> */}
      </ul>
    </div> 
  </div>
  <div className="blur_back "  style={{backgroundImage: "url(" + post.large_cover_image + ")"}} ></div>

</div> 

            )} 
            
                


            
        </div>
    );
}
export default DataFetching
