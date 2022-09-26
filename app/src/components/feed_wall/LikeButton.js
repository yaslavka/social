import React from "react";
import ButtonunLike from "./ButtonunLike";
import ButtonLike from "./ButtonLike";

const LikeButton = ({handleLike, handleUnLike, isLike, post, auth, setIsLike}) => {
    return(
        <>
            {
                isLike
                ?<ButtonunLike post={post} isLike={isLike} handleUnLike={handleUnLike} auth={auth} setIsLike={setIsLike}/>
                :<ButtonLike post={post} handleLike={handleLike} auth={auth} setIsLike={setIsLike}/>
            }
        </>
    )
}
export default LikeButton

