import React from "react";
import PostCard from "./PostCard";
import LoadIcon from '../../images/loading.gif'
import LoadMoreBtn from "../LoadMoreBtn";


const Feedwall=({postaction, setPostaction, posts, result, handleLoadMore, load})=>{

    if (result===0) return <div id="feed_empty" className="page_block no_rows feed_empty search_empty " style={{width:"60%", borderRadius:"15px"}}>Здесь вы будете видеть новостную ленту своих друзей.</div>





    return(
        <>
            {
                posts.map(post => (
                    <PostCard key={post._id}  post={post}   postaction={postaction} setPostaction={setPostaction}/>
                ))
            }
            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }
            {
                !posts.loading &&
                <LoadMoreBtn result={posts.result} page={posts.page}
                             load={load} handleLoadMore={handleLoadMore} />
            }
        </>
    )
}
export default Feedwall