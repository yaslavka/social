import React, {useEffect, useState} from "react";
import CommentCard from "./Coment";

const CommentDisplay = ({comment, post, replyCm, serverPublic}) => {
    const [showRep, setShowRep] = useState([])
    const [next, setNext] = useState(1)

    useEffect(() => {
        setShowRep(replyCm.slice(replyCm.length - next))
    },[replyCm, next])

    return(
        <>
            <div className={"replies_list _replies_list"} id="replies-105449850_47322">
                <CommentCard comment={comment} post={post} commentId={comment._id} serverPublic={serverPublic}/>
            </div>
        </>
    )
}
export default CommentDisplay