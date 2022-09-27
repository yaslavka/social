import React, {useState} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import CardBody from "../../feed_wall/CardBody";
import PostdHeader from "./PostHeader";

const Wallmodule = ({
                        auth, user, serverPublic,
                        users, postactio, setPostactio, postacti, setPostacti,
                        posts, result,  children
                    }) => {
    const [isactive, setIsActive] = useState(false)
    const [wall, setWall] = useState(true)

    return (
        <>
            <div className={"wall_module"} id="profile_wall" >
                <div className={"page_block"}>
                    <h2 className={"page_block_h2 "}>
                        <ul className={"ui_tabs clear_fix ui_tabs_with_progress"} id="wall_tabs" data-inited="1">
                            <li className={"_wall_tab_all"} onClick={() => setWall(false)}>
                                <a href={"#1"} className={isactive ? "ui_tab ui_tab_sel" : "ui_tab"}
                                   onClick={() => setIsActive(true)}>Все записи</a>
                            </li>
                            <li className={"_wall_tab_own"} onClick={() => setIsActive(false)}>
                                {
                                    user._id === auth.user._id
                                        ? <a href={"#1"} className={wall ? "ui_tab ui_tab_sel" : "ui_tab"}
                                             onClick={() => setWall(true)}>Мои записи</a>
                                        : <a href={"#1"} className={wall ? "ui_tab ui_tab_sel" : "ui_tab"}
                                             onClick={() => setWall(true)}>Записи {user.full_name}</a>
                                }
                            </li>
                        </ul>
                    </h2>
                </div>
                <div id="page_wall_posts" className={isactive ? "wall_posts mark_top all" : "wall_posts mark_top own"} style={{display: "block"}} data-stat-container="user_wall">
                    <input type="hidden" id="page_wall_count_all" value="107"/>
                    <input type="hidden" id="page_wall_count_own" value="107"/>
                    {
                        posts.map(post => (
                            <div id={post._id} key={post._id} className={"_post post page_block all own post_copy post--withPostBottomAction  post--with-likes closed_comments deep_active"}>
                                <div className={"_post_content"}>
                                    <div className={"PostHeader PostHeader--legacy PostHeader--inPost js-PostHeader"}>
                                        <Link key={user._id} to={`/profile/${user._id}`}
                                              className={"PostHeaderImgContainer PostHeaderImgContainer--inHeader _post_image PostHeaderImgContainer--legacy"}>
                                            <div className={"post_image_stories"}>
                                                <img src={
                                                    user.avatar
                                                        ? serverPublic + user.avatar
                                                        : serverPublic + "defaultProfile.png"
                                                } data-post-id={post._id} data-post-click-type="post_owner_img"
                                                     className="post_img" alt="Вячеслав Вячеслав"/>
                                            </div>
                                        </Link>
                                        <div className={"PostHeaderInfo PostHeaderInfo--inHeader PostHeaderInfo--legacy"}>
                                            <h5 className={"post_author"}>
                                                <Link to={`/profile/${user._id}`} className={"author"}
                                                      data-from-id={user._id} data-post-id={post._id}
                                                      data-post-click-type="post_owner_link">
                                                    {user.full_name} {user.last_name}
                                                </Link>
                                            </h5>
                                            <div className={"post_date"}>
                                                <Link to={`/post/${post._id}`} className={"post_link"}>
                                                    <span className="rel_date">{moment(post.createdAt).fromNow()}</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <PostdHeader setPostacti={setPostacti} postacti={postacti} auth={auth} post={post._id} key={post._id} />
                                    </div>
                                    <CardBody post={post}  key={post._id} auth={auth} postaction={postactio} setPostaction={setPostactio} users={users} serverPublic={serverPublic} result={result}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {children}
        </>
    )
}
export default Wallmodule