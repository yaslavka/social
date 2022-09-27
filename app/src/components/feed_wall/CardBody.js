import React, {useState} from "react";
import {Link} from "react-router-dom";
import CardFooter from "./CardFooter";
import InputComment from "../Home/PostUserComents/PostDispley";

const CardBody = ({post, children, result, auth, postaction, serverPublic, setPostaction, users, }) => {
    const [readMore, setReadMore] = useState(false)
    const [com, setCom]= useState(false)
    return(
        <>
            <div className={"post_content"}>
                <div className={"post_info"}>
                    <div className={"wall_text"}>
                        <div className={"wall_post_cont _wall_post_cont"} id={post._id}>
                            <div className={"wall_post_text"}>
                                {
                                    post.content.length < 60
                                        ? post.content
                                        : readMore ? post.content + ' ' : post.content.slice(0, 60) + '.....'
                                }
                                {
                                    post.content.length > 60 &&
                                    <Link to={"#"} className={"wall_post_more"} onClick={() => setReadMore(!readMore)}>{readMore? 'Скрыть содержимое':'Показать полностью...'}</Link>
                                }
                                <div className={"PagePostLimitedThumbsContainer PostNoBottomSpaceAttach"}>
                                    <Link to={"#"} className={"PagePostLimitedThumbLink"}>
                                        <div className="PagePostLimitedThumbsContainer__background"/>
                                        <img alt={""} className={"PagePostLimitedThumb"} loading="lazy" style={{width:"604px",height:"452px"}}
                                             src={"https://res.cloudinary.com/localhostsite/image/upload/v1661501926/cld-sample-2.jpg"}/>
                                    </Link>
                                </div>
                                <CardFooter postaction={postaction} post={post} result={result}
                                            serverPublic={serverPublic}
                                            users={users} auth={auth}
                                            key={post._id}
                                            com={com}
                                            setCom={setCom}
                                            setPostaction={setPostaction}

                                />
                                <InputComment serverPublic={serverPublic} post={post} com={com} setCom={setCom}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}
export default CardBody