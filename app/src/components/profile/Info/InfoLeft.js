import React, {useState} from "react";
import {Link} from "react-router-dom";
import EditProfile from "./Button/Edit";
import FollowBtn from "./Button/FollowBtn";
import MsgBtn from "./Button/MsgBtn";
import Following from "./Following";
import Followers from "./Followers";
import MassageModalWindow from "../../modalwindow/messegemodal";


const InfoLeft =({auth, setOnEdit, setShowFollowers, setShowFollowing, user, serverPublic})=>{
    const [messege, setMessege] = useState(false)
    return(
        <>
            {
                messege && <MassageModalWindow messege={messege} user={user} serverPublic={serverPublic} setMessege={setMessege}/>
            }
            <div className={"narrow_column_wrap"} >
                <div className={"narrow_column"} id="narrow_column" onClick={e=>e.stopPropagation()}>
                    <div className={"page_block page_photo ProfileActions"}>
                        <div className={"owner_photo_wrap actions_with_effects"} id="owner_photo_wrap">
                            {
                                auth.user._id === user._id &&
                                <div className={"owner_photo_top_bubble_wrap"}>
                                    <div className={"owner_photo_top_bubble"}>
                                        <div className={"ui_thumb_x_button"} data-title={"Удалить фотографию"}
                                             onMouseOver={""} tabIndex={"0"} aria-label={"Удалить фотографию"}
                                             role={"button"}>
                                            <div className="ui_thumb_x"/>
                                        </div>
                                        <div className={"tt_w tt_black tt_up"}
                                             style={{display: "none", position: "absolute", opacity: "1", top: "26px", left: "-29px", pointerEvents: "auto"}}
                                        >
                                            <div className="tt_text">Удалить фотографию</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className={"page_avatar_wrap"} id="page_avatar_wrap">
                                <aside aria-label="Фотография">
                                    <div id="page_avatar" className={"page_avatar"}>
                                        <Link to={"#"} id="profile_photo_link">
                                            <img className={"page_avatar_img"} alt={""} src={
                                                user.avatar
                                                    ? serverPublic + user.avatar
                                                    : serverPublic + "defaultProfile.png"
                                            }/>
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                            {
                                auth.user._id === user._id &&
                                <div className={"owner_photo_bubble_wrap"}>
                                    <div className={"owner_photo_bubble"}>
                                        <div className={"owner_photo_bubble_action owner_photo_bubble_action_update"} style={{padding:"0px 10px 30px"}} role={"button"} tabIndex={"0"}>
                                            <span className="owner_photo_bubble_action_in">Обновить фотографию</span>
                                        </div>
                                        <div className={"owner_photo_bubble_action owner_photo_bubble_action_crop"} style={{padding:"0px 10px 30px"}} tabIndex={"0"} role={"button"}>
                                            <span className="owner_photo_bubble_action_in">Изменить миниатюру</span>
                                        </div>
                                        <div className={"owner_photo_bubble_action owner_photo_bubble_action_effects"} style={{padding:"0px 10px 30px"}} tabIndex={"0"} role={"button"}>
                                            <span className="owner_photo_bubble_action_in">Добавить эффекты</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <aside aria-label="Действия со страницей">
                            {
                                auth.user._id !== user._id &&
                                <MsgBtn user={user} messege={messege} setMessege={setMessege}/>

                            }
                            <div className={"profile_actions"}>
                                <div className={"page_actions_wide clear_fix no_actions edit"}>
                                    <div className={"page_action_left fl_l"}>
                                        <div role={"button"} className={"FlatButton FlatButton--secondary FlatButton--size-m FlatButton--wide"}>
                                            {
                                                user._id === auth.user._id
                                                ? <EditProfile setOnEdit={setOnEdit}/>
                                                :<FollowBtn user={user}/>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className={"page_block"}>
                        {
                            setShowFollowing &&
                            <aside aria-label={"Друзья"}>
                                <div className={"module clear people_module _module"} id="profile_friends">
                                    <Link to={"link"} className={"header_right_link fl_r"}>Обновления</Link>
                                    <Following serverPublic={serverPublic}
                                               setShowFollowing={setShowFollowing} users={user.following}
                                            user={user}
                                        />
                                </div>
                            </aside>
                        }
                        {
                            setShowFollowers &&
                                <Followers
                                    users={user.followers}
                                    setShowFollowers={setShowFollowers}
                                    user={user} serverPublic={serverPublic}
                                />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default InfoLeft