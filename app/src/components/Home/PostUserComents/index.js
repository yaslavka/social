import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PostDispley from "./PostDispley";

const UserComents = ({post, serverPublic, users}) => {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState([])
    const [next, setNext] = useState(2)

    const [replyComments, setReplyComments] = useState([])

    useEffect(() => {
        const newCm = post.comments.filter(cm => !cm.reply)
        setComments(newCm)
        setShowComments(newCm.slice(newCm.length - next))
    },[post.comments, next])

    useEffect(()=> {
        const newRep = post.comments.filter(cm => cm.reply)
        setReplyComments(newRep)
    }, [post.comments])
    return (
        <>
            {
                users.map((user) => (
                    <div id={post.comments} className={"reply reply_dived clear  reply_replieable _post"}
                         data-answering-id={""}>
                        <div className={"reply_wrap _reply_content _post_content clear_fix"}>
                            <Link to={`/profile/${user._id}`} className={"reply_image"}>
                                <div className={"reply_image_stories"}>
                                    <img loading="lazy"
                                         src={
                                             user.avatar
                                                 ? serverPublic + user.avatar
                                                 : serverPublic + "defaultProfile.png"
                                         }
                                         className={"reply_img"} alt={""}/>
                                </div>
                            </Link>
                            {
                                showComments.map((comment, index)=>(
                                    <PostDispley key={index} comment={comment}
                                                 replyCm={replyComments.filter(item => item.reply === comment._id)}
                                                 user={user} post={post}/>
                                ))
                            }
                            
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default UserComents