import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {likeComment, unLikeComment, updateComment} from "../../../redux/actions/commentAction";

const CommentCard = ({children, comment, post, commentId, serverPublic}) => {
    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    const [content, setContent] = useState('')
    const [readMore, setReadMore] = useState(false)

    const [onEdit, setOnEdit] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false)

    const [onReply, setOnReply] = useState(false)


    useEffect(() => {
        setContent(comment.content)
        setIsLike(false)
        setOnReply(false)
        if(comment.likes.find(like => like._id === auth.user._id)){
            setIsLike(true)
        }
    },[comment, auth.user._id])

    const handleUpdate = () => {
        if(comment.content !== content){
            dispatch(updateComment({comment, post, content, auth}))
            setOnEdit(false)
        }else{
            setOnEdit(false)
        }
    }


    const handleLike = async () => {
        if(loadLike) return;
        setIsLike(true)

        setLoadLike(true)
        await dispatch(likeComment({comment, post, auth}))
        setLoadLike(false)
    }

    const handleUnLike = async () => {
        if(loadLike) return;
        setIsLike(false)

        setLoadLike(true)
        await dispatch(unLikeComment({comment, post, auth}))
        setLoadLike(false)
    }


    const handleReply = () => {
        if(onReply) return setOnReply(false)
        setOnReply({...comment, commentId})
    }

    const styleCard = {
        opacity: comment._id ? 1 : 0.5,
        pointerEvents: comment._id ? 'inherit' : 'none'
    }


    return(
        <>
            <div id="post-105449850_47324" className={"reply reply_dived clear  reply_replieable _post"}>
                <div className={"reply_wrap _reply_content _post_content clear_fix"}>
                    <Link to={`/profile/${comment.user._id}`}>
                        <img loading="lazy" src={comment.user.avatar ? serverPublic + comment.user.avatar : serverPublic + "defaultProfile.png"} alt={""} className={"reply_img"}/>
                    </Link>
                    <div className={"reply_content"}>
                        <div className={"fl_r post_actions_wrap"}>

                        </div>
                        <div className={"reply_author"}>
                            <Link className="author" to={`/profile/${comment.user._id}`} data-from-id={comment.user._id}>{comment.user.full_name} {comment.user.last_name}</Link>
                        </div>
                        <div className={"reply_text"}>
                            <div id="wpt-105449850_47324">
                                <div className={"wall_reply_text"}>
                                    А ведь многие, наверное, тоже считали, что политика их не касается, всё это дело грязное. А теперь едут рисковать жизнями ради непонятных и преступных амбиций, заигравшегося в царя человечка.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}
export default CommentCard