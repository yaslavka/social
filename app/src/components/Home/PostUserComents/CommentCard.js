import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {likeComment, unLikeComment, updateComment} from "../../../redux/actions/commentAction";
import {useDispatch, useSelector} from "react-redux";

const CommentCard = ({user, post, comment, commentId, replyCm, children}) => {
    const { auth } = useSelector(state => state)
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
        if(post.likes.find(like => like._id === auth.user._id)){
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
            <div className={"fl_r post_actions_wrap"}>
                <div className={"post_actions"}>
                    <div className={"reply_report_button reply_action fl_r"} role={"button"}>

                    </div>
                </div>
            </div>
            <div className={"reply_author"}>
                <Link to={`/profile/${user._id}`}>
                    {user.full_name} {user.last_name}
                </Link>
            </div>
            <div className={"reply_text"}>
                <div id="wpt-61874395_431547">
                    <div className={"wall_reply_text"}>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}
export default CommentCard