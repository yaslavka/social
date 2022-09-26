import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const PostUserCard =({post, person, serverPublic})=>{
    return(
        <>
            <Link to={`/profile/${person._id}`} className={"PostHeaderImgContainer PostHeaderImgContainer--inHeader _post_image PostHeaderImgContainer--legacy"}>
                <div className={"post_image_stories"}>
                    <img src={person.avatar
                        ? serverPublic + person.avatar
                        : serverPublic + "defaultProfile.png"} data-post-click-type="post_owner_img" className={"post_img"} alt={person.avatar} data-post-id={post._id}/>
                </div>
            </Link>
            <div className={"PostHeaderInfo PostHeaderInfo--inHeader PostHeaderInfo--legacy"}>
                <h5 className={"post_author"}>
                    <Link data-from-id={post.user._id}
                          data-post-click-type="post_owner_link"
                          data-post-id={post._id}
                          className={"mem_link"} to={`/profile/${person._id}`}>
                        {person.full_name} {person.last_name}
                    </Link>
                </h5>
                <div className={"post_date"}>
                    <Link to={`/post/${post._id}`} className={"post_link"}>
                        <span className="rel_date">{moment(post.createdAt).fromNow()}</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default PostUserCard