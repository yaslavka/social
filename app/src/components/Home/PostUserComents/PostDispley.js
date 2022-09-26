import React, {useEffect, useState} from "react";
import CommentCard from "./CommentCard";

const PostDispley = ({user, post, comment,  replyCm}) => {
    const [showRep, setShowRep] = useState([])
    const [next, setNext] = useState(1)

    useEffect(() => {
        setShowRep(replyCm.slice(replyCm.length - next))
    },[replyCm, next])
    return(
        <>
            <div className={"reply_content"}>
                <CommentCard post={post} user={user}
                             comment={comment} commentId={comment._id}
                             replyCm={replyCm} >
                    {
                        showRep.map((item, index) => (
                            item.reply &&
                            <CommentCard
                                key={index}
                                comment={item}
                                post={post}
                                commentId={comment._id}
                            />
                        ))
                    }
                </CommentCard>

            </div>
        </>
    )
}
export default PostDispley