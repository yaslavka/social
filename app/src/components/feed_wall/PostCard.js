import React, {useEffect, useState} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import {getDataAPI} from "../../utils/fetchData";
import {useSelector} from "react-redux";


const PostCard = ({ result, postaction, setPostaction, post}) => {
    const [users, setUsers] = useState([])
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const {auth} = useSelector(state => state)

    useEffect(() => {
        const fetchPersons = async () => {
            const data  = await getDataAPI('users', auth.token);
            setUsers(data.data.users);
        };
        fetchPersons();
    }, [auth.token])




    return(
        <div className={"wall_wrap clear_fix"}>
            <div id="feed_wall" className={"clear_fix "}>
                <div className={"wall_module"}>
                    <div className={"_feed_rows"} id="feed_rows">
                        <div className={"feed_row"}>
                            <div id={post._id}
                                 data-post-id={post._id}
                                 className={"_post post page_block post_signed post--withPostBottomAction  post--with-likes deep_active"}>
                                <div className={"_post_content"}>
                                    <CardHeader postaction={postaction} post={post} result={result}
                                                serverPublic={serverPublic}
                                                users={users} auth={auth}
                                                key={post._id}
                                                setPostaction={setPostaction}/>
                                    <CardBody  postaction={postaction} post={post} result={result}
                                               serverPublic={serverPublic}
                                               users={users} auth={auth}
                                               key={post._id}
                                               setPostaction={setPostaction} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostCard